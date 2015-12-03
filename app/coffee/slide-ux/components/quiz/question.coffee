module.exports = class Question

  constructor: (@$parent, @data, @answerCallback) ->

  build : () ->
    @$node = $ jadeTemplate['slide-ux/components/quiz/question']( @data )
    @$parent.prepend @$node
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, @$node

    $(".answer-wrapper", @$node).on "click", @onAnswerClick

  onAnswerClick : (e)=>
    $(e.currentTarget).addClass "flipped"
    $(".answer-wrapper", @$node).css({cursor:"default", "pointer-events": "none"}).off "click"
    isCorrect = $(".response", e.currentTarget).hasClass 'right'
    @answerCallback isCorrect

  destroy : () -> @$node.remove()

