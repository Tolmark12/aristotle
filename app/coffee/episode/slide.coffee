AudioTrack   = require "episode/audio-track"
SVGAnimation = require "movie/svg-animation"

module.exports = class Slide

  constructor: (@movie, @slideData, @onSlideComplete) ->

  play : (onComplete) =>
    @movie.populate @slideData.movie
    @setDuration()
    @runCtanlee @slideData.ctanlee


  setDuration : () ->
    if !@slideData.duration? then return
    switch @slideData.duration.kind
      when "time"
        setTimeout @onSlideComplete, @slideData.duration.seconds * 1000
      when "user"
        console.log "waiting on the user"
      when "ctanlee"
        PubSub.subscribe 'ctanlee.complete', ()=> @onSlideComplete()

  runCtanlee : (data) ->
    if data? then aristotle.ctanlee.activate data


  # stop : ()->
  #   @animation.stop()
  #   @audio.stop()
  #
  # destroy : ()->
  #   @animation.destroy()
  #   @audio.destroy()
