Slide = require 'slide'

module.exports = class Episode

  constructor: (el, trainingData) ->
    @slides   = []

    for slide in trainingData.slides
      slide = new Slide el, slide
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

