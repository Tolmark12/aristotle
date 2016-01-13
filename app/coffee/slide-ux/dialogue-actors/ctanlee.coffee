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

    token1  = PubSub.subscribe 'ctanlee.hide',   (a, data)=> @$el.addClass "hidden"
    token2  = PubSub.subscribe 'ctanlee.show',   (a, data)=> @$el.removeClass "hidden"
    token3  = PubSub.subscribe 'ctanlee.clear',  (a, data)=> @hideText()
    token4  = PubSub.subscribe 'ctanlee.gohome', (a, data)=> @returnToStation()
    token5  = PubSub.subscribe 'ctanlee.goto',   (a, data)=> @goto data
    token6  = PubSub.subscribe 'ctanlee.stop',   (a, data)=> @$faceHolder.velocity "stop", true
    @tokens = [token1,token2,token3,token4,token5,token6]

    $parent.append @$el
    @returnToStation()

  # ------------------------------------ API

  say : (text, txtPos, pos) ->
    @showText()
    @$textContent.html text
    @setTextPosition txtPos

  # Movements of talking
  startTalking : () ->
    @isTalking = true
    @bounce()

  stopTalking  : () ->
    @isTalking = false
    clearTimeout @timeout
    @$currentAnimation.stop true
    @$currentAnimation.velocity({scale:1}, {duration:300, easing:'easeinoutquint'})

  bounce : ->
    duration  = 500 + Math.random() * 300
    timoutDur = duration * (Math.random()/1.3)

    if Math.random() > 0.8
      timoutDur += 600

    @timeout = setTimeout ()=>
      scale = 0.8 + (Math.random()/3)
      @$currentAnimation.stop true
      @$currentAnimation.css transform: "scale(#{scale})"
      @$currentAnimation.velocity({scale:scale}, {duration:0})
      @$currentAnimation.velocity({scale:1}, {delay:10, duration:duration, easing:[500, 15]})
      if @isTalking
        @bounce()
    ,
      timoutDur

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

  sleep : () ->
    @returnToStation()


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
      when "down"     then path = 'ctanlee-look-down.json'
      when "left"     then path = 'ctanlee-look-left.json'
      when "right"    then path = 'ctanlee-look-right.json'
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

  destroy : () ->
    @$el.velocity "stop", true
    @$faceHolder.velocity "stop", true
    @$el.empty()
    for token in @tokens
      PubSub.unsubscribe token