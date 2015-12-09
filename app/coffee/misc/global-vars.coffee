module.exports = class GlobalVars

  constructor: () ->
    aristotle.globals = @
    PubSub.subscribe 'setvars', (a, data)=>
      for key, val of data
        @[key] = val

  get : (str) ->
   if aristotle.globals[str]?
     return aristotle.globals[str]

   aristotle.throw "Tried to access global variable `#{str}`, but it doesn't exists", true
   null

