DynamicAssets = require 'movie/dynamic-assets'
Layer         = require 'movie/layer'
Highlighter   = require 'movie/highlighter'

module.exports = class Movie

  constructor: (@$el) ->
    aristotle.movie  = @
    @$wrapper        = $ '.wrapper', @$el
    @layers          = []
    @dynamicAssets   = new DynamicAssets $('.dynamics', @$el)
    @highlighter     = new Highlighter @$wrapper, @dynamicAssets
    @scale           = 1
    @transformOrigin = {x:0, y:0}

    token1  = PubSub.subscribe 'movie.load-layer', (m, data)          => @addLayer data
    token2  = PubSub.subscribe 'movie.zoom',       (m, data)          => @zoom data
    token3  = PubSub.subscribe 'movie.layers.clear',(m, data)         => @clearLayer data
    token4  = PubSub.subscribe 'movie.layers.clear-all',(m, data)     => @clearAllLayers()
    token5  = PubSub.subscribe 'movie.layers.blur.below',(m, data)    => @blurAllLayersBelow data
    token6  = PubSub.subscribe 'movie.layers.unblur.all',(m, data)    => @unblurAllLAyers()
    token7  = PubSub.subscribe 'movie.layers.cache',(m, data)         => @cacheLayer data
    token8  = PubSub.subscribe 'movie.layers.uncache',(m, data)       => @uncacheLayer data
    token9  = PubSub.subscribe 'movie.layers.uncache-all',(m, data)   => @unCacheAllLayers()
    token10 = PubSub.subscribe 'movie.layers.cache-all',(m, data)     => @cacheAllLayers()
    token11 = PubSub.subscribe 'movie.layers.cache-all-but',(m, data) => @cacheAllBut data
    token12 = PubSub.subscribe 'movie.report', (m, data)              => @report()
    token13 = PubSub.subscribe 'movie.rehydrate-layers', (m, data)    => @rehydrateLayerState data
    @tokens = [token1, token2, token3, token4, token5, token6, token7, token8, token9, token10, token11, token12, token13 ]

  report : () ->
    layer.report() for layer in @layers

  reset : () ->
    @zoom {scale:1}
    layer.destroy() for layer in @layers
    @layers = []

  populate: (data)->
    if !data? then return
    for depthId, layerData of data.layers
      @addLayer layerData

    if data.zoom?
      @zoom data.zoom

  zoom : (data) ->
    # return
    # return if aristotle.isIE
    if data.id?
      $item = $("##{data.id}")
      if $item.length == 0 then aristotle.throw "Tried to zoom to an item with the id `#{data.id}`, but no items with that id were found." ;  return
      pos = @getLocalPos data.id
      @zoomTo data.scale, pos.x, pos.y
    else
      @zoomTo data.scale, data.x, data.y

  zoomTo : (@scale=1, x=0, y=0) ->
    @transformOrigin = {x:x, y:y}
    # Rounding for internet explorer, if decimal transform origin doesn't work!
    @$el.css "transform-origin": "#{Math.round(x)}px #{Math.round(y)}px"
    @$el.css transform: "scale(#{@scale})"

  clearLayer : (depth) -> if @layers[depth]? then @layers[depth].empty()
  clearAllLayers : ()  -> layer.empty() for layer in @layers

  addLayer : (layerData) ->
    if !layerData?       then aristotle.throw "Tried to create a layer, but didn't specify any layer data", true ; return
    if !layerData.depth? then aristotle.throw "Tried to create a layer with no depth specified", true ; return

    depth = layerData.depth
    # If we are placing at a depth higher than the current
    # fill the space between with empty layers
    if depth > @layers.length
      for i in [@layers.length..depth]
        @layers[i] = new Layer @$wrapper, i

    layer = @getOrCreateLayer depth
    layer.update layerData

  getOrCreateLayer : (depth) ->
    # Layer exists, return it:
    if @layers[depth]? then return @layers[depth]

    # Layer doesn't exist, create it:
    layer = new Layer @$wrapper, depth
    @layers[depth] = layer
    return layer

  cacheAllBut     : (data) ->
    exceptions = {}
    if Array.isArray(data)
      exceptions[exception] = "" for exception in data
    else
      exceptions[data] = ""

    for layer in @layers
      if exceptions[layer.depth] != ""
        layer.cache()

  cacheAllLayers   : () -> layer.cache()   for layer in @layers
  unCacheAllLayers : () -> layer.uncache() for layer in @layers
  cacheLayer       : (depth) -> @layers[depth].cache()
  uncacheLayer     : (depth) -> @layers[depth].uncache()

  blurAllLayersBelow : (layerDepth) ->
    for i in [0..layerDepth-1]
      @layers[i].addFilter "blueBlur"

  unblurAllLAyers : () ->
    for layer in @layers
      layer.removeFilters()

  getGlobalPos : (itemId)->
    bBox = $("##{itemId}")[0].getBBox()

    xtraX = @transformOrigin.x * (@scale-1) - @transformOrigin.x
    x = (bBox.x * @scale) - (@transformOrigin.x + xtraX)

    xtraY = @transformOrigin.y * (@scale-1) - @transformOrigin.y
    y = (bBox.y * @scale) - (@transformOrigin.y + xtraY)

    # console.log "X :::::::"
    # console.log "bbox.x           : #{bBox.x}"
    # console.log "scale            : #{@scale}"
    # console.log "transform origin : #{@transformOrigin.x}"
    # console.log "target           : #{x}"
    # console.log "xtra x           : #{xtraX}"
    # console.log "xtra y           : #{xtraY}"
    obj =
      # x: @transformOrigin.x - (bBox.x * @scale)
      # y: @transformOrigin.y - (bBox.y * @scale)
      x: x
      y: y
      w: bBox.width
      h: bBox.height

  getLocalPos  : (itemId)->
    bBox = $("##{itemId}")[0].getBBox()
    obj =
      x: bBox.x
      y: bBox.y
      w: bBox.width # / @scale
      h: bBox.height# / @scale

  dehydrateLayerState : () ->
    layers = []
    for layer in @layers
      layers.push layer.pristineLayerData
    layers

  rehydrateLayerState : (layers) ->
    @reset()
    for layerData in layers
      if layerData?
        # if layerData.cache || layerData.ieCache
        if !layerData.loop
          layerData.jumpToEnd = true
        @addLayer layerData

  destroy : () ->
    @reset()
    for token in @tokens
      PubSub.unsubscribe token
