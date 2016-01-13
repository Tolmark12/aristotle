module.exports = class GlobalVars

  constructor: () ->
    @vars = {}
    aristotle.globals = @
    PubSub.subscribe 'setvars',        (a, data)=> @setMany data
    PubSub.subscribe 'sessionkey.add', (a, data)=> @generateSessionKey()

  setMany : (vars) ->
    for key, val of vars
      @vars[key] = val
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

  generateSessionKey : () ->
    if !@get( 'sessionKey', false )?
      @set "sessionKey", @randomLetter() + @randomLetter() + @randomLetter() + @randomLetter() + (new Date().getTime() + Math.round( Math.random() * 23455432 ))

  randomLetter : () ->
    letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    return letters[ Math.floor(letters.length*Math.random()) ]
