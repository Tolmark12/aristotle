Layer = require 'movie/Layer'

module.exports = class Movie

  constructor: (@$el) ->
    @layers = []

  populate: (data)->
    for depthId, layerData of data.layers
      @addLayer layerData

    if data.position?
      @position data.position

  position : (position) ->
    if position.center?
      @$el.css "transform-origin":"(#{position.center[0]} #{position.center[1]})"

    if position.scale?
      @$el.css transform:"scale(#{position.scale})"


  addLayer : (layerData) ->
    depth = layerData.depth
    # If we are placing at a depth higher than the current
    # fill the space between with empty layers
    if depth > @layers.length
      for i in [@layers.length..depth]
        @layers[i] = new Layer @$el, depth

    layer = @getOrCreateLayer depth
    layer.update layerData

  getOrCreateLayer : (depth) ->
    # Layer exists, return it:
    if @layers[depth]? then return @layers[depth]

    # Layer doesn't exist, create it:
    layer = new Layer @$el, depth
    @layers[depth] = layer
    return layer