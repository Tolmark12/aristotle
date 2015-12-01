module.exports = class ChromeUI

  constructor: (@$el) ->
    @build @$el
    PubSub.subscribe "chrome.hide", (m, data)=> @hide()
    PubSub.subscribe "chrome.show", (m, data)=> @show()

  build : (@$el) ->
    data = {name:"John \"Deadeye\" Nimbus", episode:"1"}
    @getRank data, "cyber-cadet"

    $top = $ jadeTemplate['chrome-ui/top']( data )
    @$el.append $top

    $progress = $ jadeTemplate['chrome-ui/progress']( {} )
    @$el.append $progress

    shadowIconsInstance.svgReplaceWithString pxSvgIconString, @$el


  getRank : (data, episode) ->
    switch episode
      when 'recruit'
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

  hide : () -> @$el.css opacity:0
  show : () -> @$el.css opacity:1

