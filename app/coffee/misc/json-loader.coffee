module.exports = class JsonLoader

  constructor: (@callback) ->
    aristotle.getJson = @load

  # Load the local config vars
  load : (jsonPath, cb) =>
    @loadJson jsonPath, (json)=>
      cb JSON.parse( json )

  loadJson : (path, onComplete) ->
    xobj = new XMLHttpRequest()
    xobj.overrideMimeType 'application/json'
    xobj.open 'GET', path, true
    xobj.onreadystatechange = ()=>
      if xobj.readyState == 4 && xobj.status == 200
        onComplete xobj.responseText
    xobj.send(null)
