module.exports = class APIproxy

  constructor: () ->
    window.apiProxy = @
    PubSub.subscribe 'meta.chapter.start'        , (m, data)=> @startChapter data
    PubSub.subscribe 'meta.chapter.finish'       , (m, data)=> @finishChapter data
    PubSub.subscribe 'meta.choice.start'         , (m, data)=> @startChoice data
    PubSub.subscribe 'meta.choice.finish'        , (m, data)=> @finishChoice data
    PubSub.subscribe 'meta.duties.start'         , (m, data)=> @startDuties data
    PubSub.subscribe 'meta.duties.finish'        , (m, data)=> @finishDuties data
    PubSub.subscribe 'meta.activity'             , (m, data)=> @addActivity data
    PubSub.subscribe 'meta.quiz.start'           , (m, data)=> @startQuiz data
    PubSub.subscribe 'meta.quiz.finish'          , (m, data)=> @finishQuiz data
    PubSub.subscribe 'meta.quiz.question.start'  , (m, data)=> @startQuizQuestion data
    PubSub.subscribe 'meta.quiz.question.answer' , (m, data)=> @addQuesitonActivity data
    PubSub.subscribe 'meta.quiz.question.finish' , (m, data)=> @finishQuizQuestion data

  startChapter : (data)->
    @chapter =
      EpisodeTitle         : "Episode #{aristotle.episodeNum}"
      LearningStartTimeUtc : @now()
      picks                : {}
      Choices              : []
      ChapterName          : data.title
      Activities           : []

  finishChapter : ()->
    @submitData()

  startChoice : (data)->
    @chapter.picks[data.id] = { StartTimeUtc: @now(), Activities:[] }
  finishChoice : (data)->
    @chapter.picks[data.id].EndTimeUtc  = @now()
    @chapter.picks[data.id].Selection   = data.choice
    @chapter.picks[data.id].ChoiceName  = data.id
    @chapter.Choices.push @chapter.picks[data.id]

  addActivity : (data) ->
    console.log data
    activity = { ActivityName: data.activity, EventTimeUtc: @now() }
    if data.id?
      @chapter.picks[data.id].Activities.push activity
    else
      @chapter.Activities.push activity

  startDuties : ()->
    @chapter.LearningEndTimeUtc     = @now()
    @chapter.DutyReviewStartTimeUtc = @now()
  finishDuties : ()->
    @chapter.DutyReviewEndTimeUtc = @now()

  startQuiz : ()->
    @chapter.quiz = { start: @now(), questions:{}, Scores:[] }
  finishQuiz : ()->
    @chapter.quiz.finish = @now()

  startQuizQuestion : (data)->
    @chapter.quiz.questions[data.id] = { StartTimeUtc: @now(), QuestionNumber:data.id, Activities:[] }
  addQuesitonActivity : (data) ->
    @chapter.quiz.questions[data.id].Activities.push { ActivityName: data.answer, EventTimeUtc: @now() }
  finishQuizQuestion : (data)->
    @chapter.quiz.questions[data.id].EndTimeUtc = @now()
    @chapter.quiz.questions[data.id].FinalScore = data.score
    @chapter.quiz.Scores.push @chapter.quiz.questions[data.id]

  submitData : () ->
    chapterData =
      EpisodeTitle                    : @chapter.EpisodeTitle
      ChapterName                     : @chapter.ChapterName
      LearningStartTimeUtc            : @chapter.LearningStartTimeUtc
      LearningEndTimeUtc              : @chapter.LearningEndTimeUtc
      DutyReviewStartTimeUtc          : @chapter.DutyReviewStartTimeUtc
      DutyReviewEndTimeUtc            : @chapter.DutyReviewEndTimeUtc

    if @chapter.Activities.length > 0
      chapterData.Activities          = @chapter.Activities
    if @chapter.Choices.length > 0
      chapterData.Choices             = @chapter.Choices
    if @chapter.quiz?
      chapterData.Scores              = @chapter.quiz.Scores
      chapterData.TestingStartTimeUtc = @chapter.quiz.start
      chapterData.TestingEndTimeUtc   = @chapter.quiz.finish

    data = {
      LearningContext:{
        ModuleId       : "MetaMythic.CipDefender.v1"
        ModuleAudience : "fake-module-audience"
        SessionId      : "fake-session-id"
        StudentId      : aristotle.lmsProxy.userId
        StudentName    : aristotle.lmsProxy.user
      }
      Chapters: [ chapterData ]
    }

    console.log data
    jsonData = JSON.stringify data



  # ------------------------------------ Helpers

  now : () -> new Date().getTime()

  metaData : () ->
    @meta = aristotle.globals.getMetaData()
    if !meta?
      @meta = {chapters:[]}
    @meta


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
    EpisodeTitle           : ""
    ChapterName            : ""
    LearningStartTimeUtc   : DATE  - Start of the chapter -> duties start
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