module.exports = class EpisodeLoader

  constructor: (@callback) ->
    @loadConfigData()

  # Load the local config vars
  loadConfigData : () ->
    @loadJson "local/config.json", (json)=>
      for key, val of JSON.parse( json )
        aristotle.globals.set key, val, false
      @loadEpisode()

  # Load the Episode
  loadEpisode: ()->
    @loadJson aristotle.getAssetPath("map.json"), (json)=>
      @callback JSON.parse(json)

  loadJson : (path, onComplete) ->
    xobj = new XMLHttpRequest()
    xobj.overrideMimeType 'application/json'
    xobj.open 'GET', path, true
    xobj.onreadystatechange = ()=>
      if xobj.readyState == 4 && xobj.status == 200
        onComplete xobj.responseText
    xobj.send(null)
