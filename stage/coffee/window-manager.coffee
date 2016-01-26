module.exports = class WindowManager

  constructor: () ->

  launchTraining : (x=0, y=0) ->
    @trainingWindow = window.open "index.html", "_training", "top:#{y}, left=#{x}, location=no, status=no, toolbar=no, scrollbars=no, resizable=no, width=1024, height=768"

  refreshTraining : () =>
    if @isIE
      x = @trainingWindow.screenLeft
      y = @trainingWindow.screenTop
    else
      x = @trainingWindow.screenX
      y = @trainingWindow.screenY

    @trainingWindow.close()
    @launchTraining x, y

