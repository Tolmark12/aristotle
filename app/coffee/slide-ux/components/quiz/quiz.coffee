Component = require 'slide-ux/components/component'
Question  = require 'slide-ux/components/quiz/question'
Sequence  = require 'misc/sequence'

module.exports = class Quiz extends Component

  constructor: ($el, data) ->
    PubSub.publish "chrome.hide"
    PubSub.publish "ctanlee.hide"
    @$node = $ jadeTemplate['slide-ux/components/quiz/quiz']( data )
    super $el, @$node
    @createQuiz $(".questions", @$node), data
    @$nextBtn = $ ".next-btn", @$node
    @$nextBtn.on "click", @onNextClick
    @hideNext()

  createQuiz : ($el, data) ->
    questions = []
    for questionData, i in data.questions
      questionData.index = i
      questions.push new Question $el, questionData, @onQuestionAnswered
    @questions = new Sequence questions
    @showCurrentQuestion()

  showCurrentQuestion : () ->
    @currentQuestion = @questions.currentItem()
    @currentQuestion.build()

  onQuestionAnswered : (gotItRight) =>
    if gotItRight then @showNext()

  onNextClick : () =>
    @hideNext()
    @currentQuestion.destroy()
    if @questions.isAtLastItem()
      PubSub.publish 'slides.next-slide',
    else
      @questions.next()
      @showCurrentQuestion()

  showNext : () -> @$nextBtn.removeClass "hidden"
  hideNext : () -> @$nextBtn.addClass "hidden"

