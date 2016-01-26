module.exports = class Logger

  constructor: ($el, @isDevMode) ->
    @messages = ""
    # PubSub.subscribe 'logger.print', (m, data)=> @print data.str, data.clearPrevious

    $node = $ jadeTemplate['misc/logger']( {} )
    $el.append $node

    @$logNotifyer   = $ '.message', $node
    @$errorNotifyer = $ '.error', $node

    @$logNotifyer.on 'click',   ()=> @hideLogNotifier()
    @$errorNotifyer.on 'click', ()=> @hideErrorNotifier()

    aristotle.log   = @log
    aristotle.throw = @throw

    @hideLogNotifier()
    @hideErrorNotifier()

    # If we're not in dev mode, hide all this logging
    if !@isDevMode then $node.css display: "none"

  print : (str, clearPrevious) ->
    @messages += str +  "</br>"
    @showLogNotifier()
    if clearPrevious
      @$logNotifyer.html str
    else
      @$logNotifyer.html @messages


  log   : (msg) =>
    @showLogNotifier()
    console.log "%c#{msg}", "color:#0b1524; background:#b0d9e6"

    if !@isDevMode
      appInsights.trackException new Error("General Log : #{msg}")

  throw : (msg, showTrace=false) =>
    @showErrorNotifier()
    if showTrace
      console.error "#{msg}"
    else
      console.log "%c#{msg}", "color:#3d0000; background:#e6b0c0"

    if !@isDevMode
      if typeof msg == "object"
        appInsights.trackException msg, "Exception Log"
      else
        appInsights.trackException new Error("Exception Log : #{msg}")


  hideLogNotifier   : () -> @$logNotifyer.css    display :"none"
  hideErrorNotifier : () -> @$errorNotifyer.css  display :"none"
  showLogNotifier   : () -> @$logNotifyer.css    display :"block"
  showErrorNotifier : () -> @$errorNotifyer.css  display :"block"
