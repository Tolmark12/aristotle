AudioTrack   = require "episode/audio-track"
SVGAnimation = require "movie/svg-animation"

module.exports = class Slide

  constructor: (@movie, @slideData, @onSlideComplete) ->

  play : (onComplete) =>
    @movie.populate @slideData.movie
    @setDuration()
    # @animation  = new SVGAnimation @el, "#{Aristotle.episodeRoot}/animations/#{@slideData.svga}"
    # @audio      = new AudioTrack "#{Aristotle.episodeRoot}/sounds/#{@slideData.sound}"
    # @animation.play()
    # setTimeout ()=>
    #   @audio.play onComplete
    # ,
    #   500

  setDuration : () ->
    if !@slideData.duration? then return
    switch @slideData.duration.kind
      when "time"
        setTimeout @onSlideComplete, @slideData.duration.seconds * 1000

  # stop : ()->
  #   @animation.stop()
  #   @audio.stop()
  #
  # destroy : ()->
  #   @animation.destroy()
  #   @audio.destroy()
