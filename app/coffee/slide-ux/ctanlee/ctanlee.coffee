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

    @$nextBtn.on "click", ()=> @playNextAction()

    PubSub.subscribe 'ctanlee.activate',  (a, action)=> @playAction(action)
    PubSub.subscribe 'ctanlee.clear',     (a, action)=> @hideText()
    PubSub.subscribe 'ctanlee.gohome',    (a, action)=> @returnToStation()

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
    pos = $("##{id}").offset()
    @gotoPos pos.left-100, pos.top-80

  goto : (data) ->
    # If it is an id
    if typeof data == "string"
      @gotoItem data

    # else it's a position
    else
      @gotoPos data[0], data[1], data[2], data[3]

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
    @setFilter 'black-glow'
    action = @overlayDefaults actionId

    # Emotion
    if action.emo?
      @setEmotion action.emo

    # Position
    if action.pos?
      @goto action.pos

    # Action
    if action.action?
      # TODO : should I move global command handling to a single location? Prbly
      if Array.isArray action.action
        for item in action.action
          PubSub.publish item.cmd, item.data
      else
        PubSub.publish action.action.cmd, action.action.data

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
