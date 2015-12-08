module.exports = class AudioTrack

  constructor: (@src) ->
    AudioTrack.initSoundSettings()

  play : (onComplete) ->
    @sound = createjs.Sound.play @src, AudioTrack.ppc
    @addOnComplete onComplete

  addOnComplete : (onComplete) ->
    if onComplete? then @sound.addEventListener "complete", ()-> onComplete()

  stop : ()-> @sound.stop()

  destroy : ()->
    @sound.removeEventListener "complete"
    @sound.destroy()

  @initSoundSettings : (volume=1) ->
    return if AudioTrack.ppc?
    AudioTrack.ppc = new createjs.PlayPropsConfig().set
      interrupt: createjs.Sound.INTERRUPT_ANY
      volume: volume
      pan:1
      # loop: -1,