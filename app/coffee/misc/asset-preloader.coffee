module.exports = class AssetPreploader

  constructor: (data, @callback, @progressCallback) ->
    @preloadAssets data

  preloadAssets: (data)->
    assets = []
    regex = /.+\.(svg)/
    @lookForFiles data, assets, regex

    # If there are no assets, return and callback
    if assets.length == 0
      @callback()
      return

    createjs.Sound.alternateExtensions = ["mp3", "m4a"]
    preloadQueue = new createjs.LoadQueue()
    # preloadQueue.setMaxConnections 10
    preloadQueue.installPlugin createjs.Sound

    # On load progress
    if @progressCallback?
      preloadQueue.on "progress", (e)=>
        if e.loaded > 1 then e.loaded = 1
        @progressCallback e.loaded

    # On load complete
    preloadQueue.on "complete", ()=>
      @callback data

    # Load it!
    preloadQueue.loadManifest assets

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
