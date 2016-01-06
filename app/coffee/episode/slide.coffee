AudioTrack   = require "episode/audio-track"
SVGAnimation = require "movie/svg-animation"

module.exports = class Slide

  constructor: (@movie, @slideUX, @slideData, @onSlideComplete) ->
    @title = @slideData.title

  play : (onComplete) =>
    if @slideData.title?
      PubSub.publish 'slide.activated', @slideData.title
    @movie.populate @slideData.movie
    @slideUX.populate @slideData.ux
    @setDuration()
    @runCtanlee @slideData.ctanlee
    @runDialogue @slideData.dialogue
    @runActions @slideData.action

  runActions : (action) ->
    return if !action?
    aristotle.commander.do action

  setDuration : () ->
    if !@slideData.duration? then return
    switch @slideData.duration.kind
      when "time"
        aristotle.timeout @onSlideComplete, @slideData.duration.seconds * 1000
      when "user"
        console.log "waiting on the user"
      when "ux"
        uxSubscription = PubSub.subscribe 'ux.complete', ()=>
          PubSub.unsubscribe uxSubscription
          @onSlideComplete()
      when "dialogue", "ctanlee"
        ctanleeSubscription = PubSub.subscribe 'dialogue.complete', ()=>
          PubSub.unsubscribe ctanleeSubscription
          @onSlideComplete()
      when "listen"
        listenSubscription = PubSub.subscribe @slideData.duration.event, ()=>
          PubSub.unsubscribe listenSubscription
          @onSlideComplete()

  runCtanlee : (data) ->
    if data? then aristotle.ctanlee.activate data

  runDialogue : (data) ->
    if data? then aristotle.dialogue.activate data

