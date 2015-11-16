Layer = require 'movie/Layer'

module.exports = class Movie

  constructor: (@$el) ->
    @$wrapper = $ '.wrapper', @$el
    @layers = []

    PubSub.subscribe 'movie.load-layer', (m, data)=> @addLayer data
    PubSub.subscribe 'movie.zoom',       (m, data)=>
      console.log "hmmmm"
      @zoom data.scale, data.x, data.y

  populate: (data)->
    if !data? then return
    for depthId, layerData of data.layers
      @addLayer layerData

    if data.zoom?
      console.log data.zoom
      @zoom data.zoom.scale, data.zoom.x, data.zoom.y

  zoom : (scale=1, x=0, y=0) ->
    @$el.css "transform-origin": "#{x}px #{y}px"
    @$el.css transform: "scale(#{scale})"


  addLayer : (layerData) ->
    depth = layerData.depth
    # If we are placing at a depth higher than the current
    # fill the space between with empty layers
    if depth > @layers.length
      for i in [@layers.length..depth]
        @layers[i] = new Layer @$wrapper, depth

    layer = @getOrCreateLayer depth
    layer.update layerData

  getOrCreateLayer : (depth) ->
    # Layer exists, return it:
    if @layers[depth]? then return @layers[depth]

    # Layer doesn't exist, create it:
    layer = new Layer @$wrapper, depth
    @layers[depth] = layer
    return layer