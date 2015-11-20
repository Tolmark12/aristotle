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
    if layerData.content == "clear"
      kind = "clear"
    else
      kind = layerData.content.split(".")[1]
    switch kind
      when "json"  then @addAnimation layerData
      when "svg"   then @addSvg layerData
      when "gif", "jpg", "jpeg","png"
                        @addImage layerData.content, layerData.repeat, layerData.position
      when "clear" then @empty()

  updateEffects : (fx) ->
    if fx.clear then @$layer.attr class:'layer'
    if fx.effects?
      for effect in fx.effects
        @$layer.addClass effect

  addAnimation : (layerData) ->
    @animation  = new SVGAnimation @$layer, "#{aristotle.episodeRoot}/animations/#{layerData.content}", layerData

  addSvg : (layerData) ->
    @$layer.load "#{aristotle.episodeRoot}/assets/#{layerData.content}"

  addImage : (file, repeat="no-repeat", position="left") ->
    @$layer.css background: "url(#{aristotle.episodeRoot}/assets/#{file}) #{repeat} #{position}"

  destroy : () ->
    @$layer.remove()

  empty : () -> @$layer.empty()
