module.exports = class SVGAnimation

  constructor: ( el, json, doLoop=true ) ->
    doLoop = true
    @animation = bodymovin.loadAnimation {
             wrapper   : el
             animType  : 'svg'
             loop      : doLoop
             prerender : true
             autoplay  : false
             path      : json
           }

  play   : () -> @animation.play()#; @traceFrames()
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
