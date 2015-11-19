module.exports = class SVGAnimation

  constructor: ( el, json, data ) ->
    window.fixSVGS = ()->
      $("svg").css width:"initial", height:"initial"
    @animation = bodymovin.loadAnimation {
             wrapper   : el[0]
             animType  : 'svg'
             loop      : data.loop
             prerender : true
             autoplay  : false
             path      : json
           }

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


  play   : () => @animation.play()#; @traceFrames()
  stop   : () -> @animation.stop()
  destroy: () ->
    @animation.destroy()
    if @interval?
      clearInterval @interval

  traceFrames : () ->
    @interval = setInterval ()=>
      console.log @animation.currentFrame, @animation.totalFrames
    ,
      500
