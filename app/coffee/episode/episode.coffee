Chapter        = require 'episode/chapter'
# EpisodeBookend = require 'episode/episode-bookend'
Sequence       = require 'misc/Sequence'


module.exports = class Episode

  constructor: (trainingData, @movie, @ux) ->
    @nextRankId = trainingData.nextRankId
    aristotle.devTools.go trainingData.dev, trainingData.chapters
    @createChapters trainingData
    if trainingData.skipSlate
      @playChapter()
    else
      @showIntro trainingData

  showIntro : (data) ->
    if aristotle.devTools.skipSlate then @playChapter(); return

    @ux.populate( {components:[
      {kind: "episode-intro", config: {title:data.title, subtitle:data.subtitle, episode:data.episode}}
    ]})
    setTimeout @playChapter, 3000

  showOutro : (data) ->
    @ux.populate( {components:[
      {kind: "episode-outro", config: { rankId:@nextRankId, rank:aristotle.dictionary.get(@nextRankId) } }
    ]})

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
  chapterComplete : () =>
    PubSub.publish 'state.save'
    @chapters.getCurrentItem().destroy()
    @nextChapter()

  playChapter     : () =>
    PubSub.publish 'state.rehydrate'
    @chapters.getCurrentItem().start @chapterComplete

  episodeComplete : () ->
    console.log "episode complete"
    @showOutro()