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

    $a.on "mouseover", (e)=>
      @addLabel e

    $a.on "mouseout", (e)=>
      @removeLabel e

  addLabel : (e) ->
    $el = $(e.currentTarget)
    timeoutId = "timeout#{$el.attr('data-label')}"
    clearTimeout @[timeoutId]
    configData = aristotle.labels[ $el.attr('data-label')]
    configData.cssClass = "arrow-right"
    PubSub.publish 'label.attach', {data: { el:$el, content:configData}, isBox:true}

  removeLabel : (e) ->
    $el = $(e.currentTarget)
    timeoutId = "timeout#{$el.attr('data-label')}"
    @[timeoutId] = setTimeout ()->
      $el = $(e.currentTarget)
      PubSub.publish 'label.destroy', $(e.currentTarget)
    ,
      100

  destroy : () ->
    @$node.remove()