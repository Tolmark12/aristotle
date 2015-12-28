Slides         = require 'episode/slides'
ChapterHeading = require 'episode/chapter-heading'

module.exports = class Chapter

  constructor: ( @chapterData, @movie, @ux, @onChapterCompete ) ->
    @title = @chapterData.title

  start : (@firstSlideTitle) ->
    aristotle.devTools.go @chapterData.dev, @chapterData.slides
    chapterHeading = new ChapterHeading @chapterData, @startSlides

  startSlides : () =>
    @slides = new Slides @chapterData, @movie, @ux, @onSlidesComplete
    if @firstSlideTitle?
      @slides.gotoSlideByTitle @firstSlideTitle
    else
      @slides.start()

  destroy : () ->
    @slides.destroy()
    @slides = null

  onSlidesComplete : () => @onChapterCompete()

