module.exports = class Question

  constructor: (@$parent, @data) ->

  build : () ->
    @$node = $ jadeTemplate['slide-ux/components/quiz/question']( @data )
    @$parent.append @$node
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, @$node

  remove : () -> @$node.remove()

