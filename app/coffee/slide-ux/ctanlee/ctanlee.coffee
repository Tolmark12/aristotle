module.exports = class Ctanlee

  constructor: ($parent) ->
    aristotle.ctanlee = @
    @$el = $ jadeTemplate['slide-ux/ctanlee/ctanlee']( {} )
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, @$el
    @$speechBox = $ ".speech-box", @$el
    @$text      = $ ".text span.content", @$speechBox
    $( ".text span.next", @$speechBox).on "click", ()=> @playNextAction()

    PubSub.subscribe 'ctanlee.activate', (a, action)=> @playAction(action)

    $parent.append @$el

  # ------------------------------------ API

  activate : (@data) ->
    @currentActionIndex = -1
    @timeline = @data.timeline
    @playNextAction()

  say : (text, audio) ->
    @showText()
    @$text.html text

  setEmotion : (emotion) ->
    console.log "Ctanlee is feeling #{emotion}."

  goto : (x=960,y=45,duration=2000,delay=0) ->
    @$el.velocity "stop", true
    @$el.velocity {top:y, left:x}, {delay:delay, duration:duration, easing:"easeInOutQuint"}

  # ------------------------------------ MEAT

  playNextAction : () ->
    if @currentActionIndex == @timeline.length - 1
      @complete()
      return
    @playAction @timeline[ ++@currentActionIndex ].action

  # Play the specified action and set the action index to that action's index
  playAction : (actionId) ->
    @currentActionIndex = @getIndexOfAction(actionId)
    action = @data.actions[actionId]
    @setEmotion action.emo
    @goto action.pos[0], action.pos[1], action.pos[2], action.pos[3]
    @say action.text, action.audio

  complete : () ->
    @returnToStation()
    PubSub.publish 'ctanlee.complete'

  returnToStation : () ->
    @hideText()
    @goto()

  hideText : () -> @$speechBox.css display:'none'
  showText : () -> @$speechBox.css display:'block'

  # ------------------------------------ HELPERS

  getIndexOfAction : (action) ->
    for data, i in @timeline
      if data.action == action then return i


