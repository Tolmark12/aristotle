module.exports = class AssetPreploader

  constructor: (data, @callback) ->
    @preloadAssets data

  preloadAssets: (data)->
    aristotle.preloadBar.init data.title
    assets = []
    regex = /.+\.(svg)/
    @lookForFiles data, assets, regex

    # If there are no assets, return and callback
    if assets.length == 0
      @callback()
      return

    createjs.Sound.alternateExtensions = ["mp3", "m4a"]
    preloadQueue = new createjs.LoadQueue()
    preloadQueue.installPlugin createjs.Sound

    # On load progress
    preloadQueue.on "progress", (e)=>
      aristotle.preloadBar.update(e.loaded)

    # On load complete
    preloadQueue.on "complete", ()=>
      aristotle.preloadBar.complete()
      @callback data

    # Load it!
    preloadQueue.loadManifest assets

  lookForFiles : (item, storage, regex)->
    type = typeof item
    if type == "string"
      if  /.mp3|.m4a|.json|.svg|.jpg|.jpeg|.png/.test(item) then storage.push {src:"#{aristotle.getAssetPath(item)}",  id:item}

    else if type == "object"
      if Array.isArray(item)
        for child in item
          @lookForFiles child, storage, regex
      else
        for key, child of item
          @lookForFiles child, storage, regex
