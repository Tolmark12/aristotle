Chapter        = require 'episode/chapter'
Sequence       = require 'misc/Sequence'

module.exports = class Episode

  constructor: (trainingData, @movie, @ux) ->
    aristotle.episode = @
    @episodeNum = trainingData.episode
    aristotle.episodeData = trainingData
    @nextRankId = trainingData.nextRankId
    aristotle.devTools.go trainingData.dev, trainingData.chapters

    PubSub.subscribe 'episode.goto', (m, data)=> @gotoLocationByTitle data
    PubSub.publish "episode.loaded", trainingData

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

    # If there is a previous location...
    if aristotle.lmsProxy.store.location?
      if aristotle.lmsProxy.store.location.episodeNum == @episodeNum
        aristotle.lmsProxy.rehydrate()
        return

    # else, start from the begining
    setTimeout @playChapter, 3000

  showOutro : (data) ->
    @ux.populate( {components:[
      {kind: "episode-outro", config: { rankId:@nextRankId, rank:aristotle.dictionary.get(@nextRankId) } }
    ]})

  # Goto a certain point in the training based on the title of the
  # slide, chapter, quiz or duties element
  gotoLocationByTitle : (title) ->
    PubSub.publish 'movie.layers.clear-all'
    layers = {}
    for chapter in aristotle.episodeData.chapters
      chapterTitle = chapter.title
      if chapter.title == title
        break

      for slide in chapter.slides
        if slide.movie?.layers?
          for layer in slide.movie.layers
            layers[layer.depth] = layer

        if slide.title == title
          slideTitle = slide.title
          breakLoop1 = true; break
      break if breakLoop1

    layersAr = []
    for key, layer of layers
      layersAr.push layer

    @chapters.activateItemByParam 'title', chapterTitle
    @playChapter slide.title
    PubSub.publish 'movie.rehydrate-layers', layersAr

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

  playChapter     : (firstSlide=null) =>
    # PubSub.publish 'state.rehydrate'
    @chapters.getCurrentItem().start firstSlide
    PubSub.publish 'chapter.started', @chapters.getCurrentItem().chapterData.title

  episodeComplete : () ->
    # elbScorm.SetComplete()
    @showOutro()