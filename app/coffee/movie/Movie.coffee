Layer = require 'movie/Layer'

module.exports = class Movie

  constructor: (@$el) ->
    @layers = []

  populate: (data)->
    for layerData in data.layers
      @addLayer layerData

  addLayer : (layerData) ->
    depth = layerData.depth
    # If we are placing at a depth higher than the current
    # fill the space between with empty layers
    if depth > @layers.length
      for i in [@layers.length..depth]
        @layers[i] = new Layer @$el, depth

    layer = @getOrCreateLayer depth
    layer.populate layerData

  getOrCreateLayer : (depth) ->
    # Layer exists, empty and return it:
    if @layers[depth]?
      @layers[depth].empty()
      return @layers[depth]

    # Layer doesn't exist, create it:
    layer = new Layer @$el, depth
    @layers[depth] = layer
    return layer