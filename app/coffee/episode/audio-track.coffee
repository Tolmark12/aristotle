module.exports = class AudioTrack

  constructor: (@src) ->
    @src = parse @src
    AudioTrack.initSoundSettings()
    @sound = createjs.Sound.createInstance @src

  play : (config={}, onComplete) ->
    @parseConfig config
    @sound.play config
    @addOnComplete onComplete

  addOnComplete : (onComplete) ->
    if onComplete? then @sound.addEventListener "complete", ()-> onComplete()

  stop : ()-> @sound.stop()

  destroy : ()->
    @isDead = true
    @sound.removeEventListener "complete"
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
