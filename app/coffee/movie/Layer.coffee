SVGAnimation = require 'movie/svg-animation'

module.exports = class Layer

  constructor: ($el, depth) ->
    @$layer = $ jadeTemplate['movie/layer']( {depth:depth} )
    $el.append @$layer


  update : (@layerData) =>
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
      else              aristotle.throw "tried to add unrecognized layer type '#{kind}'", true

  cache : ()->
    html2canvas( @$layer ).then (canvas)=>
      @fadeAndRemoveOldLayer()
      @currentOnionLayer = @addOnionLayer()
      @currentOnionLayer.append Canvas2Image.convertToPNG(canvas, 1024, 768)

  updateEffects : (fx) ->
    if fx.clear then @$layer.attr class:'layer'
    if fx.effects?
      for effect in fx.effects
        @$layer.addClass effect

  updateBackground : (layerData) ->
    return if !layerData.background?
    @currentOnionLayer.css background: layerData.background

  addAnimation : ($holder, layerData) ->
    @animation  = new SVGAnimation $holder, "#{aristotle.episodeRoot}/animations/#{layerData.content}", layerData
    if layerData.cache
      @animation.addOnComplete ()=>
        @cache()

  addSvg : ($holder, layerData) ->
    console.log layerData
    me = @
    $holder.load "#{aristotle.episodeRoot}/assets/#{layerData.content}", ()->
      if layerData.cache then me.cache()

  addImage : ($holder, file, repeat="no-repeat", position="left") ->
    $holder.css background: "url(#{aristotle.episodeRoot}/assets/#{file}) #{repeat} #{position}"

  destroy : () ->
    @$layer.remove()

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
