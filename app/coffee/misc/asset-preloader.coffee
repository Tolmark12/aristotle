module.exports = class AssetPreloader
  @count :0

  constructor: (data, @callback, @progressCallback) ->
    if !aristotle.soundLibrary?
      aristotle.soundLibrary = {}

    # Create a single object with reference to
    # all the dead file ids
    if !aristotle.deadFiles?
      aristotle.deadFiles = {}

    @id = AssetPreloader.count++
    @totalRetries = 0
    if !data?
      @callback()
      return


    # Prepare to preload assets
    ar = []
    @lookForFiles data, ar
    [@mp3s, @otherFiles]  = @separateMp3s ar
    @mp3s                 = @removeDuplicates @mp3s
    @otherFiles           = @removeDuplicates @otherFiles
    @soundsLoaded         = 0
    @totalSounds          = @mp3s.length

    # Only load sounds if the training has sound turned on
    if aristotle.sound
      # Load all the sounds, one at a time
      @loadNextSound()
    else
      @preloadOtherFiles @otherFiles

  loadNextSound : ()->
    data =
      urls      : [@mp3s[@soundsLoaded].src]
      onload    : @onSoundLoaded
      onloaderr : @onSoundError

    sound           = new Howl(data).load()
    @loadingSoundId = @mp3s[@soundsLoaded].id
    aristotle.soundLibrary[ @loadingSoundId ] = sound

  onSoundLoaded : () =>
    @soundsLoaded++
    @maybeLoadNext()

  onSoundError  : () =>
    @soundsLoaded++
    aristotle.soundLibrary[ @loadingSoundId ] = "ERRORED"
    @maybeLoadNext()

  maybeLoadNext : () ->
    if @soundsLoaded != @totalSounds
      @loadNextSound()
    else
      @preloadJson
      @preloadOtherFiles @otherFiles
      for mp3 in @mp3s
        console.log mp3.id + ' : ' + mp3.src



  preloadOtherFiles   : (assets) ->
    if assets.length == 0
      @callback()
      return

    @preloadQueue = new createjs.LoadQueue()
    @erroredFiles = []
    # # On load progress
    if @progressCallback?
      @progressHandler = @preloadQueue.on "progress", @progressHandler
    @completeHandler   = @preloadQueue.on "complete", @completeHandler
    @errorHandler      = @preloadQueue.on "error",    @errorHandler

    # Load it!
    @preloadQueue.loadManifest assets

  tryToLoadErroredFiles : () ->
    log "Attempting to reload #{@erroredFiles.length} files"
    appInsights.trackEvent "Preload : Retrying Errored Files", { TotalFiles:@erroredFiles.length, AttemptNum:@totalRetries, Files: @printStr(@erroredFiles), SessionId: aristotle.globals.get("sessionKey"), Episode:aristotle.episodeNum }
    @erroredFiles = @orderFilesForLoad @erroredFiles
    @preloadQueue.loadManifest @erroredFiles
    @erroredFiles = []

  # ------------------------------------ Event Handlers

  progressHandler : (e)=>
    @progressCallback e.loaded

  completeHandler : ()=>
    # If there are files that couldn't load, try to load them again.
    if @erroredFiles.length > 0
      # Only try to reload the files `n` number of times
      if @totalRetries++ < 5
        setTimeout ()=>
          @tryToLoadErroredFiles()
        ,
          900
      else
        # Copy all of the errored files into a global collection of dead files
        @noteDeadFiles @erroredFiles
        @continueWhenComplete()
    else
      @continueWhenComplete()

  continueWhenComplete : () ->
    return if @isComplete
    @isComplete = true
    @callback @data
    @removeEventListeners()

  errorHandler : (e)=>
    log "FILE LOAD ERROR : #{e.data.id}"
    createjs.Sound.removeSound e.data.id
    @erroredFiles.push {src: e.data.src, id: e.data.id}

  removeEventListeners : () ->
    @preloadQueue.removeEventListener @progressHandler
    @preloadQueue.removeEventListener @completeHandler
    @preloadQueue.removeEventListener @errorHandler

  lookForFiles : (item, storage)->
    type = typeof item
    if type == "string"
      if  /.mp3|.m4a|.json/.test(item)
        fullPath = "#{aristotle.getAssetPath(item)}"
        storage.push {src:fullPath,  id:item}

    else if type == "object"
      if Array.isArray(item)
        for child in item
          @lookForFiles child, storage
      else
        for key, child of item
          @lookForFiles child, storage

  orderFilesForLoad : (ar) ->
    mp3s  = []
    json  = []
    other = []
    for item in ar
      if /.mp3|.m4a/.test item.id
        mp3s.push item
      else if /.json/.test item.id
        json.push item
      else
        other.push item
    return mp3s.concat other, json

  separateMp3s : (ar) ->
    mp3s  = []
    json  = []
    other = []
    for item in ar
      if /.mp3|.m4a/.test item.id
        mp3s.push item
      else if /.json/.test item.id
        json.push item
      else
        other.push item
    return [ mp3s, other.concat(json) ]

  removeDuplicates : (ar)->
    items = {}
    newArray = []
    for item in ar
      if !items[item.id]?
        items[item.id] = ""
        newArray.push item
    newArray

  # Create a reference to all of the dead files
  noteDeadFiles : (erroredFiles) ->
    for item in erroredFiles
      aristotle.deadFiles[item.id] = ""
    appInsights.trackEvent "Preload : Unable To Load Files", { TotalFiles:erroredFiles.length, Files: @printStr(erroredFiles), SessionId: aristotle.globals.get("sessionKey"), Episode:aristotle.episodeNum }

  printStr : (ar) ->
    returnAr = []
    for item in ar
      returnAr.push item.id
    returnAr.join ","

window.AssetPreloader = AssetPreloader
