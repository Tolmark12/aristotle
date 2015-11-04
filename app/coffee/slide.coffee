AudioTrack   = require "audio-track"
SVGAnimation = require "svg-animation"

module.exports = class Slide

  constructor: (@el, @slideData) ->

  play : (onComplete) =>
    @animation  = new SVGAnimation @el, "#{Aristotle.episodeRoot}/animations/#{@slideData.svga}"
    @audio      = new AudioTrack "#{Aristotle.episodeRoot}/sounds/#{@slideData.sound}"
    @animation.play()
    setTimeout ()=>
      @audio.play onComplete
    ,
      500



  stop : ()->
    @animation.stop()
    @audio.stop()

  destroy : ()->
    @animation.destroy()
    @audio.destroy()
