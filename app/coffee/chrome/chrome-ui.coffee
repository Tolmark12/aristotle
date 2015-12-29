ProgressDisplay = require 'chrome/progress-display'

module.exports = class ChromeUI

  constructor: (@$el) ->
    # @build @$el
    token1  = PubSub.subscribe "chrome.hide",         (m, data)=> @hide()
    token2  = PubSub.subscribe "chrome.show",         (m, data)=> @show()
    token3  = PubSub.subscribe "chrome.showname",     (m, data)=> @showName()
    token4  = PubSub.subscribe "chrome.showepisodes", (m, data)=> @showIcons()
    token5  = PubSub.subscribe "chrome.hidename",     (m, data)=> @hideName()
    token6  = PubSub.subscribe "chrome.hideepisodes", (m, data)=> @hideIcons()
    token7  = PubSub.subscribe "callsign.selected",   (m, data)=> @updateCallsign()

    @tokens = [token1, token2, token3, token4, token5, token6, token7]

  build : () ->
    name = aristotle.lmsProxy.user.split ","
    @progressDisplay = new ProgressDisplay @$el
    try
      callSign = aristotle.globals.get 'callSign', false
    catch error
      callSign = "Deadeye"

    data    = {name:"#{name[1]} \"#{callSign}\" #{name[0]}", episode:"1"}
    @getRank data, "cyber-cadet"
    @$top   = $ jadeTemplate['chrome-ui/top']( data )
    @$el.append @$top
    @$name  = $ ".name-and-rank", @$top
    @$icons = $ ".episodes", @$top
    @$mode  = $ ".learn-mode", @$top

    shadowIconsInstance.svgReplaceWithString pxSvgIconString, @$el
    @hideMode()

  updateCallsign : () ->
    name = aristotle.lmsProxy.user.split ","
    $(".name", @$top).html "#{name[1]} \"#{aristotle.globals.get('callSign')}\" #{name[0]}"

  showName  : () -> @$name.css( {display:"flex", opacity:0}).velocity {opacity:1}, {duration:500}
  hideName  : () -> @$name.css  {display:"none"}
  showIcons : () -> @$icons.css({display:"flex", opacity:0}).velocity {opacity:1}, {duration:500}
  hideIcons : () -> @$icons.css {display:"none"}

  hide     : () -> @$el.addClass "hidden"
  show     : () -> @$el.removeClass "hidden"
  hideMode : () -> @$mode.addClass "hidden"
  showMode : () -> @$mode.removeClass "hidden"

  getRank : (data, episode) ->
    switch episode
      when 'recruits'
        data.rank  = "recruit"
        data.badge = "rank-badge-recruit"
      when 'cadet'
        data.rank  = "cadet"
        data.badge = "rank-badge-cadet"
      when 'cadet-first-class'
        data.rank  = "Cadet First Class"
        data.badge = "rank-badge-cadet-first-class"
      when 'technical-cadet'
        data.rank  = "Technical Cadet"
        data.badge = "rank-badge-technical-cadet"
      when 'cyber-cadet'
        data.rank  = "Cyber Cadet"
        data.badge = "rank-badge-cyber-cadet"

  destroy : () ->
    @progressDisplay.destroy()
    for token in @tokens
      PubSub.unsubscribe token