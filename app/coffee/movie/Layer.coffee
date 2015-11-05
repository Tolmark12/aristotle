SVGAnimation = require 'movie/svg-animation'

module.exports = class Layer

  constructor: ($el, depth) ->
    @$layer = $ jadeTemplate['movie/layer']( {depth:depth} )
    $el.append @$layer

  populate : (layerData) ->
    fileExt = layerData.content.split(".")[1]
    switch fileExt
      when "json" then @addAnimation layerData
      when "svg"  then @addImage layerData

  addAnimation : (layerData) ->
    @animation  = new SVGAnimation @$layer, "#{Aristotle.episodeRoot}/animations/#{layerData.content}", layerData.loop
    @animation.play()

  addImage : (layerData) ->
    @$layer.load "#{Aristotle.episodeRoot}/animations/#{layerData.content}"

  empty : () ->
