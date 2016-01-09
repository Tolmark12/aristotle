module.exports = class Parser

  constructor : () ->
    window.parse           = @parseAny
    window.pObj            = @parseObject
    aristotle.getAssetPath = @getAssetPath

  parseAny : (item)=>
    if typeof item == "string"
      return @parseString item
    else
      return @parseObject item

  # If it's a variable, return the global variable value
  parseString : (str)=>
    if @isVariable(str)
      return aristotle.globals.get str.substr(1)
    else
      return str

  # Check to see if this string is prefixed with a `$`
  isVariable : (str)=> str.charAt(0) == "$"

  # Recursively look for global vars in an object
  parseObject : (obj)=>
    for key, item of obj
      if typeof item == "string"
        obj[key] = @parseString item
      if typeof item == "object"
        @parseObject item

  getAssetPath : (asset) =>
    #
    if asset == "map.json"                          then contentDir = ""
    else if  /.mp3|.m4a/.test(asset)                then contentDir = "sounds/"
    else if /.json/.test(asset)                     then contentDir = "animations/"
    else if /.svg|.jpg|.jpeg|.png|.mp4/.test(asset) then contentDir = "assets/"

    if asset.charAt(0) == "~"
      pathId = asset.substr(1, 1)
      asset      = asset.substr(3)
    else
      pathId = aristotle.episodeNum

    # global path : ~g/some-asset.mp3
    if pathId == "g"
      return "#{aristotle.episodesDir}/global/#{contentDir}#{asset}"
    # local path : ~l/some-asset.json
    else if pathId == "l"
      return "#{aristotle.localDir}/#{asset}"
    # normal path : some-asset.mp3
    else if Number(pathId) != NaN
      return "#{aristotle.episodesDir}/episode#{pathId}/#{contentDir}#{asset}"
    else
      aristotle.throw "couldn't understand the path: #{asset}", true