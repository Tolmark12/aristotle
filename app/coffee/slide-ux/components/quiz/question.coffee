module.exports = class Question

  constructor: (@$parent, @data, @questionValue=120, @answerCallback) ->
    PubSub.publish 'meta.quiz.question.start', {id:@data.index+1}
    @wrongGuesses = 0
    @countWrongAnswers()

  build : () ->
    @$node = $ jadeTemplate['slide-ux/components/quiz/question']( @data )
    @$parent.prepend @$node
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, @$node
    $(".answer-wrapper", @$node).on "click", @onAnswerClick

  onAnswerClick : (e)=>
    return if @guessedRight # don't allow any more clicks if they've already guessed right
    $el = $(e.currentTarget)
    $el.addClass "flipped"
    $response     = $(".response", e.currentTarget)
    @guessedRight = $response.hasClass 'right'
    PubSub.publish 'meta.quiz.question.answer', {id:@data.index+1, answer:$(".front .txt", $(e.currentTarget) ).text() }

    if !@guessedRight
      @wrongGuesses++
    else
      PubSub.publish 'meta.quiz.question.finish', {id:@data.index+1, score:@pointsEarned() }
    @answerCallback @guessedRight
    @clickResults $el, @guessedRight


  clickResults : ($el, guessedRight) ->
    if guessedRight
      result = 'right'
      points = @pointsEarned()
    else
      result = 'wrong'
      points = (@questionValue/2) / @totalWrongAnswers

    $node = $ jadeTemplate['slide-ux/components/quiz/points-float']( {points:points, result:result} )
    $el.append $node
    $node.velocity {opacity:1, top:-35}, {duration:1000, easing:"easeinoutquint"}

  countWrongAnswers : () ->
    @totalWrongAnswers = 0
    for answer in @data.answers
      @totalWrongAnswers++ if !answer.c

  isPerfect : () -> @wrongGuesses == 0

  getName : () ->if @name? then @name else " #{@data.index+1}"

  getScore : () -> "#{@pointsEarned()}/#{@questionValue}"

  pointsEarned : () ->
    wrongGuessValue = (@questionValue/2) / @totalWrongAnswers
    @questionValue - (wrongGuessValue * @wrongGuesses)

  destroy : () -> @$node.remove()
