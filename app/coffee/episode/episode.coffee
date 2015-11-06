Slide = require 'episode/slide'

module.exports = class Episode

  constructor: (trainingData, movie) ->
    @temp trainingData, movie

  temp : (trainingData, movie) ->
    @slides   = []

    for key, slide of trainingData.slides
      slide = new Slide movie, slide, @slideComplete
      @slides.push slide

    setTimeout @nextSlide, 1000

  slideComplete : () =>
    console.log "slide complete"
    @nextSlide()


  nextSlide : () =>
    if !@currentSlideIndex? then @currentSlideIndex = -1
    if @currentSlideIndex == @slides.length - 1
      @trainingComplete()
      return
    @currentSlide = @slides[++@currentSlideIndex]
    @currentSlide.play @slideComplete

  trainingComplete : () ->
    console.log "alll slides have been played"

