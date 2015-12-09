Component = require 'slide-ux/components/component'

module.exports = class GhostUX extends Component

  constructor: ($el, data) ->
    @$node = $ jadeTemplate['slide-ux/components/ghost-ux']( {} )
    super $el, @$node, data
    @createTargets data.targets

  createTargets : (targets) ->
    for target in targets
      $target = $ "##{target.id}"
      pos = $target.position()
      wid = $target[0].getBBox().width
      tal =  $target[0].getBBox().height
      # console.log target.id
      # console.log pos.left, pos.top, wid, tal
      $ghostItem = $ jadeTemplate['slide-ux/components/ghost-item']( {width:wid, height:tal, left:pos.left, top:pos.top} )
      @$node.append $ghostItem

      @setEventHandler $ghostItem, 'click', target.click
      @setEventHandler $ghostItem, 'mouseover', target.over, 0.4
      @setEventHandler $ghostItem, 'mouseout', target.out

  setEventHandler : ($item, event, action, opacity=0) ->
    $item.on event, ()->
      # $item.css opacity:opacity
      aristotle.commander.do action

