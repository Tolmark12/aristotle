Slide    = require 'episode/slide'
Sequence = require 'misc/sequence'

module.exports = class Slides

  constructor: (trainingData, movie, ux, @onShowComplete) ->
    aristotle.slides = @
    @createSlides trainingData, movie, ux
    @token1 = PubSub.subscribe 'slides.next',       ()=> @nextSlide()
    @token2 = PubSub.subscribe 'slides.next-slide', ()=> @nextSlide()
    @token3 = PubSub.subscribe 'slides.replay',     ()=> @replay()
    @token4 = PubSub.subscribe 'slides.prev-slide', ()=> @prevSlide()
    @token5 = PubSub.subscribe 'slides.goto', (m, data)=> @playSlideByIndex data
    @token5 = PubSub.subscribe 'movie.report',      ()=> console.log @getIndexAndTotal()


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

  replay : ()->
    @playSlide()

  prevSlide : () ->
    @slides.prev()
    @playSlide()

  playSlideByIndex : (index) ->
    @slides.changeItemByIndex index
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
  getIndexAndTotal  : () -> "slide #{@slides.getCurrentItem().slideData.index} of #{@slides.totalItems}"
