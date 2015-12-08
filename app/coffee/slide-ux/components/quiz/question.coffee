module.exports = class Question

  constructor: (@$parent, @data, @answerCallback) ->

  build : () ->
    @$node = $ jadeTemplate['slide-ux/components/quiz/question']( @data )
    @$parent.prepend @$node
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, @$node

    $(".answer-wrapper", @$node).on "click", @onAnswerClick

  onAnswerClick : (e)=>
    $(e.currentTarget).addClass "flipped"
    isCorrect = $(".response", e.currentTarget).hasClass 'right'
    @answerCallback isCorrect

  destroy : () -> @$node.remove()

