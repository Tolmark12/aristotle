module.exports = class WindowManager

  constructor: () ->
    $(window).on 'beforeunload', () ->
      return "Closing this window will close your training, Stay on this page if you wish to continue your training.";
    @count=0

  launchTraining : (x=0, y=0) ->
    @trainingWindow = window.open "index.html", "_training#{@count++}", "top:#{y}, left=#{x}, location=no, status=no, toolbar=no, scrollbars=no, resizable=no, width=1024, height=768"

  refreshTraining : () =>
    if @isIE
      x = @trainingWindow.screenLeft
      y = @trainingWindow.screenTop
    else
      x = @trainingWindow.screenX
      y = @trainingWindow.screenY

    @trainingWindow.close()
    @launchTraining x, y

  onWindowClose : (e) ->
    console.log "???????"
    confirm "Closing this window will close your training, are you sure you want to do this?"


  # lms = new LMS()
  # lms.launchTraining()
