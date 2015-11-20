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
    @playNextAction()

  say : (text, audio, next) ->
    if text?
      @showText()
      @$text.html text
    if audio?
      track = new AudioTrack(audio)
      track.play ()=>
        if next == 'audio' then @playNextAction()

    if next == 'click' then @showNext() else @hideNext()


  setEmotion : (emotion) ->

  goto : (x=970, y=10, duration=600, delay=0) ->
    @$el.velocity "stop", true
    @$el.velocity {top:y, left:x}, {delay:delay, duration:duration, easing:"easeInOutQuint"}

  # ------------------------------------ MEAT

  playNextAction : () ->
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
      @goto action.pos[0], action.pos[1], action.pos[2], action.pos[3]

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
    @goto()
    @setFilter 'glow'

  showText : () -> @$speechBox.css opacity: 1, "pointer-events": "all"
  hideText : () -> @$speechBox.css opacity: 0, "pointer-events": "none"

  showNext : () -> @$nextBtn.css opacity:1, 'pointer-events': 'all'
  hideNext : () -> @$nextBtn.css opacity:0, 'pointer-events': 'none'

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
