LMSProxy       = require 'lms-proxy'
SettingsConfig = require 'settings-config'
WindowManager  = require 'window-manager'

class Master

  constructor: () ->
    @begin()

  begin : () ->
    settingsConfig = new SettingsConfig()
    settings       = settingsConfig.getQueryVars()
    @windowManager = new WindowManager()
    @lmsProxy      = new LMSProxy settings.isLocal, @windowManager.refreshTraining
    @lmsProxy.begin settings, ()=>
      @windowManager.launchTraining 3024, 3000

master = new Master()