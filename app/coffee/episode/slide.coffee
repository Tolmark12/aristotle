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
    aristotle.commander.do action

  setDuration : () ->
    if !@slideData.duration? then return
    switch @slideData.duration.kind
      when "time"
        setTimeout @onSlideComplete, @slideData.duration.seconds * 1000
      when "user"
        console.log "waiting on the user"
      when "ux"
        uxSubscription = PubSub.subscribe 'ux.complete', ()=>
          PubSub.unsubscribe uxSubscription
          @onSlideComplete()
      when "ctanlee"
        ctanleeSubscription = PubSub.subscribe 'ctanlee.complete', ()=>
          PubSub.unsubscribe ctanleeSubscription
          @onSlideComplete()
      when "listen"
        listenSubscription = PubSub.subscribe @slideData.duration.event, ()=>
          PubSub.unsubscribe listenSubscription
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
