LMSProxy       = require 'lms-proxy'
SettingsConfig = require 'settings-config'
WindowManager  = require 'window-manager'

class Master

  constructor: () ->
    @targetDomain = "http://twoway.gopagoda.io"
    settingsConfig = new SettingsConfig()
    @settings       = settingsConfig.getQueryVars()
    # @windowManager.launchTraining()
    # @lmsProxy.trainingWindow = @windowManager.trainingWindow
    # @lmsProxy.begin settings, ()=>
      # console.log @windowManager.trainingWindow
    @windowManager = new WindowManager @targetDomain, @begin
    @windowManager.launchTraining()

  begin : ()=>
    @lmsProxy = new LMSProxy @settings.isLocal, @windowManager.refreshTraining, @targetDomain, @windowManager.trainingWindow
    @lmsProxy.begin @settings

master = new Master()