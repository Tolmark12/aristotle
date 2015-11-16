module.exports = class Component

  constructor: ($el, @$node) ->
    $el.append @$node
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, @$node

  destroy : () ->
    @$node.remove()