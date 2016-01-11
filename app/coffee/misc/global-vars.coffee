module.exports = class GlobalVars

  constructor: () ->
    @vars = {}
    aristotle.globals = @
    PubSub.subscribe 'setvars',  (a, data)=> @setMany data
    PubSub.subscribe 'savemeta', (a, data)=> @saveMetaData data

  setMany : (vars) ->
    for key, val of vars
      @vars[key] = val
    PubSub.publish 'state.save'

  saveMetaData : (data) ->
    @vars.meta = data
    PubSub.publish 'state.save'

  getMetaData  : () -> @vars.meta

  # There are times we want to set a var before everything is initialized. Therefore,
  # you can pass `saveState=false` to save a var, but not persist to storage
  set : (key, val, saveState=true) ->
    @vars[key] = val
    if saveState
      PubSub.publish 'state.save'

  get : (str, throwErrors=true) ->
   if @vars[str]?
     return @vars[str]
   if throwErrors
     aristotle.throw "Tried to access global variable `#{str}`, but it doesn't exists", true
   null


