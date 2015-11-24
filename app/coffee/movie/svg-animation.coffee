module.exports = class SVGAnimation

  constructor: ( el, json, data ) ->
    # window.fixSVGS = ()->
      # $("svg").css width:"initial", height:"initial"
    if !data.loop? then data.loop = false

    @animation = bodymovin.loadAnimation {
             wrapper   : el[0]
             animType  : 'svg'
             loop      : data.loop
             prerender : true
             autoplay  : false
             path      : json
           }


    if data.jumpToEnd?
      interval  = setInterval ()=>
        if @animation.totalFrames != 0
          clearInterval interval
          @animation.setCurrentRawFrameValue @animation.totalFrames
      ,
        100
    else
      if data.delay?
        setTimeout @play, data.delay
      else
        @play()
    @addEvents data


  addEvents : (data) ->
    if data.events?
      for event in data.events
        @animation.addEventListener event, ()=>
          @animation.removeEventListener event
          PubSub.publish "layer.#{data.depth}.#{event}"


  play   : () => @animation.play();
  stop   : () -> @animation.stop()
  destroy: () ->
    @animation.destroy()
    if @interval?
      clearInterval @interval

  traceFrames : () ->
    @interval = setInterval ()=>
      console.log @animation.currentRawFrame, @animation.currentFrame, @animation.totalFrames
    ,
      500
