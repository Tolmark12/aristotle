SVGAnimation = require 'movie/svg-animation'

module.exports = class Layer

  constructor: ($el, @depth) ->
    @isCached = false
    @$layer = $ jadeTemplate['movie/layer']( {depth:@depth} )
    $el.append @$layer

  report : () ->
    cachedOrNot = if @isCached then "cached" else "not cached"
    symbol      = if @isCached then "√" else "-"
    console.log   "#{symbol} Layer #{@depth} : #{@pristineLayerData.content} is #{cachedOrNot}"

  update : (@pristineLayerData) =>
    @layerData = jQuery.extend true, {}, @pristineLayerData
    if @layerData.wait?
      aristotle.timeout @createContent, @layerData.wait
      return

    @createContent()

  createContent : () =>
    if @layerData.content? || @layerData.background?
      @updateContent( @layerData )
    if @layerData.fx?
      @updateEffects( @layerData.fx )
    if @layerData.action?
      aristotle.commander.do @layerData.action


  updateContent : (layerData) ->
    # If there is existing content, create a second 'onion layer' so the transition is seamless
    if @currentOnionLayer?
      @fadeAndRemoveOldLayer()
    @addTheCorrectContent layerData
    @updateBackground layerData

  addTheCorrectContent : (layerData) ->
    @isAnimation = false
    @isCached    = false
    parse layerData
    if layerData.ieCache && !aristotle.dontCache && aristotle.isIE
      layerData.loop  = false
      layerData.cache = true

    @currentOnionLayer = @addOnionLayer()
    if !layerData.content?
      kind = "none"
    else if layerData.content == "clear"
      kind = "clear"
    else
      kind = layerData.content.split(".")[1]
    switch kind
      when "json"
        if @animation?
          @doomedAnimation = @animation
        @addAnimation @currentOnionLayer, layerData
      when "svg"
        @addSvg @currentOnionLayer, layerData
      when "gif", "jpg", "jpeg","png"
        @addImage @currentOnionLayer, layerData.content, layerData.repeat, layerData.position
      when "clear"
        @empty()
      when "mp4"
        @addVideo @currentOnionLayer, layerData.content
      when "none"  then "do nothing"
      else              aristotle.throw "tried to add unrecognized layer type '#{kind}'", true

  addAnimation : ($holder, layerData) ->
    @isAnimation = true
    @animation  = new SVGAnimation $holder, layerData.content, layerData
    if layerData.cache
      @animation.addOnComplete ()=>
        # Added a timeout because reconstituting animations required us to
        # jump to the end of the animation, and it seemed like the animation
        # didn't exist yet to cache.
        setTimeout ()=>
          @cache()
        ,
          10

  cache : () ->
    return if @isCached || !@isAnimation || aristotle.dontCache
    @isCached = true
    $svg = $("svg", @$layer)
    $svg.attr style:"", xmlns:""
    $svg.removeAttr "xmlns" #Have no idea! But if I don't do this, the animation won't cache in ie X-P
    svg  = $svg[0]
    img  = $( $.parseHTML("<img />") )[0]
    window.traceLayer = @
    @doomedAnimation  = @animation
    try
      svg.toDataURL 'image/png', {
          renderer: 'canvg',
          callback: (data) =>
            img.setAttribute 'src', data
            @fadeAndRemoveOldLayer()
            @currentOnionLayer = @addOnionLayer()
            @currentOnionLayer.append img
        }
    catch error
      aristotle.throw error

  uncache : () ->
    return if !@isCached
    @isCached = false
    @fadeAndRemoveOldLayer()
    @currentOnionLayer = @addOnionLayer()

    # Copy layer data into a temp object
    tempObj = {}
    for key, val of @layerData
      tempObj[key] = val

    tempObj.ieCache   = false
    tempObj.cache     = false
    tempObj.jumpToEnd = true
    @addTheCorrectContent tempObj

  addOnionLayer : () ->
    $onionLayer = $ jadeTemplate['movie/onion-layer']( {} )
    @$layer.prepend $onionLayer
    $onionLayer

  fadeAndRemoveOldLayer : () ->
    oldOnionLayer = @currentOnionLayer
    aristotle.timeout ()=>
      oldOnionLayer.velocity 'stop', true
      oldOnionLayer.velocity {opacity:0}, {
        duration:200, complete:()=>
          if @doomedAnimation?
            @destroyDoomedAnimation()
          oldOnionLayer.remove()
          oldOnionLayer = null
      }
    ,
      200

  destroyDoomedAnimation : () ->
    return if !@doomedAnimation?
    @doomedAnimation.destroy()
    @doomedAnimation = null

  destroyAnimation : () ->
    return if !@animation?
    @animation.destroy()
    @animation = null

  addFilter : (filterId) -> $("svg", @currentOnionLayer).css filter:"url(##{filterId})"
  removeFilters : () -> $("svg", @currentOnionLayer).css filter: "none"

  destroy : () ->
    @empty()
    @$layer.remove()

  empty : () ->
    @$layer.empty()
    @destroyDoomedAnimation()
    @destroyAnimation()
    @currentOnionLayer = null


  # ------------------------------------
  # ------------------------------------
  # ------------------------------------ Temp placing out of my mind

  addSvg : ($holder, layerData) ->
    me = @
    $holder.load aristotle.getAssetPath(layerData.content), ()->
      if layerData.cache then me.cache()
      me = null

  addImage : ($holder, file, repeat="no-repeat", position="left") ->
    $holder.css background: "url(#{aristotle.getAssetPath(file)}) #{repeat} #{position}"

  addVideo : ($holder, file) ->
    $vid = $ jadeTemplate['movie/video']( {src:aristotle.getAssetPath(file)} )
    $holder.append $vid

  updateEffects : (fx) ->
    if fx.clear then @$layer.attr class:'layer'
    if fx.effects?
      for effect in fx.effects
        @$layer.addClass effect

  updateBackground : (layerData) ->
    return if !layerData.background?
    @currentOnionLayer.css background: layerData.background


  # cache : ()->
  #   html2canvas( @$layer ).then (canvas)=>
  #     @fadeAndRemoveOldLayer()
  #     @currentOnionLayer = @addOnionLayer()
  #     @currentOnionLayer.append Canvas2Image.convertToPNG(canvas, 1024, 768)