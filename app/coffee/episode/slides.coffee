Slide    = require 'episode/slide'
Sequence = require 'misc/sequence'

module.exports = class Slides

  constructor: (trainingData, movie, ux, @onShowComplete) ->
    aristotle.slides = @
    @createSlides trainingData, movie, ux
    @nextToken  = PubSub.subscribe 'slides.next',       ()=>@nextSlide()
    @nextToken2 = PubSub.subscribe 'slides.next-slide', ()=>@nextSlide()

  createSlides : (trainingData, movie, ux) ->
    slides = []
    count  = 0
    for slideData in trainingData.slides
      slideData.index = count++
      slides.push new Slide(movie, ux, slideData, @slideComplete)
    @slides = new Sequence slides

  nextSlide : () =>
    if @slides.isAtLastItem()
      @slideShowComplete()
    else
      @slides.next()
      @playSlide()

  destroy : () ->
    @slides = null
    PubSub.unsubscribe @nextToken
    PubSub.unsubscribe @nextToken2

  start             : () -> @playSlide()
  slideComplete     : () => @nextSlide()
  playSlide         : () -> @slides.getCurrentItem().play @slideComplete
  slideShowComplete : () -> @onShowComplete()
  getCurrentIndex   : () -> @slides.getCurrentItem().slideData.index
  getIndexAndTotal  : () -> "#{@slides.getCurrentItem().slideData.index}/#{@slides.totalItems}"
