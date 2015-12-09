Component = require 'slide-ux/components/component'

module.exports = class DefenderCards extends Component

  constructor: ($el, @data) ->
    @totalCardsViewed = 0
    @$node = $ jadeTemplate['slide-ux/components/defender-cards']( {} )
    super $el, @$node, @data
    @createDefenders @data.defenders

  createDefenders : (defenders) ->
    @ghosts = []
    for defenderId, defenderData of defenders
      data =
        id: defenderId
        events:
          click: (id)=> @showCard id
      @ghosts.push defenderId
      PubSub.publish 'ghostux.add', data

  showCard : (defenderId) =>
    @totalCardsViewed++
    if @$card? then @removeCurrentCard()

    data = @data.defenders[defenderId]
    @$card = $ jadeTemplate['slide-ux/components/defender-card']( data )
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, @$card

    $(".got-it-btn", @$card).on "click", (e)=> @removeCurrentCard()
    if @totalCardsViewed == 2
      PubSub.publish 'continue.show'

    @$node.append @$card

  removeCurrentCard : () -> @$card.remove()

  destroy : () ->
    for ghostId in @ghosts
      PubSub.publish 'ghostux.remove', ghostId
    super()
