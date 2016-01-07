module.exports = class Top

  constructor: (@$el) ->
    token2  = PubSub.subscribe "callsign.selected",   (m, data)=> @updateCallsign()
    token3  = PubSub.subscribe "chrome.showname",     (m, data)=> @showName()
    token4  = PubSub.subscribe "chrome.showepisodes", (m, data)=> @showIcons()
    token5  = PubSub.subscribe "chrome.hidename",     (m, data)=> @hideName()
    token6  = PubSub.subscribe "chrome.hideepisodes", (m, data)=> @hideIcons()
    @tokens = [token2, token3, token4, token5, token6 ]
    @build()

  build : () ->
    name = aristotle.lmsProxy.user.split ","
    [callsign, episode] = @getVars()

    data    = {name:"#{name[1]} \"#{callsign}\" #{name[0]}", episode:episode}
    @getRank data, "cyber-cadet"
    @$top   = $ jadeTemplate['chrome-ui/top']( data )
    @$el.append @$top
    @$name  = $ ".name-and-rank", @$top
    @$icons = $ ".episodes", @$top
    @$mode  = $ ".learn-mode", @$top
    @hideMode()

  updateCallsign : () ->
    name = aristotle.lmsProxy.user.split ","
    $(".name", @$top).html "#{name[1]} \"#{aristotle.globals.get('callsign')}\" #{name[0]}"

  showName  : () -> @$name.css( {display:"flex", opacity:0}).velocity {opacity:1}, {duration:500}
  hideName  : () -> @$name.css  {display:"none"}
  showIcons : () -> @$icons.css({display:"flex", opacity:0}).velocity {opacity:1}, {duration:500}
  hideIcons : () -> @$icons.css {display:"none"}
  hideMode  : () -> @$mode.addClass "hidden"
  showMode  : () -> @$mode.removeClass "hidden"

  # ------------------------------------ Helpers

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
    for token in @tokens
      PubSub.unsubscribe token

  getVars : () ->
    try
      callsign = aristotle.globals.get 'callsign', false
    catch error
      callsign = "Deadeye"

    episode = 1
    [callsign, episode]