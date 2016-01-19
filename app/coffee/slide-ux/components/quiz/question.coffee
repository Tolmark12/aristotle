module.exports = class Question

  constructor: (@$parent, @data, @questionValue=120, @answerCallback) ->
    PubSub.publish 'meta.quiz.question.start', {id:@data.index+1}
    @totalPoints  = 0
    @wrongGuesses = 0
    @rightGuesses = 0
    @countRightAndWrongAnswers()

  build : () ->
    @$node = $ jadeTemplate['slide-ux/components/quiz/question']( @data )
    @$parent.prepend @$node
    @$questionTotal = $ "#question-total", @$node
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, @$node
    $(".answer-wrapper", @$node).on "click", @onAnswerClick

  onAnswerClick : (e)=>
    return if @complete # don't allow any more clicks if they've already guessed all the right answers
    $el = $(e.currentTarget)
    $el.addClass "flipped"
    $response     = $(".response", e.currentTarget)
    guessedRight = $response.hasClass 'right'
    PubSub.publish 'meta.quiz.question.answer', {id:@data.index+1, answer:$(".front .txt", $(e.currentTarget) ).text() }

    if !guessedRight
      @wrongGuesses++
    else
      @rightGuesses++

    if @data.gimee
      @complete = true
      PubSub.publish 'meta.quiz.question.finish', {id:@data.index+1, score:@questionValue }
    else if @rightGuesses == @totalRightAnswers
      @complete = true
      PubSub.publish 'meta.quiz.question.finish', {id:@data.index+1, score:@pointsEarned() }

    if @complete
      @answerCallback true
    else
      @answerCallback @rightGuesses == @totalRightAnswers
    @clickResults $el, guessedRight

    @$questionTotal.html @totalPoints


  clickResults : ($el, guessedRight) ->
    if guessedRight
      result = 'right'
      wrongGuessValue = (@questionValue/2) / @totalWrongAnswers
      points = (@questionValue - (wrongGuessValue * @wrongGuesses)) / @totalRightAnswers
      @totalPoints = @pointsEarned()

    else
      result = 'wrong'
      points = (@questionValue/2) / @totalWrongAnswers
      @totalPoints -= points

    $node = $ jadeTemplate['slide-ux/components/quiz/points-float']( {points:points, result:result} )
    $el.append $node
    $node.velocity {opacity:1, top:-35}, {duration:1000, easing:"easeinoutquint"}

  countRightAndWrongAnswers : () ->
    @totalWrongAnswers = 0
    @totalRightAnswers = 0
    for answer in @data.answers
      if answer.c
        @totalRightAnswers++
      else
        @totalWrongAnswers++

  isPerfect : () -> @wrongGuesses == 0

  getName : () ->if @name? then @name else "Question #{@data.index+1}"

  getScore : () -> "#{@pointsEarned()}/#{@questionValue}"

  pointsEarned : () ->
    wrongGuessValue = (@questionValue/2) / @totalWrongAnswers
    @questionValue - (wrongGuessValue * @wrongGuesses)

  destroy : () -> @$node.remove()
