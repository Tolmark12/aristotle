Slides         = require 'episode/slides'
ChapterHeading = require 'episode/chapter-heading'

module.exports = class Chapter

  constructor: ( @chapterData, @movie, @ux, @onChapterCompete ) ->
    @title = @chapterData.title

  start : (@firstSlideTitle) ->
    PubSub.publish 'meta.chapter.start', @chapterData
    aristotle.devTools.go @chapterData.dev, @chapterData.slides
    chapterHeading = new ChapterHeading @chapterData, @startSlides

  startSlides : () =>
    @slides = new Slides @chapterData, @movie, @ux, @onSlidesComplete
    if @firstSlideTitle?
      @slides.gotoSlideByTitle @firstSlideTitle
    else
      @slides.start()

  destroy : () ->
    if @slides?
      @slides.destroy()
      @slides = null

  onSlidesComplete : () =>
    PubSub.publish 'meta.chapter.finish', @chapterData
    @onChapterCompete()

