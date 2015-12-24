ProgressDisplay = require 'chrome/progress-display'

module.exports = class ChromeUI

  constructor: (@$el) ->
    @build @$el
    @hideMode()
    PubSub.subscribe "chrome.hide",         (m, data)=> @hide()
    PubSub.subscribe "chrome.show",         (m, data)=> @show()
    PubSub.subscribe "chrome.showname",     (m, data)=> @showName()
    PubSub.subscribe "chrome.showepisodes", (m, data)=> @showIcons()
    PubSub.subscribe "chrome.hidename",     (m, data)=> @hideName()
    PubSub.subscribe "chrome.hideepisodes", (m, data)=> @hideIcons()

  build : (@$el) ->
    progressDisplay = new ProgressDisplay @$el

    data    = {name:"John \"Deadeye\" Nimbus", episode:"1"}
    @getRank data, "cyber-cadet"
    $top    = $ jadeTemplate['chrome-ui/top']( data )
    @$el.append $top
    @$name  = $ ".name-and-rank", $top
    @$icons = $ ".episodes", $top
    @$mode  = $ ".learn-mode", $top
    $progress = $ jadeTemplate['chrome-ui/progress']( {} )
    @$el.append $progress

    shadowIconsInstance.svgReplaceWithString pxSvgIconString, @$el



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




