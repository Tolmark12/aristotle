LMSProxy       = require 'lms-proxy'
SettingsConfig = require 'settings-config'
WindowManager  = require 'window-manager'
IframeCreator  = require 'iframe-creator'

class Master

  constructor: () ->
    iframeCreator   = new IframeCreator()
    @targetDomain   = iframeCreator.makeIframe $('#holder')
    settingsConfig  = new SettingsConfig()
    @settings       = settingsConfig.getQueryVars()
    @windowManager  = new WindowManager @targetDomain, @begin
    @windowManager.launchTraining()

  begin : ()=>
    @lmsProxy = new LMSProxy @settings, @windowManager.refreshTraining, @targetDomain, @windowManager.trainingWindow
    @lmsProxy.begin()

master = new Master()
