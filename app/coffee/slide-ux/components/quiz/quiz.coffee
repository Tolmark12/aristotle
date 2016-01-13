Component = require 'slide-ux/components/component'
Question  = require 'slide-ux/components/quiz/question'
Sequence  = require 'misc/sequence'

module.exports = class Quiz extends Component

  constructor: (@$el, @data) ->
    super @data
    PubSub.publish "chrome.hide"
    PubSub.publish "ctanlee.hide"
    @loadJson @data.source

  loadJson : (path) ->
    aristotle.getJson aristotle.getAssetPath(path), (data)=>
      @build data.config

  build: (data)->
    @$node = $ jadeTemplate['slide-ux/components/quiz/quiz']( data )
    @createQuiz $(".questions", @$node), data
    @$nextBtn = $ ".next-btn", @$node
    @$nextBtn.on "click", @onNextClick
    @hideNext()
    @superInit @$el, @$node, @data


   #######  ##     ## #### ########
  ##     ## ##     ##  ##       ##
  ##     ## ##     ##  ##      ##
  ##     ## ##     ##  ##     ##
  ##  ## ## ##     ##  ##    ##
  ##    ##  ##     ##  ##   ##
   ##### ##  #######  #### ########

  createQuiz : ($el, data) ->
    PubSub.publish 'meta.quiz.start'
    questions = []
    questionValue = data["question-value"]
    for questionData, i in data.questions
      questionData.index = i
      value = if questionData.value? then questionData.value else questionValue
      console.log value
      questions.push new Question $el, questionData, value, @onQuestionAnswered
    @questions = new Sequence questions
    @showCurrentQuestion()

  showCurrentQuestion : () ->
    @currentQuestion = @questions.currentItem()
    @currentQuestion.build()

  onQuestionAnswered : (gotItRight) => if gotItRight then @showNext()

  onNextClick : () =>
    @hideNext()
    @currentQuestion.destroy()
    if @questions.isAtLastItem()
      @showResults()
    else
      @questions.next()
      @showCurrentQuestion()

  showNext : () -> @$nextBtn.removeClass "hidden"
  hideNext : () -> @$nextBtn.addClass "hidden"
  reset    : () ->
    @$node.remove()
    @build @data
    @$el.append @$node
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, @$node


  ########  ########  ######  ##     ## ##       ########  ######
  ##     ## ##       ##    ## ##     ## ##          ##    ##    ##
  ##     ## ##       ##       ##     ## ##          ##    ##
  ########  ######    ######  ##     ## ##          ##     ######
  ##   ##   ##             ## ##     ## ##          ##          ##
  ##    ##  ##       ##    ## ##     ## ##          ##    ##    ##
  ##     ## ########  ######   #######  ########    ##     ######

  showResults : () ->
    PubSub.publish 'meta.quiz.finish'
    $('body').addClass 'body-quiz-results'
    @$node.remove()
    data = @getResults()
    @$node = $ jadeTemplate['slide-ux/components/quiz/quiz-results']( @getResults() )
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, @$node
    $("#continue", @$node).on "click", ()=>
      $('body').removeClass 'body-quiz-results'
      PubSub.publish 'slides.next-slide'
    @$el.append @$node

  getResults : () ->
    obj                 = {}
    obj.episodeNumber   = 2
    totalPointsPossible = 0
    totalPointsEarned   = 0

    answers = []
    for question in @questions.items
      totalPointsPossible += question.questionValue
      totalPointsEarned   += question.pointsEarned()
      answers.push
        name: question.getName()
        score: question.getScore()
        isPerfect: question.isPerfect()

    [obj.answers1, obj.answers2] = @splitArrayInHalf answers
    obj.score           = "#{totalPointsEarned} / #{totalPointsPossible}"
    obj.scorePercentage = (totalPointsEarned / totalPointsPossible)*100
    obj.decisions = [
      {popularPercentage: 49, choice: "Cool building", category: "Physical Access Control System"}
      {popularPercentage: 53, choice: "Dog House", category: "Pet Lodging"}
      {popularPercentage: 23, choice: "Hospital", category: "Public Service Building"}
    ]
    obj

  splitArrayInHalf : (ar) ->
    len = Math.ceil(ar.length/2)
    [ar.slice(0,len), ar.slice(len)]