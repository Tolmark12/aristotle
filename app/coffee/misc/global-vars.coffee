module.exports = class GlobalVars

  constructor: () ->
    aristotle.globals = @
    console.log "listening for some globals.."
    PubSub.subscribe 'setvars', (a, data)=>
      for key, val of data
        @[key] = val
