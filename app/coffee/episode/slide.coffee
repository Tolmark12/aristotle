AudioTrack   = require "episode/audio-track"
SVGAnimation = require "movie/svg-animation"

module.exports = class Slide

  constructor: (@movie, @slideUX, @slideData, @onSlideComplete) ->

  play : (onComplete) =>
    @movie.populate @slideData.movie
    @slideUX.populate @slideData.ux
    @setDuration()
    @runCtanlee @slideData.ctanlee
    @runActions @slideData.action

  runActions : (action) ->
    return if !action?
    PubSub.publish action.cmd, action.data

  setDuration : () ->
    if !@slideData.duration? then return
    switch @slideData.duration.kind
      when "time"
        setTimeout @onSlideComplete, @slideData.duration.seconds * 1000
      when "user"
        console.log "waiting on the user"
      when "ux"
        PubSub.subscribe 'ux.complete', ()=> @onSlideComplete()
      when "ctanlee"
        PubSub.subscribe 'ctanlee.complete', ()=> @onSlideComplete()
      when "pubsub"
        PubSub.subscribe @slideData.duration.event, ()=>
          PubSub.unsubscribe @slideData.duration.event
          @onSlideComplete()

  runCtanlee : (data) ->
    if data? then aristotle.ctanlee.activate data


  # stop : ()->
  #   @animation.stop()
  #   @audio.stop()
  #
  # destroy : ()->
  #   @animation.destroy()
  #   @audio.destroy()
