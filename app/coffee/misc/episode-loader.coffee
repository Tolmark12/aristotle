module.exports = class EpisodeLoader

  constructor: (@callback) ->
    @loadEpisode()

  loadEpisode: ()->
    @loadJson aristotle.episodeRoot + "/map.json", (json)=>
      # @callback JSON.parse(json)
      @preloadAssets JSON.parse(json)


  loadJson : (path, onComplete) ->
    xobj = new XMLHttpRequest()
    xobj.overrideMimeType 'application/json'
    xobj.open 'GET', path, true
    xobj.onreadystatechange = ()=>
      if xobj.readyState == 4 && xobj.status == 200
        onComplete xobj.responseText
    xobj.send(null)

  preloadAssets: (data)->
    assets = []
    regex = /.+\.(svg)/
    @lookForFiles data, assets, regex
    createjs.Sound.alternateExtensions = ["mp3"]
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
      if      /.mp3/.test(item)  then storage.push {src:"#{aristotle.episodeRoot}/sounds/#{item}",      id:item}
      else if /.json/.test(item) then storage.push {src:"#{aristotle.episodeRoot}/animations/#{item}",  id:item}
      else if /.svg/.test(item)  then storage.push {src:"#{aristotle.episodeRoot}/assets/#{item}",      id:item}

    else if type == "object"
      if Array.isArray(item)
        for child in item
          @lookForFiles child, storage, regex
      else
        for key, child of item
          @lookForFiles child, storage, regex

