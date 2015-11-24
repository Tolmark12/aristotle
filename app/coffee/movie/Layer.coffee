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
    if @layerData.content?
      @updateContent( @layerData )
    if @layerData.fx?
      @updateEffects( @layerData.fx )

  updateContent : (layerData) ->
    if @currentOnionLayer?
      oldOnionLayer = @currentOnionLayer
      setTimeout ()=>
        oldOnionLayer.velocity {opacity:0}, {duration:200, complete:()=> oldOnionLayer.remove(); console.log "complete.." }
      ,
        200

    @currentOnionLayer = @addOnionLayer()
    if layerData.content == "clear"
      kind = "clear"
    else
      kind = layerData.content.split(".")[1]
    switch kind
      when "json"  then @addAnimation( @currentOnionLayer, layerData )
      when "svg"   then @addSvg( @currentOnionLayer, layerData )
      when "gif", "jpg", "jpeg","png"
                        @addImage( @currentOnionLayer, layerData.content, layerData.repeat, layerData.position )
      when "clear" then @empty()

  updateEffects : (fx) ->
    if fx.clear then @$layer.attr class:'layer'
    if fx.effects?
      for effect in fx.effects
        @$layer.addClass effect

  addAnimation : ($holder, layerData) ->
    @animation  = new SVGAnimation $holder, "#{aristotle.episodeRoot}/animations/#{layerData.content}", layerData

  addSvg : ($holder, layerData) ->
    $holder.load "#{aristotle.episodeRoot}/assets/#{layerData.content}"

  addImage : ($holder, file, repeat="no-repeat", position="left") ->
    $holder.css background: "url(#{aristotle.episodeRoot}/assets/#{file}) #{repeat} #{position}"

  destroy : () ->
    @$layer.remove()

  addOnionLayer : () ->
    $onionLayer = $ jadeTemplate['movie/onion-layer']( {} )
    @$layer.prepend $onionLayer
    $onionLayer


  empty : () -> @$layer.empty()
