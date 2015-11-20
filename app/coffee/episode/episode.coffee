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
    @sequence = new Sequence chapters
    @playChapter()

  nextChapter : () =>
    if @sequence.isAtLastItem()
      @episodeComplete()
    else
      @sequence.next()
      @playChapter()

  start           : () -> @playChapter()
  chapterComplete : () => @nextChapter()
  playChapter     : () ->
    @movie.reset()
    console.log "movieReset"
    @sequence.getCurrentItem().start @chapterComplete
  episodeComplete : () -> console.log "episode complete"