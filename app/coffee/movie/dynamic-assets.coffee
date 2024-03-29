module.exports = class DynamicAssets

  constructor: ( @$el ) ->
    # Ghost UX
    PubSub.subscribe "ghostux.add",    (m, data)=> @createGhost data
    PubSub.subscribe "ghostux.remove", (m, data)=> @destroyGhost data

    # Labels
    PubSub.subscribe 'label.add',    (m, data)=> @addLabel data
    PubSub.subscribe 'label.remove', (m, data)=> @removeLabel data
    PubSub.subscribe 'label.clear',  (m, data)=> @removeLabel data
    PubSub.subscribe 'label.hide',   (m, data)=> @hideLabel data
    PubSub.subscribe 'label.show',   (m, data)=> @showLabel data

   ######   ##     ##  #######   ######  ########    ##     ## ##     ##
  ##    ##  ##     ## ##     ## ##    ##    ##       ##     ##  ##   ##
  ##        ##     ## ##     ## ##          ##       ##     ##   ## ##
  ##   #### ######### ##     ##  ######     ##       ##     ##    ###
  ##    ##  ##     ## ##     ##       ##    ##       ##     ##   ## ##
  ##    ##  ##     ## ##     ## ##    ##    ##       ##     ##  ##   ##
   ######   ##     ##  #######   ######     ##        #######  ##     ##

  createGhost : (data) ->
    # $target = $ "##{data.id}"
    box = aristotle.getLocalPos data.id

    if box.w > 500 || box.h > 400 then aristotle.log "We've created a hit area for `#{data.id}` that is #{box.w}px by #{box.h}px, I'm guessing that's not right.."

    $ghostItem = $ jadeTemplate['slide-ux/components/ghost-item']( {id:"#{data.id}-ghost", width:box.w, height:box.h, left:box.x, top:box.y} )
    @$el.append $ghostItem

    @addEvents $ghostItem, data.events, data.id

  addEvents : ($el, events, id) ->
    # Set event handlers
    for event, action of events
      # if it's a global command ie: {cmd: do.something, data: somedata}
      if action.cmd?
        $el.on "#{event}.#{id}", ()-> aristotle.commander.do action

      # if it's a function..
      else if typeof action == "function"
        $el.on "#{event}.#{id}", ()-> action id

  destroyGhost : (data) ->
    $el = $("##{data.id}-ghost")
    for event, action of data.events
      $el.off "#{event}.#{data.id}"
    $el.remove()


  ##          ###    ########  ######## ##        ######
  ##         ## ##   ##     ## ##       ##       ##    ##
  ##        ##   ##  ##     ## ##       ##       ##
  ##       ##     ## ########  ######   ##        ######
  ##       ######### ##     ## ##       ##             ##
  ##       ##     ## ##     ## ##       ##       ##    ##
  ######## ##     ## ########  ######## ########  ######

  addLabel : (data) ->
    pos    = aristotle.movie.getLocalPos data.id
    $label = $ jadeTemplate['slide-ux/label']( {title:data.text, id:"#{data.id}-label"} )
    @$el.append $label
    @positionLabel data, $label, pos
    $label.css top:pos.y, left:pos.x;
    @addEvents $label, data.events, data.id
    if data.events?
      $label.addClass "clickable"


  removeLabel : (data)->
    if data.id == "all"
      $(".label-wrapper", @$el).remove()
    else if Array.isArray data.id
      for labelId in data.id
        $("##{labelId}-label", @$el).remove()
    else
      $("##{data.id}-label", @$el).remove()

  hideLabel   : (data)->
    if data.id == "all"
      $(".label-wrapper", @$el).velocity({opacity:0}, {duration:400})
    else if Array.isArray data.id
      for labelId in data.id
        $("##{labelId}-label", @$el).velocity({opacity:0}, {duration:400})
    else
        $("##{data.id}-label", @$el).velocity({opacity:0}, {duration:400})

  showLabel   : (data)->
    if data.id == "all"
      $(".label-wrapper", @$el).velocity({opacity:1}, {duration:400})
    else if Array.isArray data.id
      for labelId in data.id
        $("##{labelId}-label", @$el).velocity({opacity:1}, {duration:400})
    else
      $("##{data.id}-label", @$el).velocity({opacity:1}, {duration:400})

  clearLabel  : (data)->
    if data.id == "all"
      $(".label-wrapper", @$el).velocity({opacity:1}, {duration:400})
    else if Array.isArray data.id
      for labelId in data.id
        $("##{labelId}-label", @$el).velocity({opacity:1}, {duration:400})
    else
      $("##{data.id}-label", @$el).velocity({opacity:1}, {duration:400})

  # ------------------------------------ HELPERS

  positionLabel : (data, $label, pos) ->
    face      = if data.face?  then data.face  else "top"
    arrowLoc  = if data.arrow? then data.arrow else "left"
    $innerLabel = $(".label", $label)

    switch face
      when "top"
        pos.x += pos.w/2
      when "left"
        pos.y += pos.h/2
        $innerLabel.addClass "arrow-point-right"
      when "right"
        pos.y += pos.h/2
        pos.x += pos.w
        $innerLabel.addClass "arrow-point-left"
      when "bottom"
        pos.x += pos.w/2
        pos.y += pos.h
        $innerLabel.addClass "arrow-top"

    switch arrowLoc
      when "right"
        $innerLabel.addClass "arrow-right"
      when "middle"
        $innerLabel.addClass "arrow-middle"
        window.thing = $innerLabel
        $innerLabel.css left: - $innerLabel.width()/2