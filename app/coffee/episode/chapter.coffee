Slides    = require 'episode/slides'
Preloader = require 'misc/asset-preloader'

module.exports = class Chapter

  constructor: ( @chapterData, @movie, @ux, @onChapterCompete ) ->

  start : () ->
    aristotle.devTools.go @chapterData.dev, @chapterData.slides
    preloader = new Preloader @chapterData, @startSlides

  startSlides : () =>
    @slides = new Slides @chapterData, @movie, @ux, @onSlidesComplete
    @slides.start()

  onSlidesComplete : () => @onChapterCompete()

