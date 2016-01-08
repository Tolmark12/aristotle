module.exports = class VCRControls

  constructor: ($el) ->
    $node = $ jadeTemplate['chrome-ui/vcr']( {} )
    $el.append $node
    @$playhead = $ '.playhead', $node
    @$attic    = $ '.attic', $node
    @$pauseAndPlayBtn = $('.pause-and-play', $node)

    @$pauseAndPlayBtn.on 'click',         ()=> @controlBtnClick()
    $("#ani-replay", $node).on 'click',   ()=> @replayClick()
    $("#ani-continue", $node).on 'click', ()=> @continueClick()

    PubSub.subscribe 'vcr.play',   (m, data)=> @play()
    PubSub.subscribe 'vcr.pause',  (m, data)=> @pause()
    PubSub.subscribe 'vcr.replay', (m, data)=> @replay()

  play  : ()->
    @$pauseAndPlayBtn.removeClass 'paused'
    @animation.play()

  pause : ()->
    @$pauseAndPlayBtn.addClass 'paused'
    @animation.pause()

  replay : () ->
    @$attic.addClass 'hidden'
    @$pauseAndPlayBtn.removeClass 'complete'
    @animation.goToAndStop 0
    @animation.play()

  activate : (svgAnimation, @completeCb) ->
    # bodymovin.setQuality('low')
    @reset()

    @animation = svgAnimation.animation

    @animation.addEventListener 'enterFrame', ()=>
      perc = @animation.currentFrame / @animation.totalFrames
      @$playhead.css width: "#{Math.round( perc * 100)}%"

    @animation.addEventListener 'complete', ()=>
      @isComplete = true
      @$attic.removeClass 'hidden'
      @$pauseAndPlayBtn.addClass 'complete'

  reset : () ->
    @isPaused   = false
    @isComplete = false
    @$attic.addClass 'hidden'
    @$pauseAndPlayBtn.removeClass 'paused'
    @$pauseAndPlayBtn.removeClass 'complete'

  # ------------------------------------ Events

  controlBtnClick : (e) ->
    if @isComplete
      @replayClick()
    else if @isPaused
      @isPaused = false
      PubSub.publish 'vcr.play'
    else
      @isPaused = true
      PubSub.publish 'vcr.pause'

  replayClick   : () ->
    @isComplete = false
    PubSub.publish 'vcr.replay'
  continueClick : () -> @completeCb()
