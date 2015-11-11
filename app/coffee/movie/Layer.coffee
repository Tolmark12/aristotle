SVGAnimation = require 'movie/svg-animation'

module.exports = class Layer

  constructor: ($el, depth) ->
    @$layer = $ jadeTemplate['movie/layer']( {depth:depth} )
    $el.append @$layer


  update : (layerData) ->
    if layerData.content?
      @updateContent layerData
    if layerData.fx?
      @updateEffects layerData.fx

  updateContent : (layerData) ->
    @empty()
    fileExt = layerData.content.split(".")[1]
    switch fileExt
      when "json" then @addAnimation layerData
      when "svg"  then @addImage layerData

  updateEffects : (fx) ->
    if fx.clear then @$layer.attr class:'layer'
    if fx.effects?
      for effect in fx.effects
        @$layer.addClass effect

  addAnimation : (layerData) ->
    @animation  = new SVGAnimation @$layer, "#{aristotle.episodeRoot}/animations/#{layerData.content}", layerData.loop
    @animation.play()

  addImage : (layerData) ->
    @$layer.load "#{aristotle.episodeRoot}/animations/#{layerData.content}"

  empty : () ->
