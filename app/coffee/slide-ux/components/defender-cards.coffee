Component = require 'slide-ux/components/component'

module.exports = class DefenderCards extends Component

  constructor: ($el, @data) ->
    @$node = $ jadeTemplate['slide-ux/components/defender-cards']( {} )
    super $el, @$node
    @createDefenders @data.defenders

  createDefenders : (defenders) ->
    for defenderId, defenderData of defenders
      data =
        id: defenderId
        events:
          click: (id)=> @showCard id
      PubSub.publish 'ghostux.add', data


  showCard : (defenderId) =>
    if @$card? then @removeCurrentCard()

    data = @data.defenders[defenderId]
    @$card = $ jadeTemplate['slide-ux/components/defender-card']( data )
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, @$card

    $(".got-it-btn", @$card).on "click", (e)=> @removeCurrentCard()

    @$node.append @$card

  removeCurrentCard : () -> @$card.remove()
