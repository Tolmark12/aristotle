module.exports = class AudioTrack

  constructor: (@src) ->
    @initSoundSettings()

  play : (onComplete) ->
    # createjs.Sound.play("mySound");
    @sound = createjs.Sound.play @src, AudioTrack.ppc
    @sound.addEventListener "complete", ()-> onComplete()

  stop : ()-> @sound.stop()

  destroy : ()->
    @sound.removeEventListener "complete"
    @sound.destroy()

  initSoundSettings : () ->
    return if AudioTrack.ppc?
    AudioTrack.ppc = new createjs.PlayPropsConfig().set
      interrupt: createjs.Sound.INTERRUPT_ANY
      volume: 1
      pan:1
      # loop: -1,