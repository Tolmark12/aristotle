Slide    = require 'episode/slide'
Sequence = require 'misc/sequence'

module.exports = class Slides

  constructor: (trainingData, movie, ux, @onShowComplete) ->
    @slides            = []
    @currentSlideIndex = -1
    @createSlides trainingData, movie, ux
    PubSub.subscribe 'slides.next-slide', ()=> @nextSlide()

  createSlides : (trainingData, movie, ux) ->
    for slideData in trainingData.slides
      @slides.push new Slide(movie, ux, slideData, @slideComplete)
    @sequence = new Sequence @slides

  nextSlide : () =>
    if @sequence.isAtLastItem()
      @slideShowComplete()
    else
      @sequence.next()
      @playSlide()

  start             : () -> @playSlide()
  slideComplete     : () => @nextSlide()
  playSlide         : () -> @sequence.getCurrentItem().play @slideComplete
  slideShowComplete : () -> @onShowComplete()