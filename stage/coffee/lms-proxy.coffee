
module.exports = class LMSProxy

  constructor : (@settings, @refreshWindowCb, @targetDomain, @trainingWindow) ->
    if @settings.isLocal then @initScormStubs()
    @version = { major:0, minor:1, feature:0, storeVersion:1 }
    window.addEventListener 'message', (e)=> @onWindowMessage e
    window.lmsproxy = @


  sendMessage : (msg, data) ->
    packet =
      message : msg
      domain  : "#{window.location.protocol}//#{window.location.host}"
      data    : data
    @trainingWindow.postMessage(packet, @targetDomain)

  onWindowMessage : (e) ->

    if e.data.message == "initialized"
      clearInterval @initialSendInterval

    # If this is a change to the glob
    else if e.data.message == "persist.to.lms"
      @saveGlobToLMS e.data.data

    else if e.data.message == "refresh.window"
      @refreshWindowCb @startSendinInitSignal

    # On course complete
    else if e.data.message == "course.complete"
      window.courseComplete = true
      elbScorm.SetComplete()
      log "Course Complete"
      console.log "LMS.HTML : The Course has been completed"


  begin : () ->
    # Try to start the course
    if elbScorm.initCourse()
      @user       = elbScorm.GetUserName()    # ex:       Kingsley, James
      @userId     = elbScorm.GetUserID()      # I assume: asf0h30asbu30
      stateData   = elbScorm.GetResumeData()  # ojb

      # If there is data from a previous session..
      if stateData?
        if !stateData.version?
          @glob = {}
        # If the module data structure is new and incompatible
        else if stateData.version.storeVersion < @version.storeVersion || !stateData.version.storeVersion?
          @glob = {}
        # else, we have compatible data, use it:
        else
          @glob            = {}
          @glob.globalVars = stateData.globalVars
          @glob.location   = stateData.location
      else
        @glob = {}

      @glob.version    = @version
      @glob.user       = @user
      @glob.userId     = @userId
      @glob.initParams = @settings
      @startSendinInitSignal()
    else
      console.log "couldn't start the course"

  # Persist the contents of LMS to
  saveGlobToLMS : (@glob) -> elbScorm.SetResumeData @glob

  startSendinInitSignal : () =>
    @initialSendInterval = setInterval ()=>
      @sendMessage "init", @glob
    ,
      2000

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
