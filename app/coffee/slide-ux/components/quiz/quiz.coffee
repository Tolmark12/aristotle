Component = require 'slide-ux/components/component'
Question  = require 'slide-ux/components/quiz/question'
Sequence  = require 'misc/sequence'

module.exports = class Quiz extends Component

  constructor: (@$el, @data) ->
    super @data
    PubSub.publish "chrome.hide"
    PubSub.publish "ctanlee.hide"

    # Load the quiz from external json
    @loadJson @data.source

  loadJson : (path) ->
    aristotle.getJson aristotle.getAssetPath(path), (data)=>
      @build data.config

  build: (data)->
    @setChoicePercentages()
    @$node = $ jadeTemplate['slide-ux/components/quiz/quiz']( data )
    @createQuiz $(".questions", @$node), data
    @$nextBtn = $ ".next-btn", @$node
    @$nextBtn.on "click", @onNextClick
    @hideNext()
    @superInit @$el, @$node, @data

  setChoicePercentages : () ->
    choices = []
    for choice in aristotle.globals.get("episode#{aristotle.episodeNum}_choices")
      choices.push choice.id

    apiProxy.getChoicePercentages choices, (results)=>
      if !results
        @decisionPercentages = false
      else
        # console.log results
        @decisionPercentages = []
        # For each category returned from the api
        for category in results
          # For each average within this category
          for selection in category.Breakdowns
            # loop throuh all of the user's choices and see if there is a match
            for userChoice in aristotle.globals.get("episode#{aristotle.episodeNum}_choices")
              if userChoice.choice == selection.Selection
                @decisionPercentages.push
                  popularPercentage : Math.round(selection.PercentOfTotal * 100)
                  choice            : selection.Selection
                  category          : category.ChoiceName

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
    obj.decisions       = @decisionPercentages
    obj

  splitArrayInHalf : (ar) ->
    len = Math.ceil(ar.length/2)
    [ar.slice(0,len), ar.slice(len)]