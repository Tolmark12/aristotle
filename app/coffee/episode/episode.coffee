Chapter        = require 'episode/chapter'
Sequence       = require 'misc/Sequence'
AssetPreloader = require 'misc/asset-preloader'

module.exports = class Episode

  constructor: (@trainingData, @movie, @ux, @chrome) ->
    if !aristotle.globals.get("episode#{aristotle.episodeNum}_choices", false)?
      aristotle.globals.set "episode#{aristotle.episodeNum}_choices", []

    aristotle.episode     = @
    @episodeNum           = @trainingData.episode
    @isLastEpisode        = @trainingData.isLastEpisode
    aristotle.episodeData = @trainingData
    aristotle.labels      = @trainingData.labels
    @nextRankId           = @trainingData.nextRankId
    @chrome.build()

    # new AssetPreloader @trainingData.action, @begin
    @begin()

  begin : () =>
    aristotle.devTools.go @trainingData.dev, @trainingData.chapters
    PubSub.publish("episode.loaded", @trainingData);

    @createChapters @trainingData
    if @trainingData.skipSlate
      @playChapter()
    else
      @showIntro @trainingData

    if @trainingData.action?
      aristotle.commander.do @trainingData.action

  showIntro : (data) ->
    me = @
    if aristotle.devTools.skipSlate then @checkPrevLocationAndBegin(data); return
    @ux.populate( {components:[
      {kind: "episode-intro", config: {title:data.title, subtitle:data.subtitle, episode:data.episode}}
    ]})
    setTimeout ()->
      me.ux.removeCurrentComponents()
      me.checkPrevLocationAndBegin data
    ,
      2000


  checkPrevLocationAndBegin : (data) ->
    # If there is a previous location...
    if aristotle.localStorageProxy.store?
      if aristotle.localStorageProxy.store.location?
        if aristotle.localStorageProxy.store.location.episodeNum == @episodeNum
          if aristotle.localStorageProxy.store.location.slide?
            aristotle.localStorageProxy.rehydrate()
            return

    # else, start from the begining
    @playChapter()

  # Goto a certain point in the training based on the title of the
  # slide, chapter, quiz or duties element
  gotoLocationByTitle : (title, chapTitle) ->
    PubSub.publish 'movie.layers.clear-all'
    layers = {}

    # Loop throught the chapters
    for chapter in aristotle.episodeData.chapters
      chapterTitle = chapter.title

      if chapter.title == title # If this is a chapter..
        break

      # Loop throught slides building the layer views, and looking for the matching title
      for slide in chapter.slides
        if slide.title == title && chapterTitle == chapTitle
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

    # If there is a specific slide to play..
    if slideTitle?
      @playChapter slide.title
    else
      @playChapter()

    # Only rehydrate layers if there are layers to rehydrate !-{
    # Almost lost sanity - 9am Jan 27, 2015
    if layersAr.length > 0
      PubSub.publish 'movie.set-dried-layers', layersAr

  createChapters : (trainingData) ->
    chapters = []
    for chapterData, i in trainingData.chapters
      chapters.push new Chapter( chapterData, @movie, @ux, @chapterComplete, i )
    @chapters = new Sequence chapters

  start           : () ->
    @playChapter()
  chapterComplete : () =>
    # PubSub.publish 'state.save'
    # @chapters.getCurrentItem().destroy()
    # @nextChapter()
    @refreshChapter()

  refreshChapter : () ->
    if @chapters.isAtLastItem()
      @episodeComplete()
    else
      @chapters.next()
      PubSub.publish "refresh.on.chapter", @chapters.getCurrentItem().title

  nextChapter : () =>
    if @chapters.isAtLastItem()
      @episodeComplete()
    else
      @chapters.next()
      @playChapter()

  playChapter     : (@firstSlide=null) =>
    @chapters.getCurrentItem().preload @chapterGo

  chapterGo : ()=>
    PubSub.publishSync 'movie.rehydrate-layers'
    PubSub.publish 'chapter.started', @chapters.getCurrentItem().chapterData.title
    @chapters.getCurrentItem().start @firstSlide

  episodeComplete : () ->
    if @isLastEpisode
      aristotle.localStorageProxy.completeCourse()
    else
      newEpisodeNum = String(Number(aristotle.episodeNum) + 1)
      # aristotle.localStorageProxy.completeEpisode newEpisodeNum
      aristotle.localStorageProxy.refreshOnEpisode newEpisodeNum
      # PubSub.publish 'episode.load', newEpisodeNum

  destroy : () ->
    # PubSub.unsubscribe @token1
    for chapter in @chapters.items
      chapter?.destroy()
