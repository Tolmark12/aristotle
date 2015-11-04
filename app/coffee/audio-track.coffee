module.exports = class AudioTrack

  constructor: (src) ->
    # TODO - I probably need to preload the sounds, or wait until they are done..

    @ppc = new createjs.PlayPropsConfig().set
      interrupt: createjs.Sound.INTERRUPT_ANY,
      # volume: 0.005
      volume: 1
      pan:1
      # loop: -1,

    createjs.Sound.registerSound src, "sound"

  play : (onComplete) ->
    @sound = createjs.Sound.play "sound", @ppc
    @sound.addEventListener "complete", ()-> onComplete()

  stop : ()-> @sound.stop()

  destroy : ()->
    @sound.removeEventListener "complete"
    @sound.destroy()
