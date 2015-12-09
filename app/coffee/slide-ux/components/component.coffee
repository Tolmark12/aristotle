module.exports = class Component

  constructor: ($el, @$node, data) ->
    $el.append @$node
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, @$node

  destroy : () ->
    @$node.remove()