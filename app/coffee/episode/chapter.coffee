Slides         = require 'episode/slides'
ChapterHeading = require 'episode/chapter-heading'

module.exports = class Chapter

  constructor: ( @chapterData, @movie, @ux, @onChapterCompete ) ->

  start : () ->
    aristotle.devTools.go @chapterData.dev, @chapterData.slides
    chapterHeading = new ChapterHeading @chapterData, @startSlides

  startSlides : () =>
    @slides = new Slides @chapterData, @movie, @ux, @onSlidesComplete
    @slides.start()

  destroy : () ->
    @slides.destroy()
    @slides = null

  onSlidesComplete : () => @onChapterCompete()

