module.exports = class Labler

  constructor: () ->
    @count = 0
    @token1 = PubSub.subscribe 'label.attach', (m, data)=> @attachLabel data.data, data.isBox
    @token2 = PubSub.subscribe 'label.destroy', (m, data)=> @destroyLabel data

  attachLabel : (data, isBox=false) ->
    return if $(".label-wrapper", data.el).length != 0
    if !data.content.id? then data.content.id = "_label#{@count++}"


    $label = $ jadeTemplate['slide-ux/label']( data.content )
    $label.addClass "attached"
    if isBox
      $(".label", $label).addClass "box"
    data.el.append $label

  destroyLabel : ($el) ->
    $(".label-wrapper", $el).velocity {opacity:0}, {duration:150, complete:()-> $(this).remove() }

  destroy : () ->
    PubSub.unsubscribe @token1
    PubSub.unsubscribe @token2