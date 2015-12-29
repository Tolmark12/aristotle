module.exports = class ClosedCaption

  constructor: ($parent, @playNextAction) ->
    @$el = $ jadeTemplate['slide-ux/text-dialogue/closed-caption']( {} )
    @$el.css display:'none'
    $parent.append @$el
    @$speechBox = $ ".text", @$el
    @hideText()

  # ------------------------------------ API

  say : (text, txtPos) ->
    @showText()
    @$speechBox.html "<div class='#{@character}'><span>#{@character}</span>#{text}</div>"

  special : (data)->
    if data.actor?
      @character = data.actor
    else
      @character = 'ctanlee'

  showText : () -> @$el.fadeIn()
  hideText : () -> @$el.fadeOut()
  showNext : () -> #@$nextBtn.removeClass "hidden"
  hideNext : () -> #@$nextBtn.addClass "hidden"

  complete : () -> @sleep()

  sleep : ()->
    @hideText()

  destroy : () ->
