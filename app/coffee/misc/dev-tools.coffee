AudioTrack = require 'episode/audio-track'

module.exports = class DevTools

  constructor: ( @isDevMode ) ->
    if !@isDevMode then return
    @initPerformanceStats()

  go : (devConfig, items) ->
    if !@isDevMode or !devConfig? then return
    @skip devConfig, items
    if devConfig.volume?
      AudioTrack.initSoundSettings devConfig.volume

  # This one can be a bit confusing, but it's used for skipping slides by removing
  # them from the slides array.
  skip : (devConfig, items) ->
    if !@isDevMode then return
    # Remove all slides before the start slide index
    if devConfig.startIndex?
      startIndex = devConfig.startIndex
      items.splice 0, devConfig.startIndex
    else
      startIndex = 0

    # Remove any specific slides that the dev wants to remove
    if devConfig.skip?
      for slideIndex in devConfig.skip.sort().reverse()
        # We've already removed all the slides before the start slide,
        # so we don't need to remove them again
        if slideIndex > startIndex
          # if they are greater than the start slide index, adjust the index to
          # account for the slides that have already been removed
          items.splice slideIndex - startIndex, 1

  initPerformanceStats : ()->
    @stats = new Stats()
    @stats.setMode( 0 ) # 0: fps, 1: ms, 2: mb

    # align top-left
    @stats.domElement.style.position = 'absolute'
    @stats.domElement.style.left = '0px'
    @stats.domElement.style.top = '0px'

    document.body.appendChild( @stats.domElement )
    requestAnimationFrame( @update )

  update :()=>
    @stats.end()
    @stats.begin()
    #  monitored code goes here
    requestAnimationFrame( @update );

