module.exports = class AudioTrack

  constructor: (@src) ->
    @eventHandlers = []
    @src = parse @src
    AudioTrack.initSoundSettings()
    @sound = createjs.Sound.createInstance @src
    @sound.addEventListener "failed", (e)=>
      @tr "SOUND FAILED"


  # TEMP
  tr : (str)->
    PubSub.publish 'logger.print', {str: "str"}
  # TEMP


  play : (config={}, @onComplete) ->
    @parseConfig config
    if @onComplete?
      @addOnComplete()
    @sound.play config

  addOnComplete : () ->
    handle = @sound.addEventListener "complete", ()=>
      @tr "> Sound Complete"
      @onComplete()
    @trackEventHandler 'complete', handle

  stop : ()-> @sound.stop()

  destroy : ()->
    @destroyEvents()
    @isDead = true
    @sound.removeAllEventListeners()
    @sound.stop()
    @sound.destroy()

  @initSoundSettings : (volume=1) ->
    return if AudioTrack.ppc?
    AudioTrack.ppc = new createjs.PlayPropsConfig().set
      interrupt: createjs.Sound.INTERRUPT_ANY
      volume: volume
      pan:1
      # loop: -1,

  parseConfig : (config) ->
    if config.loop?
      # If loop is true, set it to -1 so sound will loop infinitely
      if config.loop == true && typeof config.loop != "number"
        config.loop = -1
    config.pan = 1

  fade : (fadeDurationMs, direction=1, doDestroy=false) ->
    seconds        = fadeDurationMs/1000
    ticksPerSecond = 20
    ticks          = seconds * ticksPerSecond
    tickDuration   = fadeDurationMs / ticks
    if direction == 1
      incrament      = (1 - @sound.volume) / ticks
    else
      incrament      = @sound.volume / ticks * -1
    sound          = @sound
    tickCounter    = 0
    fadeInterval   = setInterval ()=>
      sound.volume += incrament
      if ++tickCounter == ticks
        clearInterval(fadeInterval)
        if doDestroy
          @destroy()
    ,
      tickDuration

  fadeOut : (fadeDurationMs, doDestroy=false)->
    return if @isDead
    @fade fadeDurationMs, -1, doDestroy

  fadeIn  : (fadeDurationMs, doDestroy=false)->
    return if @isDead
    @fade fadeDurationMs, 1, doDestroy


  trackEventHandler : (event, handler) ->
    @eventHandlers.push {event:event, handler:handler}

  destroyEvents : () ->
    for evnt in @eventHandlers
      @sound.removeEventListener evnt.event, evnt.handler
