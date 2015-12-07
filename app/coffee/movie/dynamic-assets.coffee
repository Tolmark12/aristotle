module.exports = class DynamicAssets

  constructor: ( @$el ) ->
    PubSub.subscribe 'label.add',    (m, data)=> @addLabel data
    PubSub.subscribe 'label.remove', (m, data)=> @removeLabel data
    PubSub.subscribe 'label.clear',  (m, data)=> @removeLabel data
    PubSub.subscribe 'label.hide',   (m, data)=> @hideLabel data
    PubSub.subscribe 'label.show',   (m, data)=> @showLabel data

  addLabel : (data) ->
    pos    = aristotle.movie.getLocalPos data.id
    $label = $ jadeTemplate['movie/label']( {text:data.text, id:"#{data.id}-label"} )
    @$el.append $label
    @positionLabel data, $label, pos
    $label.css top:pos.y, left:pos.x;

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
        console.log "width"
        console.log $innerLabel.width()
        window.thing = $innerLabel
        $innerLabel.css left: - $innerLabel.width()/2