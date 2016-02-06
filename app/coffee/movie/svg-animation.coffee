module.exports = class SVGAnimation

  constructor: ( el, json, data, hardCopyData=false ) ->
    @eventHandlers = []
    if !data.loop? then data.loop = false

    if hardCopyData
      parsedJson = JSON.parse(JSON.stringify(preloader.preloadQueue.getResult(json)))
    else
      parsedJson = preloader.preloadQueue.getResult json

    if !parsedJson?
      return

    dir = aristotle.getAssetPath json, true

    # Check for images, if we find some, point to the right path
    for item in parsedJson.assets
      if item.p?
        item.p = "#{dir}#{item.p}"

    @animation = bodymovin.loadAnimation {
       wrapper   : el[0]
       animType  : 'svg'
       loop      : data.loop
       prerender : true
       autoplay  : false
       path      : 'episodes/episode0/animations'
       animationData: parsedJson
      #  path      : json
     }

    if data.nativeEvents?
      @addNativeEvents data.nativeEvents

    if data.vcr && !data.jumpToEnd
      PubSub.publish 'vcr-control.show', @

    if data.jumpToEnd?
      @animation.setCurrentRawFrameValue @animation.totalFrames
    else
      if data.delay?
        aristotle.timeout @play, data.delay
      else
        @play()
    @addEvents data


  addEvents : (data) ->
    if data.events?
      for event in data.events
        handle = @animation.addEventListener event, ()=>
          PubSub.publish "layer.#{data.depth}.#{event}"
        @trackEventHandler event, handle

  addNativeEvents : (events) ->
    for event, cb of events
      handle = @animation.addEventListener event, cb
      @trackEventHandler event, handle

  addOnComplete : (onComplete) ->
    handle = @animation.addEventListener "complete", ()=>
      onComplete()
    @trackEventHandler "complete", handle


  play    : () => @animation.play();
  stop    : () -> @animation.stop()
  destroy : () ->
    # if @animation?
    #   @destroyEvents()
    #   try
    #     @animation.destroy()
    #   catch error
    #     console.log error
    #     console.log @animation.renderer
    #     console.log @animation.renderer.layers

  trackEventHandler : (event, handler) ->
    @eventHandlers.push {event:event, handler:handler}

  destroyEvents : () ->
    for evnt in @eventHandlers
      @animation.removeEventListener evnt.event, evnt.handler
