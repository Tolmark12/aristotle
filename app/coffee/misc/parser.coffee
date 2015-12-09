module.exports = class Parser

  constructor : () ->
    window.parse = @parseAny
    window.pObj  = @parseObject

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

