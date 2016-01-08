module.exports = class Top

  constructor: (@$el) ->
    token2  = PubSub.subscribe "callsign.selected",   (m, data)=> @updateCallsign data
    token3  = PubSub.subscribe "chrome.showname",     (m, data)=> @showName()
    token4  = PubSub.subscribe "chrome.showepisodes", (m, data)=> @showIcons()
    token5  = PubSub.subscribe "chrome.hidename",     (m, data)=> @hideName()
    token6  = PubSub.subscribe "chrome.hideepisodes", (m, data)=> @hideIcons()
    @tokens = [token2, token3, token4, token5, token6 ]
    @build()

  build : () ->
    name = aristotle.lmsProxy.user.split ","
    [callsign, episodeNum] = @getVars()
    data    = {name:"#{name[1]} \"#{callsign}\" #{name[0]}", episode:episodeNum}
    @getRank data, episodeNum
    @$top   = $ jadeTemplate['chrome-ui/top']( data )
    @$el.append @$top
    @$name  = $ ".name-and-rank", @$top
    @$icons = $ ".episodes", @$top
    @$mode  = $ ".learn-mode", @$top
    @hideMode()

    $(".badge", @$top).on "mouseover", (e)=> @badgeMouseover e
    $(".badge", @$top).on "mouseout",  (e)=> @badgeMouseout e

  updateCallsign : (callSign) ->
    name = aristotle.lmsProxy.user.split ","
    $(".name", @$top).html "#{name[1]} \"#{callSign}\" #{name[0]}"

  showName  : () -> @$name.css( {display:"flex", opacity:0}).velocity {opacity:1}, {duration:500}
  hideName  : () -> @$name.css  {display:"none"}
  showIcons : () -> @$icons.css({display:"flex", opacity:0}).velocity {opacity:1}, {duration:500}
  hideIcons : () -> @$icons.css {display:"none"}
  hideMode  : () -> @$mode.addClass "hidden"
  showMode  : () -> @$mode.removeClass "hidden"

  # ------------------------------------ Events

  badgeMouseover : (e) ->
    $el = $ e.currentTarget
    episodeNum = $el.attr('data-episode')
    configData =
      title    : "Episode #{episodeNum}"
      text     : @getEpisodeTagline episodeNum
      cssClass : "arrow-top inline"
    PubSub.publish 'label.attach', {el:$el, content:configData}

  badgeMouseout : (e) ->
    PubSub.publish 'label.destroy', $(e.currentTarget)

  # ------------------------------------ Helpers

  getRank : (data, episodeNum ) ->
    data.episode = episodeNum
    switch episodeNum
      when 0
        data.rank  = "Recruit"
        data.badge = "rank-badge-recruit"
      when 1
        data.rank  = "cadet"
        data.badge = "rank-badge-cadet"
      when 2
        data.rank  = "Cadet First Class"
        data.badge = "rank-badge-cadet-first-class"
      when 3
        data.rank  = "Technical Cadet"
        data.badge = "rank-badge-technical-cadet"
      when 4
        data.rank  = "Cyber Cadet"
        data.badge = "rank-badge-cyber-cadet"
      when 5
        data.rank  = "Master Cadet"
        data.badge = "rank-badge-cyber-cadet"

  getEpisodeTagline : (episodeNum) ->
    switch episodeNum
      when "1" then return "Organizing Our Forces"
      when "2" then return "Perimeter Defenses"
      when "3" then return "Asset Defenses"
      when "4" then return "Manning the Defenses"
      when "5" then return "Fighting the War"



  destroy : () ->
    for token in @tokens
      PubSub.unsubscribe token

  getVars : () ->
    try
      callsign = aristotle.globals.get 'callSign', false
    catch error
      callsign = "Deadeye"

    episode = Number(aristotle.episodeNum)
    [callsign, episode]