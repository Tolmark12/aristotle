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

  preloadAssets: (data)->
    assets = []
    regex = /.+\.(svg)/
    @lookForFiles data, assets, regex

    # If there are no assets, return and callback
    if assets.length == 0
      @callback()
      return

    createjs.Sound.alternateExtensions = ["mp3", "m4a"]
    @preloadQueue = new createjs.LoadQueue()
    @preloadQueue.installPlugin createjs.Sound

    window.jax = @preloadQueue

    # On load progress
    if @progressCallback?
      @progressHandler = @preloadQueue.on "progress", (e)=>
        @preloadQueue.setPaused true
        setTimeout ()=>
          @preloadQueue.setPaused false
        ,
          2000
        if e.loaded > 1 then e.loaded = 1
        @progressCallback e.loaded

    # On load complete
    @completeHandler = @preloadQueue.on "complete", ()=>
      return if @isComplete
      @isComplete = true
      @callback data
      @preloadQueue.removeEventListener @progressHandler
      @preloadQueue.removeEventListener @completeHandler

    # Load it!
    @preloadQueue.loadManifest assets

    # for asset in assets
      # console.log "--"
      # console.log "#{asset.type}"
      # console.log "#{asset.mimeType}"
      # console.log "#{asset.src}"

  lookForFiles : (item, storage, regex)->
    type = typeof item
    if type == "string"
      if  /.mp3|.m4a|.json/.test(item) then storage.push {src:"#{aristotle.getAssetPath(item)}",  id:item}
      # if  /.mp3|.m4a|.json|.svg|.jpg|.jpeg|.png/.test(item) then storage.push {src:"#{aristotle.getAssetPath(item)}",  id:item}

    else if type == "object"
      if Array.isArray(item)
        for child in item
          @lookForFiles child, storage, regex
      else
        for key, child of item
          @lookForFiles child, storage, regex
