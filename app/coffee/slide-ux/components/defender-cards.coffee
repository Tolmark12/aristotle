Component = require 'slide-ux/components/component'

module.exports = class DefenderCards extends Component

  constructor: ($el, @data) ->
    @totalCardsViewed = 0
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
    @totalCardsViewed++
    if @$card? then @removeCurrentCard()

    data = @data.defenders[defenderId]
    @$card = $ jadeTemplate['slide-ux/components/defender-card']( data )
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, @$card

    if @totalCardsViewed == 2
      $(".got-it-btn", @$card).on "click", (e)=> PubSub.publish "slides.next-slide"
    else
      $(".got-it-btn", @$card).on "click", (e)=> @removeCurrentCard()

    @$node.append @$card

  removeCurrentCard : () -> @$card.remove()
