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

  createQuiz : ($el, data) ->
    questions = []
    for questionData in data.questions
      questions.push new Question $el, questionData
    @questions = new Sequence questions
    @showCurrentQuestion()

  showCurrentQuestion : () ->
    question = @questions.currentItem()
    question.build()
