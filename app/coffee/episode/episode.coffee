Slide = require 'episode/slide'

module.exports = class Episode

  constructor: (trainingData, movie) ->
    @temp trainingData, movie

  temp : (trainingData, movie) ->
    @slides   = []

    for slide in trainingData.slides
      slide = new Slide movie, slide
      @slides.push slide

    setTimeout @nextSlide, 1000, @slideComplete

  slideComplete : () =>
    @nextSlide()


  nextSlide : () =>
    if !@currentSlideIndex? then @currentSlideIndex = -1
    if @currentSlideIndex == @slides.length - 1
      @trainingComplete()
      return
    @currentSlide?.destroy()
    @currentSlide = @slides[++@currentSlideIndex]
    @currentSlide.play @slideComplete

  trainingComplete : () ->
    @currentSlide.stop()
    console.log "alll slides have been played"

