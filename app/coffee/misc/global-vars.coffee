module.exports = class GlobalVars

  constructor: () ->
    @vars = {}
    aristotle.globals = @
    PubSub.subscribe 'setvars', (a, data)=> @setMany data


  setMany : (vars) ->
    for key, val of vars
      @vars[key] = val
    PubSub.publish 'state.save'

  set : (key, val) ->
    @vars[key] = val
    PubSub.publish 'state.save'

  get : (str) ->
   if @vars[str]?
     return @vars[str]
   aristotle.throw "Tried to access global variable `#{str}`, but it doesn't exists", true
   null


