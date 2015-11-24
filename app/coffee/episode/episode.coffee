Chapter   = require 'episode/chapter'
Sequence  = require 'misc/Sequence'
module.exports = class Episode

  constructor: (trainingData, @movie, ux) ->
    aristotle.devTools.go trainingData.dev, trainingData.chapters
    @createChapters trainingData, ux

  createChapters : (trainingData, ux) ->
    chapters = []
    for chapterData in trainingData.chapters
      chapters.push new Chapter( chapterData, @movie, ux, @chapterComplete )
    @chapters = new Sequence chapters
    @playChapter()

  nextChapter : () =>
    if @chapters.isAtLastItem()
      @episodeComplete()
    else
      @chapters.next()
      @playChapter()

  start           : () -> @playChapter()
  chapterComplete : () => @nextChapter()
  playChapter     : () ->
    @movie.reset()
    @chapters.getCurrentItem().start @chapterComplete
  episodeComplete : () -> console.log "episode complete"