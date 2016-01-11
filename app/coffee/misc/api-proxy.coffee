module.exports = class APIproxy

  constructor: () ->
    PubSub.subscribe 'meta.chapter.start'        , (m, data)=> @startChapter data
    PubSub.subscribe 'meta.chapter.finish'       , (m, data)=> @finishChapter data
    PubSub.subscribe 'meta.choice.start'         , (m, data)=> @startChoice data
    PubSub.subscribe 'meta.choice.finish'        , (m, data)=> @finishChoice data
    PubSub.subscribe 'meta.duties.start'         , (m, data)=> @startDuties data
    PubSub.subscribe 'meta.duties.finish'        , (m, data)=> @finishDuties data
    PubSub.subscribe 'meta.activity'             , (m, data)=> @addActivity data
    PubSub.subscribe 'meta.quiz.start'           , (m, data)=> @startQuiz data
    PubSub.subscribe 'meta.quiz.finish'          , (m, data)=> @finishQuiz data
    PubSub.subscribe 'meta.quiz.quesiton.start'  , (m, data)=> @startQuizQuestion data
    PubSub.subscribe 'meta.quiz.quesiton.finish' , (m, data)=> @finishQuizQuestion data


  startChapter : (data)->
    @chapter = { start: @now(), choices:{}, name:"Episode #{aristotle.episodeNum} - #{data.title }", activities:[] }

  finishChapter : ()->
    @chapter.finish = @now()
    @metaData().chapters.push @chapter
    @save()

  startChoice : (data)->
    @chapter.choices[data.id] = { start: @now(), activities:[] }
  finishChoice : (data)->
    @chapter.choices[data.id].finish    = @now()
    @chapter.choices[data.id].selection = data.choice
    @chapter.choices[data.id].name      = data.id

  addActivity : (data) ->
    activity = { activity: data.activity, time: @now() }
    if data.id?
      @chapter.choices[data.id].activities.push activity
    else
      @chapter.activities.push activity

  startDuties : ()->
    @chapter.dutiesStartTime = @now()
  finishDuties : ()->
    @chapter.dutiesEndTime = @now()
    console.log @chapter


  startQuiz : ()->
    @chapter.quiz = { start: @now(), questions:{} }
  finishQuiz : ()->
    @chapter.quiz.finish = @now()

  startQuizQuestion : (data)->
    @chapter.quiz.questions[data.id] = { start: @now() }
  finishQuizQuestion : (data)->
    @chapter.quiz.questions[data.id].finish = @now()



  # ------------------------------------ Helpers

  now : () -> new Date().getTime()

  metaData : () ->
    @meta = aristotle.globals.getMetaData()
    if !meta?
      @meta = {chapters:[]}
    @meta

  save : () -> PubSub.publish 'savemeta', @meta

###

  LearningRecord {
    LearningContext {
      ModuleId       : ""
      ModuleAudience : ""
      SessionId      : ""
      StudentId      : ""
      StudentName    : ""
    }
    Chapters : [ CHAPTER ]
  }

  Chapter {
    ChapterName            : : ""
    LearningStartTimeUtc   : DATE
    LearningEndTimeUtc     : DATE
    DutyReviewStartTimeUtc : DATE
    DutyReviewEndTimeUtc   : DATE
    TestingStartTimeUtc    : DATE
    TestingEndTimeUtc      : DATE
    Activities             : [ACTIVITY]
    Choices                : [CHOICE]
    Scores                 : [SCORE]
  }

  Activity {
    ActivityName : ""
    EventTimeUtc : DATE
  }
  Choice {
    ChoiceName   : ""
    Selection    : ""
    StartTimeUtc : DATE
    EndTimeUtc   : DATE
    Activities   : [ACTIVITY]
  }
  Score {
    QuestionNumber : 1
    FinalScore     : 1
    StartTimeUtc   : DATE
    EndTimeUtc     : DATE
    Activities     : [ACTIVITY]
  }
###