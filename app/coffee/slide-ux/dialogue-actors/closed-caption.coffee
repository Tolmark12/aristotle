module.exports = class ClosedCaption

  constructor: ($parent, @playNextAction) ->
    @$el = $ jadeTemplate['slide-ux/text-dialogue/closed-caption']( {} )
    $parent.append @$el
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, @$el

    token7  = PubSub.subscribe 'cc.on',   (a, data)=> @enableCc()
    token8  = PubSub.subscribe 'cc.off',  (a, data)=> @disableCc()

    @ccDisplay  = $ ".closed-caption", @$el

    @$speechBox = $ ".text", @$el
    @hideText()

    @$icon = $(".closed-caption-icon")
    @$icon.on 'click', (e)=> @toggleClosedCaptioning()

    ccWasOn = aristotle.globals.get 'ccIsOn', false
    if ccWasOn?
      if !ccWasOn
        @turnCcOff()
      else
        @turnCcOn()
    else
      @turnCcOn()

  toggleClosedCaptioning : () ->
    if @ccIsOn
      @turnCcOff()
    else
      @turnCcOn()
    aristotle.globals.set "ccIsOn", @ccIsOn

  # ------------------------------------ API

  turnCcOff : () ->
    @ccIsOn = false
    @$icon.addClass 'off'
    PubSub.publish 'cc.off'

  turnCcOn : () ->
    @ccIsOn = true
    @$icon.removeClass 'off'
    PubSub.publish 'cc.on'

  say : (text, txtPos) ->
    @showText()
    @$speechBox.html "<div class='#{@character}'><span>#{@character}</span>#{text}</div>"

  special : (data)->
    if data.actor?
      @character = data.actor
    else
      @character = 'ctanlee'

  showText : () -> @ccDisplay.removeClass "hidden"
  hideText : () -> @ccDisplay.addClass "hidden"

  enableCc  : () -> @ccDisplay.removeClass "disabled"
  disableCc : () -> @ccDisplay.addClass "disabled"

  showNext     : () -> #@$nextBtn.removeClass "hidden"
  hideNext     : () -> #@$nextBtn.addClass "hidden"
  startTalking : () ->
  stopTalking  : () ->

  complete : () -> @sleep()

  sleep : ()->
    @hideText()

  destroy : () ->
