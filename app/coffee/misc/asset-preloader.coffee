AudioSprite = require 'misc/audio-sprite'

module.exports = class AssetPreloader
  @count :0

  constructor: (data, @callback, @progressCb, @setContextCb) ->
    @id = AssetPreloader.count++
    @totalRetries = 0
    if !data?
      @callback()
      return

    @sprites = data.sprites
    @files = []

    @lookForFiles data, @files
    @files = @removeDuplicates @files
    @preloadFiles @files

  preloadFiles   : (assets) ->
    window.preloader = @
    if assets.length == 0
      @callback()
      return

    @preloadQueue = new createjs.LoadQueue()
    @erroredFiles = []
    # # On load progress
    if @progressCb?
      @progressHandle = @preloadQueue.on "progress", @onProgress
    @completeHandle   = @preloadQueue.on "complete", @onComplete
    @errorHandle      = @preloadQueue.on "error",    @onError

    @addCtanleeAnimations assets

    # Load it!
    @preloadQueue.loadManifest assets


  createAudioSprite : () ->
    audioSprite = new AudioSprite @spriteLoadComplete, @sprites

  spriteLoadComplete : () =>
    @callback @data

  tryToLoadErroredFiles : () ->
    log "Attempting to reload #{@erroredFiles.length} files"
    appInsights.trackEvent "Preload : Retrying Errored Files", { TotalFiles:@erroredFiles.length, AttemptNum:@totalRetries, Files: @printStr(@erroredFiles), SessionId: aristotle.globals.get("sessionKey"), Episode:aristotle.episodeNum }
    @erroredFiles = @orderFilesForLoad @erroredFiles
    @preloadQueue.loadManifest @erroredFiles
    @erroredFiles = []

  # ------------------------------------ Event Handlers

  onProgress : (e)=>
    @progressCb e.loaded

  onComplete : ()=>
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
    @createAudioSprite()
    @removeEventListeners()

  onError : (e)=>
    log "FILE LOAD ERROR : #{e.data.id}"
    createjs.Sound.removeSound e.data.id
    @erroredFiles.push {src: e.data.src, id: e.data.id}

  removeEventListeners : () ->
    @preloadQueue.removeEventListener @progressHandle
    @preloadQueue.removeEventListener @completeHandle
    @preloadQueue.removeEventListener @errorHandle

  # ------------------------------------ HELPERS

  lookForFiles : (item, storage)->
    type = typeof item
    if type == "string"
      # if  /.mp3|.m4a|.json/.test(item)
      if  /.json/.test(item)
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

  addCtanleeAnimations : (assets) ->
    ar = [
      'ctanlee-angry.json'
      'ctanlee-happy.json'
      'ctanlee-idle.json'
      'ctanlee-look-down.json'
      'ctanlee-look-left.json'
      'ctanlee-look-right.json'
      'ctanlee-surprise.json'
      'ctanlee-unhappy.json'
      'ctanlee-idle.json'
    ]

    for item in ar
      ctanlee = "~g/ctanlee/#{item}"
      assets.push {src:"#{aristotle.getAssetPath(ctanlee)}",  id:ctanlee}

  printStr : (ar) ->
    returnAr = []
    for item in ar
      returnAr.push item.id
    returnAr.join ","

window.AssetPreloader = AssetPreloader

# ------------------------------------ ------------------------------------

    # @soundsLoaded    = 0
    # @totalSounds     = @mp3s.length

    # # Only load sounds if the training has sound turned on
    # if aristotle.sound
    #   # Load all the sounds, one at a time
    #   if @setContextCb?
    #     @setContextCb "Loading Sounds"
    #   @loadNextSound()
    # else
    #   if @setContextCb?
    #     @setContextCb "Loading Animation"
    #   @preloadFiles @files

  # loadNextSound : ()->
  #   if @setContextCb?
  #     @setContextCb "Loading Sounds  <span>#{@mp3s[@soundsLoaded].id}</span>"
  #   data =
  #     urls        : [@mp3s[@soundsLoaded].src]
  #     onload      : @onSoundLoaded
  #     onloaderror : @onSoundError
  #
  #   sound           = new Howl data
  #   @loadingSoundId = @mp3s[@soundsLoaded].id
  #   aristotle.soundLibrary[ @loadingSoundId ] = sound
  #
  # onSoundLoaded : () =>
  #   @soundsLoaded++
  #   @maybeLoadNext()
  #
  # onSoundError  : (id, errorCode) =>
  #   appInsights.trackEvent "Preload : Error loading Sound. ID:#{id}, CODE:#{errorCode}"
  #   @soundsLoaded++
  #   aristotle.soundLibrary[ @loadingSoundId ] = "ERRORED"
  #   @maybeLoadNext()
  #
  # maybeLoadNext : () ->
  #   if @progressCb?
  #     @progressCb @soundsLoaded/@totalSounds
  #   if @soundsLoaded != @totalSounds
  #     @loadNextSound()
  #   else
  #     if @setContextCb
  #       @setContextCb "Loading Animation"
  #     @preloadFiles @files
