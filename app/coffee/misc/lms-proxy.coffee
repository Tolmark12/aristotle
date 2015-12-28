module.exports = class LMSProxy

  constructor: (isLocal) ->
    # for local testing, simulate the lms API
    if isLocal then @initScormStubs()
    aristotle.lmsProxy = @
    PubSub.subscribe 'state.save',      (m, data)=> @saveState()
    PubSub.subscribe 'state.load',      (m, data)=> @loadState()
    PubSub.subscribe 'state.rehydrate', (m, data)=> @rehydrate()

  begin : (cb) ->
    if elbScorm.initCourse()
      @user      = elbScorm.GetUserName()    # ex:       Kingsley, James
      @userId    = elbScorm.GetUserID()      # I assume: asf0h30asbu30
      stateData  = elbScorm.GetResumeData()  # ojb
      if stateData?
        aristotle.globals.vars = stateData.globalVars
      cb()
    else
      console.log "couldn't start the course"

  loadState : () -> @store = elbScorm.GetResumeData()

  rehydrate : () ->
    if !@store? then return
    aristotle.movie.rehydrateLayerState @store.layerState

  saveState : () ->
    @store = {}
    # global variabls
    @store.globalVars = aristotle.globals.vars

    # layer state
    @store.layerState = aristotle.movie.dehydrateLayerState()

    # current episode / chapter / slide in the training
    # todo

    elbScorm.SetResumeData @store


  # ------------------------------------ For Local Testing

  initScormStubs : () ->
    window.elbScorm = {}
    elbScorm.initCourse    =     ()-> true
    elbScorm.GetUserName   =     ()-> "Ricks, Justin"
    elbScorm.GetUserID     =     ()-> "abcdefg1234567"
    elbScorm.SetResumeData = (data)-> localStorage.setItem( "currentState", JSON.stringify(data) )
    elbScorm.GetResumeData =     ()-> JSON.parse( localStorage.getItem("currentState") )

