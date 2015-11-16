Slide = require 'episode/slide'

module.exports = class Slides

  constructor: (trainingData, movie, ux, @onComplete) ->
    @slides            = []
    @currentSlideIndex = -1
    @createSlides trainingData, movie, ux
    PubSub.subscribe 'slides.next-slide', ()=> @nextSlide() 

  start : () -> @nextSlide()

  createSlides : (trainingData, movie, ux) ->
    for key, slide of trainingData.slides
      slide = new Slide movie, ux, slide, @slideComplete
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