AudioTrack = require 'episode/audio-track'

module.exports = class DevTools

  constructor: ( @isDevMode ) ->
    if !@isDevMode then return
    @initPerformanceStats()

  go : (devConfig, items) ->
    if !@isDevMode or !devConfig? then return
    if devConfig.skipSlate? then @skipSlate = devConfig.skipSlate
    @removeSkippedSlides devConfig, items
    @preventAnimationAsNeeded devConfig, items
    @addIndexesToItems devConfig, items
    if devConfig.volume?
      AudioTrack.initSoundSettings devConfig.volume

   ######  ##       #### ########  ########  ######
  ##    ## ##        ##  ##     ## ##       ##    ##
  ##       ##        ##  ##     ## ##       ##
   ######  ##        ##  ##     ## ######    ######
        ## ##        ##  ##     ## ##             ##
  ##    ## ##        ##  ##     ## ##       ##    ##
   ######  ######## #### ########  ########  ######

  # This one can be a bit confusing, but it's used for skipping slides by removing
  # them from the slides array.
  removeSkippedSlides : (devConfig, items) ->
    if !@isDevMode then return
    # Remove all slides before the start slide index
    if devConfig.startIndex?
      # if start index is a negative number, set index to `n` from end of items
      if devConfig.startIndex < 0
        devConfig.startIndex = items.length + devConfig.startIndex

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

  preventAnimationAsNeeded : (devConfig, items) ->
    return if !devConfig.dontAnimate?
    for slide, i in devConfig.dontAnimate
      @addSkipToEnds items[i]

  # If we don't want an animation to play, add `jumpToEnd = true` to its data object
  addSkipToEnds : (obj) ->
    for key, item of obj
      if typeof item == "object"
        @addSkipToEnds(item, obj)
      if typeof item == "string"
        if item.match /.json/g
          obj.jumpToEnd = true


  addIndexesToItems : (devConfig, items) ->
    numSlidesRemoved = if devConfig.startIndex? then devConfig.startIndex else 0
    count = 0
    for item in items
      item.index = numSlidesRemoved + count++


   ######  ########    ###    ########  ######
  ##    ##    ##      ## ##      ##    ##    ##
  ##          ##     ##   ##     ##    ##
   ######     ##    ##     ##    ##     ######
        ##    ##    #########    ##          ##
  ##    ##    ##    ##     ##    ##    ##    ##
   ######     ##    ##     ##    ##     ######

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
