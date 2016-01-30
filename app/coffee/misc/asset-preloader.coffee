module.exports = class AssetPreloader
  @count :0

  constructor: (data, @callback, @progressCallback) ->
    @id = AssetPreloader.count++
    if !data?
      @callback()
      return

    @preloadAssets data

    # + Possibly destroying at the start of each load would allow us to not need to refresh the page
    # @preloadQueue.destroy();

  preloadAssets: (@data)->
    @generateRandomStr()
    assets = []
    regex = /.+\.(svg)/
    @lookForFiles @data, assets, regex

    # If there are no assets, return and callback
    if assets.length == 0
      @callback()
      return

    createjs.Sound.alternateExtensions = ["mp3", "m4a"]
    @preloadQueue = new createjs.LoadQueue()
    @preloadQueue.installPlugin createjs.Sound

    window.jax = @preloadQueue

    @erroredFiles = []
    # # On load progress
    if @progressCallback?
      @progressHandler = @preloadQueue.on "progress", @progressHandler
    @completeHandler   = @preloadQueue.on "complete", @completeHandler
    @errorHandler      = @preloadQueue.on "error",    @errorHandler

    assets = @removeDuplicates assets

    # Put the mp3's first!!!
    assets = @orderFilesForLoad assets
    # Load it!
    @preloadQueue.loadManifest assets

  tryToLoadErroredFiles : () ->
    log "Attempting to reload #{@erroredFiles.length} files"
    @erroredFiles = @orderFilesForLoad @erroredFiles
    @preloadQueue.loadManifest @erroredFiles
    @erroredFiles = []
    console.log "hello"

  # ------------------------------------ Event Handlers

  progressHandler : (e)=>
    @progressCallback e.loaded

  completeHandler : ()=>
    if @erroredFiles.length > 0
      setTimeout ()=>
        @tryToLoadErroredFiles()
      ,
        900
    else
      return if @isComplete
      @isComplete = true
      @callback @data
      @removeEventListeners()

  errorHandler : (e)=>
    @generateRandomStr()
    log "FILE LOAD ERROR : #{e.data.id}"
    createjs.Sound.removeSound e.data.id
    @erroredFiles.push {src: e.data.src, id: e.data.id}

  removeEventListeners : () ->
    @preloadQueue.removeEventListener @progressHandler
    @preloadQueue.removeEventListener @completeHandler
    @preloadQueue.removeEventListener @errorHandler

  lookForFiles : (item, storage, regex)->
    type = typeof item
    if type == "string"
      if  /.mp3|.m4a|.json/.test(item)
        fullPath = "#{aristotle.getAssetPath(item)}"
        storage.push {src:fullPath,  id:item}

    else if type == "object"
      if Array.isArray(item)
        for child in item
          @lookForFiles child, storage, regex
      else
        for key, child of item
          @lookForFiles child, storage, regex

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


  generateRandomStr : () -> @stamp = new Date().getTime()

  removeDuplicates : (ar)->
    items = {}
    newArray = []
    for item in ar
      if !items[item.id]?
        items[item.id] = ""
        newArray.push item
    newArray

window.AssetPreloader = AssetPreloader