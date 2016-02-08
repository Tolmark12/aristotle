module.exports = class AudioTrack

  @count = 0


  constructor: (@src) ->
    @id            = AudioTrack.count++
    @eventHandlers = []
    @src           = parse @src

  play : (config={}, @onComplete) ->
    @soundId = aristotle.soundLib.play @src
    if @onComplete?
      @addOnComplete()

    # @config config
    # @sound.play()


  addOnComplete : () ->
    handle = ()=>
      @onComplete()
    aristotle.soundLib.on 'end', handle, @soundId
    # @sound.on "end", handle
    @trackEventHandler 'end', handle

  stop : ()->
    console.log "stop!"
    aristotle.soundLib.stop @soundId

  destroy : (doUnloadFromMemory)->
    @isDead = true
    aristotle.soundLib.stop @soundId
    @destroyEvents()

  config : (config) ->
    if !@sound? then return

    if config.loop?
      # Fix this
      if typeof config.loop == "number"
        x="nothing"
      else
        @sound.loop = true

    if config.volume?
      @sound.volume config.volume

  fade : (fadeDurationMs, direction=1, doDestroy=false) ->
    seconds        = fadeDurationMs/1000
    ticksPerSecond = 20
    ticks          = seconds * ticksPerSecond
    tickDuration   = fadeDurationMs / ticks
    if direction == 1
      incrament    = (1 - @sound.volume) / ticks
    else
      incrament    = @sound.volume / ticks * -1
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
      aristotle.soundLib.off evnt.event, evnt.handler, @soundId
