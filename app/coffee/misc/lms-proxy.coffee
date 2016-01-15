module.exports = class LMSProxy

  constructor: (isLocal) ->
    # for local testing, simulate the lms API
    if isLocal then @initScormStubs()
    aristotle.lmsProxy = @
    PubSub.subscribe 'state.save',      (m, data)=> @saveState()
    PubSub.subscribe 'state.load',      (m, data)=> @loadState()
    PubSub.subscribe 'state.rehydrate', (m, data)=> @rehydrate()
    PubSub.subscribe 'slide.activated', (m, data)=> @saveState data

  begin : (cb) ->
    if elbScorm.initCourse()
      @loadState()
      @user       = elbScorm.GetUserName()    # ex:       Kingsley, James
      @userId     = elbScorm.GetUserID()      # I assume: asf0h30asbu30
      stateData   = elbScorm.GetResumeData()  # ojb

      @createFormattedName()

      # If the module has changed, and we want to clear out all the
      if stateData?
        if !stateData.version?
          aristotle.globals.vars = {}
        else if stateData.version.storeVersion < aristotle.version.storeVersion || !stateData.version.storeVersion?
          aristotle.globals.vars = {}
        else
          aristotle.globals.vars = stateData.globalVars
      aristotle.globals.vars.user   = @user
      aristotle.globals.vars.userId = @userId
      cb()
    else
      console.log "couldn't start the course"

  loadState : () ->
    @store = elbScorm.GetResumeData()

  rehydrate : () ->
    if !@store? then return
    aristotle.episode.gotoLocationByTitle @store.location.slide

  saveState : (currentSlide) ->
    @store = {version: aristotle.version}
    # global variabls
    @store.globalVars = aristotle.globals.vars

    # layer state
    @store.layerState = aristotle.movie.dehydrateLayerState()

    if aristotle.episode?
      @store.location = {episodeNum:aristotle.episode.episodeNum, slide:currentSlide}
      elbScorm.SetResumeData @store

  completeEpisode : (newEpisodeNum) ->
    @store = if @store? then @store else {}
    @store.location = {episodeNum:newEpisodeNum}
    elbScorm.SetResumeData @store

  createFormattedName : () ->
    x = @user.split ','
    @name = "#{x[1]} #{x[0]}"

  completeCourse : () ->
    elbScorm.SetComplete()

  # ------------------------------------ For Local Testing

  initScormStubs : () ->
    window.elbScorm = {}
    elbScorm.initCourse    =     ()-> true
    elbScorm.GetUserName   =     ()-> "Ricks, Justin"
    elbScorm.GetUserID     =     ()-> "abcdefg1234567"
    elbScorm.GetCompanName =     ()-> "Arizona Public Works"
    elbScorm.SetResumeData = (data)-> localStorage.setItem( "currentState", JSON.stringify(data) )
    elbScorm.GetResumeData =     ()-> JSON.parse( localStorage.getItem("currentState") )
    elbScorm.SetComplete   =     ()-> console.log "course is complete"


