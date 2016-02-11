module.exports = class SVGAnimation


  # WHOA! THIS NEEDS A SERIOUS CLEANUP
  constructor: ( el, json, data, hardCopyData=false ) ->
    if data.reusable then hardCopyData = true

    @eventHandlers = []
    if !data.loop? then data.loop = false
    if hardCopyData
      parsedJson = JSON.parse(JSON.stringify(preloader.preloadQueue.getResult(json)))
    else
      parsedJson = preloader.preloadQueue.getResult json

    config =
       wrapper       : el[0]
       animType      : 'svg'
       loop          : data.loop
       prerender     : true
       autoplay      : false

    # We have the json
    if parsedJson?
      dir = aristotle.getAssetPath json, true

      # Check for images, if we find some, point to the right path
      for item in parsedJson.assets
        if item.p?
          item.p = "#{dir}#{item.p}"
      config.animationData = parsedJson
    else
      config.path = aristotle.getAssetPath json


    @animation = bodymovin.loadAnimation config

    if data.nativeEvents?
      @addNativeEvents data.nativeEvents

    if data.vcr && !data.jumpToEnd
      PubSub.publish 'vcr-control.show', @

    # We have the json
    if parsedJson?

      # If they're trying to listen for data ready, fire
      # that right away, because the data is already loaded
      if data.nativeEvents?
        if data.nativeEvents.data_ready?
          data.nativeEvents.data_ready()

      if data.jumpToEnd?
        @animation.setCurrentRawFrameValue @animation.totalFrames
      else
        if data.delay?
          aristotle.timeout @play, data.delay
        else
          @play()
          @addEvents data

    # We dont' have the json yet, so we have to load it
    else
      @animation.addEventListener 'data_ready', ()=>
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
    if @animation?
      @destroyEvents()
      try
        @animation?.destroy()
      catch error
        console.log "couldn't destroy animation"

  trackEventHandler : (event, handler) ->
    @eventHandlers.push {event:event, handler:handler}

  destroyEvents : () ->
    for evnt in @eventHandlers
      @animation.removeEventListener evnt.event, evnt.handler
