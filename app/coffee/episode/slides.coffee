Slide    = require 'episode/slide'
Sequence = require 'misc/sequence'

module.exports = class Slides

  constructor: (trainingData, movie, ux, @onShowComplete) ->
    aristotle.slides = @
    @createSlides trainingData, movie, ux
    PubSub.subscribe 'slides.next-slide', ()=> @nextSlide()

  createSlides : (trainingData, movie, ux) ->
    slides = []
    for slideData in trainingData.slides
      slides.push new Slide(movie, ux, slideData, @slideComplete)
    @slides = new Sequence slides

  nextSlide : () =>
    if @slides.isAtLastItem()
      @slideShowComplete()
    else
      @slides.next()
      @playSlide()

  start             : () -> @playSlide()
  slideComplete     : () => @nextSlide()
  playSlide         : () -> @slides.getCurrentItem().play @slideComplete
  slideShowComplete : () -> @onShowComplete()
