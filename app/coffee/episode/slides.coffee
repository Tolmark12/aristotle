Slide = require 'episode/slide'

module.exports = class Slides

  constructor: (trainingData, movie, @onComplete) ->
    @slides            = []
    @currentSlideIndex = -1
    @createSlides trainingData, movie

  start : () -> @nextSlide()

  createSlides : (trainingData, movie) ->
    for key, slide of trainingData.slides
      slide = new Slide movie, slide, @slideComplete
      @slides.push slide

  slideComplete : () => @nextSlide()

  nextSlide : () =>
    if @currentSlideIndex == @slides.length - 1
      @trainingComplete()
      return
    @currentSlide = @slides[ ++@currentSlideIndex ]
    @currentSlide.play @slideComplete

  trainingComplete : () ->
    @onComplete()