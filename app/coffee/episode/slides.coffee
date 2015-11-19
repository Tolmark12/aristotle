Slide = require 'episode/slide'

module.exports = class Slides

  constructor: (trainingData, movie, ux, @onComplete) ->
    @slides            = []
    @currentSlideIndex = -1
    @createSlides trainingData, movie, ux
    PubSub.subscribe 'slides.next-slide', ()=> @nextSlide()

  start : () ->
    @nextSlide()

  createSlides : (trainingData, movie, ux) ->
    # startIndex = if trainingData.dev.startSlideIndex? then trainingData.dev.startSlideIndex else 0
    for slideData in trainingData.slides
      @slides.push new Slide(movie, ux, slideData, @slideComplete)



  slideComplete : () => @nextSlide()

  nextSlide : () =>
    if @currentSlideIndex == @slides.length - 1
      @trainingComplete()
      return
    @currentSlide = @slides[ ++@currentSlideIndex ]
    @currentSlide.play @slideComplete

  trainingComplete : () ->
    @onComplete()