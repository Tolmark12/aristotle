module.exports = class EpisodeLoader

  constructor: (@callback) ->
    @loadEpisode()

  loadEpisode: ()->
    @loadJson aristotle.episodeRoot + "/map.json", (json)=>
      @callback JSON.parse(json)


  loadJson : (path, onComplete) ->
    xobj = new XMLHttpRequest()
    xobj.overrideMimeType 'application/json'
    xobj.open 'GET', path, true
    xobj.onreadystatechange = ()=>
      if xobj.readyState == 4 && xobj.status == 200
        onComplete xobj.responseText
    xobj.send(null)
