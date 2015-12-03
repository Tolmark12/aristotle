module.exports = class AssetPreploader

  constructor: (data, @callback) ->
    @preloadAssets data

  preloadAssets: (data)->
    assets = []
    regex = /.+\.(svg)/
    @lookForFiles data, assets, regex
    if assets.length == 0
      @callback()
      return

    createjs.Sound.alternateExtensions = ["mp3", "m4a"]
    preloadQueue = new createjs.LoadQueue()
    preloadQueue.installPlugin createjs.Sound

    # On load progress
    preloadQueue.on "progress", (e)=>
      # console.log e.loaded

    # On load complete
    preloadQueue.on "complete", ()=>
      @callback data

    # Load it!
    preloadQueue.loadManifest assets

  lookForFiles : (item, storage, regex)->
    type = typeof item
    if type == "string"
      if      /.mp3|.m4a/.test(item)            then storage.push {src:"#{aristotle.episodeRoot}/sounds/#{item}",      id:item}
      else if /.json/.test(item)                then storage.push {src:"#{aristotle.episodeRoot}/animations/#{item}",  id:item}
      else if /.svg|.jpg|.jpeg|.png/.test(item) then storage.push {src:"#{aristotle.episodeRoot}/assets/#{item}",      id:item}

    else if type == "object"
      if Array.isArray(item)
        for child in item
          @lookForFiles child, storage, regex
      else
        for key, child of item
          @lookForFiles child, storage, regex

