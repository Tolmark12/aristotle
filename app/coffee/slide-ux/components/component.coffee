module.exports = class Component

  constructor: ($el, @$node, data) ->
    $el.append @$node
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, @$node
    @listenForLabelHovers(data)

  listenForLabelHovers : (data) ->
    if !data.labels? then return
    $a = $("a[data-label]", @$node)
    $a.addClass "label-trigger"

    me = @
    $a.on "mouseover", (e)->
      $el = $(e.currentTarget)
      timeoutId = "timeout#{$el.attr('data-label')}"
      clearTimeout me[timeoutId]

      configData = data.labels[ $el.attr('data-label')]
      configData.cssClass = "arrow-right"
      PubSub.publish 'label.attach', { el:$el, content:configData}

    $a.on "mouseout", (e)->
      $el = $(e.currentTarget)
      timeoutId = "timeout#{$el.attr('data-label')}"
      me[timeoutId] = setTimeout ()->
        $el = $(e.currentTarget)
        PubSub.publish 'label.destroy', $(e.currentTarget)
      ,
        100

  destroy : () ->
    @$node.remove()