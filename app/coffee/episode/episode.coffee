Chapter        = require 'episode/chapter'
# EpisodeBookend = require 'episode/episode-bookend'
Sequence       = require 'misc/Sequence'


module.exports = class Episode

  constructor: (trainingData, @movie, @ux) ->
    PubSub.publish 'chrome.hide'
    aristotle.devTools.go trainingData.dev, trainingData.chapters
    @createChapters trainingData
    @showIntro trainingData
    @nextRankId = trainingData.nextRankId

  showIntro : (data) ->
    @ux.populate( {components:[
      {kind: "episode-intro", config: {title:data.title, subtitle:data.subtitle, episode:data.episode}}
    ]})
    setTimeout @playChapter, 3000

  showOutro : (data) ->
    @ux.populate( {components:[
      {kind: "episode-outro", config: { rankId:@nextRankId, rank:aristotle.dictionary.get(@nextRankId) } }
    ]})
    # setTimeout @playChapter, 3000

  createAndShowOutro : () ->

  createChapters : (trainingData) ->
    chapters = []
    for chapterData in trainingData.chapters
      chapters.push new Chapter( chapterData, @movie, @ux, @chapterComplete )
    @chapters = new Sequence chapters

  nextChapter : () =>
    if @chapters.isAtLastItem()
      @episodeComplete()
    else
      @chapters.next()
      @playChapter()

  start           : () -> @playChapter()
  chapterComplete : () => @nextChapter()
  playChapter     : () =>
    @movie.reset()
    @chapters.getCurrentItem().start @chapterComplete
  episodeComplete : () ->
    @showOutro()