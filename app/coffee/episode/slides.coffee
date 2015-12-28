Slide    = require 'episode/slide'
Sequence = require 'misc/sequence'

module.exports = class Slides

  constructor: (trainingData, movie, ux, @onShowComplete) ->
    aristotle.slides = @
    @createSlides trainingData, movie, ux
    token1 = PubSub.subscribe 'slides.next',        ()=> @nextSlide()
    token2 = PubSub.subscribe 'slides.next-slide',  ()=> @nextSlide()
    token3 = PubSub.subscribe 'slides.replay',      ()=> @replay()
    token4 = PubSub.subscribe 'slides.prev-slide',  ()=> @prevSlide()
    # token6 = PubSub.subscribe 'slides.goto', (m, data)=> @gotoSlide data
    token7 = PubSub.subscribe 'movie.report',       ()=> console.log @getIndexAndTotal()
    @subscriptionTokens = [token1, token2, token3, token4, token7]


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

  gotoSlide : (data) ->
    if typeof data == Number
      @gotoSlideByIndex data
    else
      @gotoSlideById data

  gotoSlideByIndex : (index) ->
    @slides.changeItemByIndex index
    @playSlide()

  gotoSlideByTitle : (title) ->
    @slides.activateItemByParam "title",  title
    @playSlide()

  destroy : () ->
    @slides = null
    PubSub.unsubscribe token for token in @subscriptionTokens


  start             : () -> @playSlide()
  slideComplete     : () => @nextSlide()
  playSlide         : () -> @slides.getCurrentItem().play @slideComplete
  slideShowComplete : () -> @onShowComplete()
  getCurrentIndex   : () -> @slides.getCurrentItem().slideData.index
  getIndexAndTotal  : () -> "slide #{@slides.getCurrentItem().slideData.index} of #{@slides.totalItems}"
