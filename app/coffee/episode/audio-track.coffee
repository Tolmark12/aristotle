module.exports = class AudioTrack

  @count = 0


  constructor: (@src) ->
    @id            = AudioTrack.count++
    @eventHandlers = []
    @src           = parse @src
    @sound         = aristotle.soundLibrary[@src]

  play : (config={}, @onComplete) ->
    if !@sound?
      appInsights.trackException "Tried to play the sound `#{@src}` that didn't exist for some reason"
      return

    @config config
    if @onComplete?
      @addOnComplete()
    @sound.play()
    # if @onComplete?
    #   @addOnComplete()
    # @sound.play config

  addOnComplete : () ->
    handle = ()=>
      @onComplete()
    @sound.on "end", handle
    @trackEventHandler 'end', handle

  stop : ()-> @sound.stop()

  destroy : ()->
    @isDead = true
    @sound.stop()
    @destroyEvents()
    # @sound.destroy()
    @sound = null
    log "  +> track#{@id} destroyed"

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
      @sound.off evnt.event, evnt.handler
