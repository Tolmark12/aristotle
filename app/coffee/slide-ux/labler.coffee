module.exports = class Labler

  constructor: () ->
    @count = 0
    PubSub.subscribe 'label.attach', (m, data)=> @attachLabel data
    PubSub.subscribe 'label.destroy', (m, data)=> @destroyLabel data

  attachLabel : (data) ->
    return if $(".label-wrapper", data.el).length != 0
    if !data.content.id? then data.content.id = "_label#{@count++}"

    $label = $ jadeTemplate['slide-ux/label']( data.content )
    $label.addClass "attached"
    data.el.append $label

  destroyLabel : ($el) ->
    $(".label-wrapper", $el).velocity {opacity:0}, {duration:350, complete:()-> $(this).remove() }