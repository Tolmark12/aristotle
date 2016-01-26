
module.exports = class LMSProxy

  constructor : (isLocal, @refreshWindowCb) ->
    if isLocal then @initScormStubs()
    @version = { major:0, minor:1, feature:0, storeVersion:1 }
    window.addEventListener 'storage',      (e)=> @onStorageChange e

  begin : (queryStringVars, cb) ->
    # Try to start the course
    if elbScorm.initCourse()
      @user       = elbScorm.GetUserName()    # ex:       Kingsley, James
      @userId     = elbScorm.GetUserID()      # I assume: asf0h30asbu30
      stateData   = elbScorm.GetResumeData()  # ojb

      # If there is data from a previous session..
      if stateData?
        if !stateData.version?
          glob = {}
        # If the module data structure is new and incompatible
        else if stateData.version.storeVersion < @version.storeVersion || !stateData.version.storeVersion?
          glob = {}
        # else, we have compatible data, use it:
        else
          glob            = {}
          glob.globalVars = stateData.globalVars
          glob.location   = stateData.location
      else
        glob = {}

      glob.version    = @version
      glob.user       = @user
      glob.userId     = @userId
      glob.initParams = queryStringVars
      @saveGlobToLocalStorage glob
      cb()
    else
      console.log "couldn't start the course"

  # Save the LMS resume data, user, etc to the local glob
  saveGlobToLocalStorage : (glob) ->
    localStorage.setItem "glob", JSON.stringify(glob)

  # Persist the contents of LMS to
  saveGlobToLMS : () ->
    glob = localStorage.getItem "glob"
    elbScorm.SetResumeData JSON.parse(glob)

  onStorageChange : (e) ->
    # If this is a change to the glob
    if e.key == "glob"
      @saveGlobToLMS()
    # On course complete
    else if e.key == "course.complete"
      elbScorm.SetComplete()
      window.courseComplete = true
    else if e.key == "refresh.window"
      @refreshWindowCb()

  # ----------------- #
  # For Local Testing #

  initScormStubs : () ->
    window.elbScorm = {}
    elbScorm.initCourse    =     ()-> true
    elbScorm.GetUserName   =     ()-> "Ricks, Justin"
    elbScorm.GetUserID     =     ()-> "abcdefg1234567"
    elbScorm.GetCompanName =     ()-> "Arizona Public Works"
    elbScorm.SetResumeData = (data)-> localStorage.setItem( "fakeLmsStore", JSON.stringify(data) )
    elbScorm.GetResumeData =     ()-> JSON.parse( localStorage.getItem("fakeLmsStore") )
    elbScorm.SetComplete   =     ()-> console.log "course is complete"

  # ----------------- #


  # --------------------------------------  ------------------------------------

  # constructor: (isLocal) ->
  #   # for local testing, simulate the lms API
  #   if isLocal then @initScormStubs()
  #   aristotle.localStorageProxy = @
  #   PubSub.subscribe 'state.save',      (m, data)=> @saveState()
  #   PubSub.subscribe 'state.load',      (m, data)=> @loadState()
  #   PubSub.subscribe 'state.rehydrate', (m, data)=> @rehydrate()
  #   PubSub.subscribe 'slide.activated', (m, data)=> @saveState data
  #   PubSub.subscribe 'chapter.started', (m, data)=> @chapterTitle = data
  #

  #
  # rehydrate : () ->
  #   if !@store? then return
  #   aristotle.episode.gotoLocationByTitle @store.location.slide, @store.location.chapter
  #
  # saveState : (currentSlide, chapter) ->
  #   @store = {version: aristotle.version}
  #   # global variabls
  #   @store.globalVars = @glob
  #
  #   # layer state
  #   @store.layerState = aristotle.movie.dehydrateLayerState()
  #
  #   if aristotle.episode?
  #     ch = if chapter? then chapter else @chapterTitle
  #     @store.location = {episodeNum:aristotle.episode.episodeNum, slide:currentSlide, chapter: ch}
  #     elbScorm.SetResumeData @store
  #
  # completeEpisode : (newEpisodeNum) ->
  #   @store = if @store? then @store else {}
  #   @store.location = {episodeNum:newEpisodeNum}
  #   elbScorm.SetResumeData @store
  #
  # createFormattedName : () ->
  #   x = @user.split ','
  #   @name = "#{x[1]} #{x[0]}"
  #


