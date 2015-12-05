AudioTrack = require 'episode/audio-track'
Sequence   = require 'misc/sequence'

module.exports = class Ctanlee

  constructor: ($parent) ->
    aristotle.ctanlee = @
    @$el = $ jadeTemplate['slide-ux/ctanlee/ctanlee']( {} )
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, @$el
    @$speechBox = $ ".speech-box", @$el
    @$text      = $ ".text span.content", @$speechBox
    @$nextBtn   = $ ".text span.next", @$speechBox

    @$nextBtn.on "click",   (e)=> @playNextAction()
    $('html').on "keydown", (e)=> if e.which == 39 then @playNextAction() # Allow right arrow to play next slide

    PubSub.subscribe 'ctanlee.activate',  (a, action)=> @playAction(action)
    PubSub.subscribe 'ctanlee.clear',     (a, action)=> @hideText()
    PubSub.subscribe 'ctanlee.gohome',    (a, action)=> @returnToStation()
    PubSub.subscribe 'ctanlee.hide',      (a, action)=> @$el.css display: "none"
    PubSub.subscribe 'ctanlee.show',      (a, action)=> @$el.css display: "initial"

    $parent.append @$el
    @returnToStation()

  # ------------------------------------ API

  activate : (@data) ->
    if !@data.timeline? then return
    @timeline = @data.timeline
    @sequence = new Sequence @timeline
    @playAction @sequence.getCurrentItem().action

  say : (text, audio, next) ->
    if text?
      @showText()
      @$text.html text
    if audio?
      if @track? then @track.stop()
      @track = new AudioTrack(audio)
      @track.play ()=>
        if next == 'audio' then @playNextAction()

    if next == 'click' then @showNext() else @hideNext()


  setEmotion : (emotion) ->

  gotoPos : (x=970, y=10, duration=600, delay=0) ->

    @$el.velocity "stop", true
    @$el.velocity {top:y, left:x}, {delay:delay, duration:duration, easing:"easeInOutQuint"}

  gotoItem : (id) ->
    pos = aristotle.movie.getGlobalPos id
    if pos == null then aristotle.throw "ctanlee wants to hover by `#{id}`, but is unable to find an item with the id #{id}" ; return
    pos.x += 0
    pos.y += 0
    @gotoPos pos.x, pos.y

  goto : (action) ->
    # If it is an id
    if typeof action.pos == "string"
      # Sometimes we want to delay moving ctanlee and finging the position
      # of his target. EX: til the zooming of the movit is complete
      if action.delayMove?
        me = @
        setTimeout ()-> me.gotoItem action.pos
        ,
          action.delayMove
      else
        @gotoItem action.pos

    # else it's a position
    else
      @gotoPos action.pos[0], action.pos[1], action.pos[2], action.pos[3]

  # ------------------------------------ MEAT

  playNextAction : () ->
    if @track? then @track.stop()
    if @sequence.isAtLastItem()
      @complete()
    else
      @sequence.next()
      @playAction @sequence.getCurrentItem().action

  # Play the specified action and set the action index to that action's index
  playAction : (actionId) ->
    if !@data.actions[actionId]? then aristotle.throw "ctanlee was asked to play the action named `#{actionId}`, but no action with that id exists." ; return

    @setFilter 'black-glow'
    action = @overlayDefaults actionId

    # Action (play actions first in case of something...)
    if action.action?
      aristotle.commander.do action.action

    # Emotion
    if action.emo?
      @setEmotion action.emo

    # Position
    if action.pos?
      @goto action

    @say action.text, action.audio, action.next

  complete : () ->
    @returnToStation()
    PubSub.publish 'ctanlee.complete'

  returnToStation : () ->
    @hideText()
    @gotoPos()
    @setFilter 'glow'

  showText : () -> @$speechBox.css opacity: 1, "pointer-events": "all"
  hideText : () -> @$speechBox.css opacity: 0, "pointer-events": "none"

  showNext : () -> @$nextBtn.css opacity: 1,   'pointer-events': 'all'
  hideNext : () -> @$nextBtn.css opacity: 0,   'pointer-events': 'none'

  # ------------------------------------ HELPERS

  setFilter : (kind) ->
    $('#ctanlee').css filter:"url('##{kind}')"

  getIndexOfAction : (action) ->
    if !@timeline? then return 0

    for data, i in @timeline
      if data.action == action then return i

  overlayDefaults : (actionId) ->
    if !@data.defaults? then return @data.actions[actionId]
    # copy default actions into new object
    actions = JSON.parse JSON.stringify @data.defaults
    for key, val of @data.actions[actionId]
      actions[key] = val
    actions
