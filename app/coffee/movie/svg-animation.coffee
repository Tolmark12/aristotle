module.exports = class SVGAnimation

  constructor: ( el, json, data ) ->
    if !data.loop? then data.loop = false

    @animation = bodymovin.loadAnimation {
             wrapper   : el[0]
             animType  : 'svg'
             loop      : data.loop
             prerender : true
             autoplay  : false
             path      : json
           }

    if data.nativeEvents? then @addNativeEvents data.nativeEvents

    @animation.addEventListener 'data_ready', ()=>
      if data.jumpToEnd?
        @animation.setCurrentRawFrameValue @animation.totalFrames
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

  addNativeEvents : (events) ->
    for event, cb of events
      @animation.addEventListener event, cb

  addOnComplete : (onComplete) ->
    @animation.addEventListener "complete", ()=>
      # @animation.removeEventListener "complete"
      onComplete()

  play   : () => @animation.play();
  stop   : () -> @animation.stop()
  destroy: () ->
    if @animation?

      try
        @animation.destroy()
      catch error
        console.log @animation.renderer
        console.log @animation.renderer.layers

      if @interval?
        clearInterval @interval

  traceFrames : () ->
    @interval = setInterval ()=>
      console.log @animation.currentRawFrame, @animation.currentFrame, @animation.totalFrames
    ,
      500
