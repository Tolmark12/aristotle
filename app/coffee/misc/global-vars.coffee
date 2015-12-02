module.exports = class GlobalVars

  constructor: () ->
    aristotle.globals = @
    PubSub.subscribe 'setvars', (a, data)=>
      for key, val of data
        @[key] = val
