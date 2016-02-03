LMSProxy       = require 'lms-proxy'
SettingsConfig = require 'settings-config'
WindowManager  = require 'window-manager'

class Master

  constructor: () ->
    @targetDomain   = "https://twoway.pagodabox.io"
    # @targetDomain   = "http://localhost:5654"
    settingsConfig  = new SettingsConfig()
    @settings       = settingsConfig.getQueryVars()
    @windowManager  = new WindowManager @targetDomain, @begin
    @windowManager.launchTraining()

  begin : ()=>
    @lmsProxy = new LMSProxy @settings, @windowManager.refreshTraining, @targetDomain, @windowManager.trainingWindow
    @lmsProxy.begin()

master = new Master()