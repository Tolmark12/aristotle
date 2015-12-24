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

    PubSub.subscribe 'movie.load-layer', (m, data)          => @addLayer data
    PubSub.subscribe 'movie.zoom',       (m, data)          => @zoom data
    PubSub.subscribe 'movie.layers.clear',(m, data)         => @clearLayer data
    PubSub.subscribe 'movie.layers.clear-all',(m, data)     => @clearAllLayers()
    PubSub.subscribe 'movie.layers.blur.below',(m, data)    => @blurAllLayersBelow data
    PubSub.subscribe 'movie.layers.unblur.all',(m, data)    => @unblurAllLAyers()
    PubSub.subscribe 'movie.layers.cache',(m, data)         => @cacheLayer data
    PubSub.subscribe 'movie.layers.uncache',(m, data)       => @uncacheLayer data
    PubSub.subscribe 'movie.layers.uncache-all',(m, data)   => @unCacheAllLayers()
    PubSub.subscribe 'movie.layers.cache-all',(m, data)     => @cacheAllLayers()
    PubSub.subscribe 'movie.layers.cache-all-but',(m, data) => @cacheAllBut data
    PubSub.subscribe 'movie.report', (m, data)              => @report()


  report : () ->
    layer.report() for layer in @layers

  reset : () ->
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
      console.log layer.depth
      if exceptions[layer.depth] != ""
        console.log layer
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
      if layerData.cache || layerData.ieCache
        layerData.jumpToEnd = true
      @addLayer layerData