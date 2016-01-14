Chapter        = require 'episode/chapter'
Sequence       = require 'misc/Sequence'
AssetPreloader = require 'misc/asset-preloader'

module.exports = class Episode

  constructor: (@trainingData, @movie, @ux, @chrome) ->
    @userChoices          = []
    aristotle.episode     = @
    @episodeNum           = @trainingData.episode
    @isLastEpisode        = @trainingData.isLastEpisode
    aristotle.episodeData = @trainingData
    aristotle.labels      = @trainingData.labels
    @nextRankId           = @trainingData.nextRankId
    @chrome.build()
    new AssetPreloader @trainingData.action, @begin

  begin : () =>
    aristotle.devTools.go @trainingData.dev, @trainingData.chapters

    @token1 = PubSub.subscribe 'episode.goto', (m, data)=> @gotoLocationByTitle data
    PubSub.publish("episode.loaded", @trainingData);

    @createChapters @trainingData
    if @trainingData.skipSlate
      @playChapter()
    else
      @showIntro @trainingData

    if @trainingData.action?
      aristotle.commander.do @trainingData.action

  showIntro : (data) ->
    if aristotle.devTools.skipSlate then @playChapter(); return

    @ux.populate( {components:[
      {kind: "episode-intro", config: {title:data.title, subtitle:data.subtitle, episode:data.episode}}
    ]})

    # If there is a previous location...
    if aristotle.lmsProxy.store?
      if aristotle.lmsProxy.store.location?
        if aristotle.lmsProxy.store.location.episodeNum == @episodeNum
          if aristotle.lmsProxy.store.location.slide?
            aristotle.lmsProxy.rehydrate()
            return

    # else, start from the begining
    setTimeout @playChapter, 3000

  # Goto a certain point in the training based on the title of the
  # slide, chapter, quiz or duties element
  gotoLocationByTitle : (title) ->
    PubSub.publish 'movie.layers.clear-all'
    layers = {}

    # Loop throught the chapters
    for chapter in aristotle.episodeData.chapters
      chapterTitle = chapter.title
      if chapter.title == title # If this is a chapter..
        break

      # Loop throught slides building the layer views, and looking for the matching title
      for slide in chapter.slides
        if slide.title == title
          slideTitle = slide.title
          breakLoop1 = true; break

        if slide.movie?.layers?
          for layer in slide.movie.layers
            layers[layer.depth] = layer

      break if breakLoop1

    # Configure layers into an array for rehydration
    layersAr = []
    for key, layer of layers
      layersAr.push layer

    @chapters.activateItemByParam 'title', chapterTitle
    @playChapter slide.title
    PubSub.publish 'movie.rehydrate-layers', layersAr

  gotoLocationByChapter : () ->


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
    if @isLastEpisode
      aristotle.lmsProxy.completeCourse()
    else
      newEpisodeNum = String(Number(aristotle.episodeNum) + 1)
      aristotle.lmsProxy.completeEpisode newEpisodeNum
      PubSub.publish 'episode.load', newEpisodeNum

  destroy : () ->
    PubSub.unsubscribe @token1
    for chapter in @chapters.items
      chapter.destroy()
