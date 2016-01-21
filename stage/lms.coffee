class LMS

  constructor: () ->
    @count=0

  launchTraining : (x=0, y=0) ->
    @trainingWindow = window.open "index.html?local=true&dev=true&episode=2", "_training#{@count++}", "top:#{y}, left=#{x}, location=no, status=no, toolbar=no, scrollbars=no, resizable=no, width=1024, height=768"

  refreshTraining : () ->
    if @isIE
      x = @trainingWindow.screenLeft
      y = @trainingWindow.screenTop
    else
      x = @trainingWindow.screenX
      y = @trainingWindow.screenY

    @trainingWindow.close()
    @launchTraining x, y



lms = new LMS()
lms.launchTraining()