module.exports = class AudioTrack

  @count = 0

  constructor: (@src) ->
    @id            = AudioTrack.count++
    @eventHandlers = []
    @src           = parse @src

  play : (config={}, @onComplete) ->
    @soundId = aristotle.soundLib.play @src
    @config config
    if @onComplete?
      @addOnComplete()

  addOnComplete : () ->
    handle = ()=>
      @onComplete()
    aristotle.soundLib.on 'end', handle, @soundId
    @trackEventHandler 'end', handle

  pausedPlay : ()-> aristotle.soundLib.pausedPlay @soundId
  pause      : ()-> aristotle.soundLib.pause @soundId
  stop       : ()-> aristotle.soundLib.stop @soundId
  loop       : ()-> aristotle.soundLib.loop @soundId

  destroy : (doUnloadFromMemory)->
    @isDead = true
    aristotle.soundLib.stop @soundId
    @destroyEvents()


  config : (config) ->
    if config.loop
      @loop()

    if config.volume?
      aristotle.soundLib.volume config.volume, @soundId

  fadeOut : (fadeDurationMs, doDestroy=false)->
    aristotle.soundLib.volume 0, @soundId

  fadeIn  : (fadeDurationMs, doDestroy=false)->
    aristotle.soundLib.volume 1, @soundId

  trackEventHandler : (event, handler) ->
    @eventHandlers.push {event:event, handler:handler}

  destroyEvents : () ->
    for evnt in @eventHandlers
      aristotle.soundLib.off evnt.event, evnt.handler, @soundId
