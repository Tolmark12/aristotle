SVGAnimation = require 'movie/svg-animation'

module.exports = class Layer

  constructor: ($el, @depth) ->
    @isCached = false
    @$layer = $ jadeTemplate['movie/layer']( {depth:@depth} )
    $el.append @$layer


  report : () ->
    cachedOrNot = if @isCached then "cached" else "not cached"
    symbol      = if @isCached then "√" else "-"
    msg =  "#{symbol} Layer #{@depth} : #{@pristineLayerData.content} is #{cachedOrNot}"
    console.log msg

  update : (@pristineLayerData) =>
    @layerData = jQuery.extend true, {}, @pristineLayerData
    if @layerData.wait?
      setTimeout @createContent, @layerData.wait
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
      when "json"  then @addAnimation( @currentOnionLayer, layerData )
      when "svg"   then @addSvg( @currentOnionLayer, layerData )
      when "gif", "jpg", "jpeg","png"
                        @addImage( @currentOnionLayer, layerData.content, layerData.repeat, layerData.position )
      when "clear" then @empty()
      when "none"  then "do nothing"
      else              aristotle.throw "tried to add unrecognized layer type '#{kind}'", true

  # cache : ()->
  #   html2canvas( @$layer ).then (canvas)=>
  #     @fadeAndRemoveOldLayer()
  #     @currentOnionLayer = @addOnionLayer()
  #     @currentOnionLayer.append Canvas2Image.convertToPNG(canvas, 1024, 768)

  cache : () ->
    return if @isCached || !@isAnimation || aristotle.dontCache
    @isCached = true
    $svg = $("svg", @$layer)
    $svg.attr style:"", xmlns:""
    $svg.removeAttr "xmlns" #Have no idea! But if I don't do this, the animation won't cache in ie X-P
    svg  = $svg[0]
    $img = $( $.parseHTML("<img />") )
    img  = $img[0]
    window.traceLayer = @
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
      console.log error


  uncache : () ->
    return if !@isCached
    @isCached = false
    @fadeAndRemoveOldLayer()
    @currentOnionLayer    = @addOnionLayer()

    # Copy layer data into a temp object
    tempObj = {}
    for key, val of @layerData
      tempObj[key] = val

    tempObj.ieCache   = false
    tempObj.cache     = false
    tempObj.jumpToEnd = true
    @addTheCorrectContent tempObj

  updateEffects : (fx) ->
    if fx.clear then @$layer.attr class:'layer'
    if fx.effects?
      for effect in fx.effects
        @$layer.addClass effect

  updateBackground : (layerData) ->
    return if !layerData.background?
    @currentOnionLayer.css background: layerData.background

  addAnimation : ($holder, layerData) ->
    @isAnimation = true
    @animation  = new SVGAnimation $holder, aristotle.getAssetPath(layerData.content), layerData
    if layerData.cache
      @animation.addOnComplete ()=>
        # Added a timeout because reconstituting animations required us to
        # jump to the end of the animation, and it seemed like the animation
        # didn't exist yet to cache.
        setTimeout ()=>
          @cache()
        ,
          10


  addSvg : ($holder, layerData) ->
    me = @
    $holder.load aristotle.getAssetPath(layerData.content), ()->
      if layerData.cache then me.cache()

  addImage : ($holder, file, repeat="no-repeat", position="left") ->
    $holder.css background: "url(#{aristotle.getAssetPath(file)}) #{repeat} #{position}"

  addOnionLayer : () ->
    $onionLayer = $ jadeTemplate['movie/onion-layer']( {} )
    @$layer.prepend $onionLayer
    $onionLayer

  fadeAndRemoveOldLayer : () ->
    oldOnionLayer = @currentOnionLayer
    setTimeout ()=>
      oldOnionLayer.velocity 'stop', true
      oldOnionLayer.velocity {opacity:0}, {duration:200, complete:()=> oldOnionLayer.remove() }
    ,
      200

  empty : () -> @$layer.empty()
  addFilter : (filterId) -> $("svg", @currentOnionLayer).css filter:"url(##{filterId})"
  removeFilters : () -> $("svg", @currentOnionLayer).css filter: "none"

  destroy : () ->
    @$layer.remove()