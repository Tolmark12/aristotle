Episode = require "episode"

class Aristotle

  constructor: (el, episodeRoot) ->
    Aristotle.episodeRoot = episodeRoot
    @loadJson Aristotle.episodeRoot + "/map.json", (result)=>
      episode = new Episode el, JSON.parse(result)

  loadJson : (path, onComplete) ->
    xobj = new XMLHttpRequest()
    xobj.overrideMimeType 'application/json'
    xobj.open 'GET', path, true
    xobj.onreadystatechange = ()=>
      if xobj.readyState == 4 && xobj.status == 200
        onComplete xobj.responseText
    xobj.send(null)

window.Aristotle = Aristotle