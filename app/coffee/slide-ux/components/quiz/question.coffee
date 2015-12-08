module.exports = class Question

  constructor: (@$parent, @data, @questionValue=120, @answerCallback) ->
    @wrongGuesses = 0
    @countWrongAnswers()

  build : () ->
    @$node = $ jadeTemplate['slide-ux/components/quiz/question']( @data )
    @$parent.prepend @$node
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, @$node

    $(".answer-wrapper", @$node).on "click", @onAnswerClick

  onAnswerClick : (e)=>
    $(e.currentTarget).addClass "flipped"
    isCorrect = $(".response", e.currentTarget).hasClass 'right'
    if !isCorrect then @wrongGuesses++
    @answerCallback isCorrect

  countWrongAnswers : () ->
    @totalWrongAnswers = 0
    for answer in @data.answers
      @totalWrongAnswers++ if !answer.c

  isPerfect : () -> @wrongGuesses == 0

  getName : () ->if @name? then @name else "Quesiton #{@data.index+1}"

  getScore : () -> "#{@pointsEarned()}/#{@questionValue}"

  pointsEarned : () ->
    wrongGuessValue = (@questionValue/2) / @totalWrongAnswers
    @questionValue - (wrongGuessValue * @wrongGuesses)
    @questionValue - (wrongGuessValue * @wrongGuesses)

  destroy : () -> @$node.remove()
