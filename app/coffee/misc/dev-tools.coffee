AudioTrack = require 'episode/audio-track'

module.exports = class DevTools

  constructor: () ->
    @initPerformanceStats()

  setDefaults : (episodeData) ->
    @skipSlides episodeData
    if episodeData.dev.volume?
      AudioTrack.initSoundSettings episodeData.dev.volume

  # This one can be a bit confusing, but it's used for skipping slides by removing
  # them from the slides array.
  skipSlides : (episodeData) ->
    # Remove all slides before the start slide index
    if episodeData.dev.startSlideIndex?
      startIndex = episodeData.dev.startSlideIndex
      episodeData.slides.splice 0, episodeData.dev.startSlideIndex
    else
      startIndex = 0

    # Remove any specific slides that the dev wants to remove
    if episodeData.dev.skipSlides?
      for slideIndex in episodeData.dev.skipSlides.sort().reverse()
        # We've already removed all the slides before the start slide,
        # so we don't need to remove them again
        if slideIndex > startIndex
          # if they are greater than the start slide index, adjust the index to
          # account for the slides that have already been removed
          episodeData.slides.splice slideIndex - startIndex, 1

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

