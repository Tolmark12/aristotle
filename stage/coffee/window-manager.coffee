module.exports = class WindowManager

  constructor: (@targetDomain, @onTrainingLoadedCb) ->

  launchTraining : (x=0, y=0) ->
    @trainingWindow  = document.getElementById('iframe').contentWindow
    @onTrainingLoadedCb()

  refreshTraining : (cb) =>
    document.getElementById('iframe').src = document.getElementById('iframe').src
    cb()

