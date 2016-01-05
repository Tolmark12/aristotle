module.exports = class Component

  constructor: (data) ->
    @replaceVars data

  superInit : ($el, @$node, data) ->
    $el.append @$node
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, @$node
    @listenForLabelHovers data

  replaceVars : (data) ->
    return if !data.replaceVars?
    for key in data.replaceVars
      data[key] = data[key].replace /\${(\w+)}/g, (match, capture1)-> aristotle.globals.get(capture1)

  listenForLabelHovers : (data) ->
    return if !data.hasLabels?
    return if !data.hasLabels
    $a = $("a[data-label]", @$node)
    $a.addClass "label-trigger"

    me = @
    $a.on "mouseover", (e)->
      $el = $(e.currentTarget)
      timeoutId = "timeout#{$el.attr('data-label')}"
      clearTimeout me[timeoutId]

      configData = aristotle.labels[ $el.attr('data-label')]
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