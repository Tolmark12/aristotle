Animation  = require 'movie/svg-animation'

module.exports = class Ctanlee

  constructor: ($parent, @playNextAction) ->
    @$el = $ jadeTemplate['slide-ux/text-dialogue/ctanlee']( {} )
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, @$el
    @$speechBox    = $ ".speech-box", @$el
    @$text         = $ ".text", @$speechBox
    @$textContent  = $ "span.content", @$text
    @$nextBtn      = $ "span.next", @$text
    @$faceHolder   = $ ".face", @$el

    @$nextBtn.on "click",   (e)=> @playNextAction()

    PubSub.subscribe 'ctanlee.hide',   (a, data)=> @$el.addClass "hidden"
    PubSub.subscribe 'ctanlee.show',   (a, data)=> @$el.removeClass "hidden"
    PubSub.subscribe 'ctanlee.clear',  (a, data)=> @hideText()
    PubSub.subscribe 'ctanlee.gohome', (a, data)=> @returnToStation()

    $parent.append @$el
    @returnToStation()

  # ------------------------------------ API

  say : (text, txtPos, pos) ->
    @showText()
    @$textContent.html text
    @setTextPosition txtPos

  special : (data)->
    if data.pos?
      @goto data
    if data.emo? || !@$currentAnimation?
      @setEmotion data.emo
    else
      @setEmotion "idle"

  showText : () -> @$speechBox.removeClass "hidden"
  hideText : () -> @$speechBox.addClass "hidden"
  showNext : () -> @$nextBtn.removeClass "hidden"
  hideNext : () -> @$nextBtn.addClass "hidden"

  complete : () -> @returnToStation()

  sleep : () -> @returnToStation()


  # ------------------------------------ Face

  setEmotion : (emotion) ->
    resetDuration = 100
    @resetRotation resetDuration
    @$oldAnimation     = @$currentAnimation
    @$currentAnimation = $('<div class="animation"/>')
    @$faceHolder.append @$currentAnimation

    switch emotion
      when "angry"    then path = 'ctanlee-angry.json'
      when "happy"    then path = 'ctanlee-happy.json'
      when "idle"     then path = 'ctanlee-idle.json'
      when "down"     then path = 'ctanlee-down.json'
      when "left"     then path = 'ctanlee-left.json'
      when "right"    then path = 'ctanlee-right.json'
      when "surprise" then path = 'ctanlee-surprise.json'
      when "unhappy"  then path = 'ctanlee-unhappy.json'
      else                 path = 'ctanlee-idle.json'

    path = aristotle.getAssetPath "~g/ctanlee/#{path}"
    @oldAnimation = @animation
    data =
      delay: resetDuration
      nativeEvents:
        data_ready : ()=> @destroyOldFace()
        complete   : ()=> @idle()
    @animation = new Animation @$currentAnimation, path, data

  destroyOldFace : () ->
    if @oldAnimation?
      @oldAnimation.destroy()
      @$oldAnimation.remove()
      @oldAnimation = null

  resetRotation : (time=100) ->

    @$faceHolder.velocity "stop", true
    @$faceHolder.velocity({rotateZ:0}, {duration:time})

  idle : () ->
    @$faceHolder.velocity({rotateZ:360}, {duration:10000, loop:true, easing:'linear'})

  # ------------------------------------ Positioning

  gotoPos : (x=988, y=34, duration=600, delay=0) ->
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

  returnToStation : () ->
    @hideText()
    @gotoPos()
    @setFilter 'glow'

  # ------------------------------------ HELPERS

  setFilter : (kind) ->
    $('#ctanlee').css filter:"url('##{kind}')"

  setTextPosition : (pos) ->
    @$text.removeClass "top left"
    if !pos? then return

    if Array.isArray pos
      for item in pos
        @$text.addClass item
    else
      @$text.addClass pos
