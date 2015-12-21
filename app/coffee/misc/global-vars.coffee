module.exports = class GlobalVars

  constructor: () ->
    @vars = {}
    aristotle.globals = @
    PubSub.subscribe 'setvars', (a, data)=>
      for key, val of data
        @vars[key] = val

  set : (key, val) -> @vars[key] = val

  get : (str) ->
   if @vars[str]?
     return @vars[str]
   aristotle.throw "Tried to access global variable `#{str}`, but it doesn't exists", true
   null


