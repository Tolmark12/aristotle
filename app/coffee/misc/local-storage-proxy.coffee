module.exports = class LocalStorageProxy

  constructor: (@cb) ->
    window.zap = (obj)-> JSON.parse( JSON.stringify(obj) )
    # for local testing, simulate the lms API
    aristotle.localStorageProxy = @
    PubSub.subscribe 'state.save',         (m, data)=> @saveState()
    # PubSub.subscribe 'state.load',         (m, data)=> @loadState()
    PubSub.subscribe 'state.rehydrate',    (m, data)=> @rehydrate()
    PubSub.subscribe 'slide.activated',    (m, data)=> @saveState data
    PubSub.subscribe 'chapter.started',    (m, data)=> @chapterTitle = data
    PubSub.subscribe 'refresh.on.chapter', (m, data)=> @refreshOnChapter data
    @loadState()
    window.addEventListener 'message', (e)=> @receiveMessage(e)
    console.log "listening.."

  receiveMessage : (e) ->
    console.log "receiving.."
    console.log e
    @msgTargWindow = e.source
    @msgDomain     = e.data.domain
    if e.data.message == "init"
      @init(e.data.data)

  sendMessage : (msg, data) ->
    packet =
      message : msg
      data    : data
    @msgTargWindow.postMessage(packet, @msgDomain)

  init : (data) ->
    console.log "initialized.."
    console.log data
    @store = data
    @setAristotleVars()
    @sendMessage "initialized", null
    @begin()

  rehydrate : () ->
    if !@store? then return
    aristotle.episode.gotoLocationByTitle @store.location.slide, @store.location.chapter

  begin : () ->
    @user   = @store.user
    @userId = @store.userId
    @createFormattedName()
    if @store.globalVars?
      aristotle.globals.vars = @store.globalVars
    else
      aristotle.globals.vars = {}

    aristotle.globals.vars.user   = @user
    aristotle.globals.vars.userId = @userId
    @cb()

  saveState : (currentSlide, chapter) ->
    # global variabls
    @store.globalVars = aristotle.globals.vars

    if aristotle.episode?
      ch = if chapter? then chapter else @chapterTitle
      @store.location = {episodeNum:aristotle.episode.episodeNum, slide:currentSlide, chapter: ch}
      @saveToLocalStorage @store

  refreshOnChapter : (chapterTitle) ->
    @saveState chapterTitle, chapterTitle
    @triggerRefresh()

  refreshOnEpisode : (newEpisodeNum) ->
    @store.globalVars  = aristotle.globals.vars
    @store.location    = {episodeNum:newEpisodeNum}
    @saveToLocalStorage @store
    @triggerRefresh()

  completeEpisode : (newEpisodeNum) ->
    @store = if @store? then @store else {}
    @store.location = {episodeNum:newEpisodeNum}

  createFormattedName : () ->
    x = @user.split ','
    @name = "#{x[1]} #{x[0]}"

  setAristotleVars : () ->
    aristotle.configFile    = @store.initParams.configFile
    aristotle.devEpisodeNum = @store.initParams.episode
    aristotle.episodesDir   = @store.initParams.episodeRoot
    aristotle.isDevMode     = @store.initParams.isDevMode
    aristotle.isLocal       = @store.initParams.isLocal
    aristotle.localDir      = @store.initParams.localRoot
    aristotle.sudo          = @store.initParams.sudo

  loadState          : ()     -> @store = JSON.parse localStorage.getItem("glob")
  completeCourse     : ()     -> localStorage.setItem "course.complete", "true"
  saveToLocalStorage : (data) -> localStorage.setItem "glob", JSON.stringify(data)
  triggerRefresh     : ()     -> localStorage.setItem "refresh.window", Date.now()

