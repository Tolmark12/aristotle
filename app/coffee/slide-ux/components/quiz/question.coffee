module.exports = class Question

  constructor: (@$parent, @data, @questionValue=120, @answerCallback) ->
    PubSub.publish 'meta.quiz.question.start', {id:@data.index+1}
    @rightGuesses = 0
    @wrongGuesses = 0
    @runningTotal = 0
    @setAnswerValues()

  build : () ->
    @$node = $ jadeTemplate['slide-ux/components/quiz/question']( @data )
    @$parent.prepend @$node
    @$questionTotal = $ "#question-total", @$node
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, @$node
    $(".answer-wrapper", @$node).on "click", @onAnswerClick

  onAnswerClick : (e) =>
    return if @complete
    $el = $(e.currentTarget)
    $el.addClass "flipped"
    $response    = $(".response", e.currentTarget)
    guessedRight = $response.hasClass 'right'
    PubSub.publish 'meta.quiz.question.answer', {id:@data.index+1, answer:$(".front .txt", $(e.currentTarget) ).text() }

    if guessedRight then @rightGuesses++ else @wrongGuesses++

    if @data.gimee
      @answeredGimee $el
    else
      @answeredNormal guessedRight, $el

    @answerCallback @complete

  answeredGimee : ($answer) ->
    @runningTotal = @questionValue
    @showAnswerPoints @questionValue, "right", $answer
    @setQuestionComplete()

  answeredNormal : (guessedRight, $answer) ->
    if guessedRight
      @runningTotal += @rightAnswerValue
      @showAnswerPoints @rightAnswerValue, "right", $answer
    else
      @runningTotal -= @wrongAnswerValue
      @showAnswerPoints @wrongAnswerValue, "wrong", $answer
    if @rightPossible == @rightGuesses
      @setQuestionComplete()


  setAnswerValues : () ->
    @countPossibleRightsAndWrongs()
    @rightAnswerValue = Math.round  @questionValue / @rightPossible
    # Don't divide by 0 :-)
    if @wrongPossible == 0
      @wrongAnswerValue = 0
    else
      @wrongAnswerValue = Math.round (@questionValue / 2) / @wrongPossible


  countPossibleRightsAndWrongs : () ->
    @wrongPossible = 0
    @rightPossible = 0
    for answer in @data.answers
      if answer.c
        @rightPossible++
      else
        @wrongPossible++

  setQuestionComplete : () ->
    @complete = true
    @$node.addClass "complete"
    PubSub.publish 'meta.quiz.question.finish', {id:@data.index+1, score:@pointsEarned() }

  getName       : () -> if @name? then @name else "Question #{@data.index+1}"
  getScore      : () -> "#{@pointsEarned()}/#{@questionValue}"
  pointsEarned  : () -> @questionValue - (@wrongAnswerValue * @wrongGuesses)
  isPerfect     : () -> @wrongGuesses == 0

  showAnswerPoints : (points, result, $answer) ->
    $node = $ jadeTemplate['slide-ux/components/quiz/points-float']( {points:points, result:result} )
    $answer.append $node
    $node.velocity {opacity:1, top:-35}, {duration:1000, easing:"easeinoutquint"}
    @$questionTotal.html @runningTotal

  destroy : () -> @$node.remove()
