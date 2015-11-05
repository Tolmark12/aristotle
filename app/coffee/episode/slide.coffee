AudioTrack   = require "episode/audio-track"
SVGAnimation = require "movie/svg-animation"

module.exports = class Slide

  constructor: (@movie, @slideData) ->

  play : (onComplete) =>
    @movie.populate @slideData.movie
    # @animation  = new SVGAnimation @el, "#{Aristotle.episodeRoot}/animations/#{@slideData.svga}"
    # @audio      = new AudioTrack "#{Aristotle.episodeRoot}/sounds/#{@slideData.sound}"
    # @animation.play()
    # setTimeout ()=>
    #   @audio.play onComplete
    # ,
    #   500

  stop : ()->
    @animation.stop()
    @audio.stop()

  destroy : ()->
    @animation.destroy()
    @audio.destroy()
