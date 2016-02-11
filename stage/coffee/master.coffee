LMSProxy       = require 'lms-proxy'
SettingsConfig = require 'settings-config'
WindowManager  = require 'window-manager'

class Master

  constructor: () ->
    @targetDomain   = "http://localhost:5654"
    # @targetDomain   = "http://twoway.gopagoda.io"
    # @targetDomain   = "https://cipv5web-t"

    settingsConfig  = new SettingsConfig()
    @settings       = settingsConfig.getQueryVars()
    @windowManager  = new WindowManager @targetDomain, @begin
    @windowManager.launchTraining()

  begin : ()=>
    @lmsProxy = new LMSProxy @settings, @windowManager.refreshTraining, @targetDomain, @windowManager.trainingWindow
    @lmsProxy.begin()

master = new Master()