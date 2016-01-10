module.exports = class SvgCartographer

  constructor: () ->
    PubSub.subscribe 'scale.update',     (m, data)=> @scale = data;
    PubSub.subscribe 'transform.update', (m, data)=> @transformOrigin = data

    aristotle.cartographer = @
    aristotle.getLocalPos  = @getLocalPos
    aristotle.getGlobalPos = @getGlobalPos

  getLocalPos : (itemId) =>
    bBox = $("##{itemId}")[0].getBBox()
    return { x: bBox.x, y: bBox.y, w: bBox.width, h: bBox.height }

  getGlobalPos : (itemId) =>
    bBox  = $("##{itemId}")[0].getBBox()
    xtraX = @transformOrigin.x * (@scale-1) - @transformOrigin.x
    x     = (bBox.x * @scale) - (@transformOrigin.x + xtraX)
    xtraY = @transformOrigin.y * (@scale-1) - @transformOrigin.y
    y     = (bBox.y * @scale) - (@transformOrigin.y + xtraY)

    return { x: x, y: y, w: bBox.width, h: bBox.height }