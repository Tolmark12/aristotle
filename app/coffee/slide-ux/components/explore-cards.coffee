Component = require 'slide-ux/components/component'
Sequence  = require 'misc/sequence'

module.exports = class ExploreCards extends Component

  constructor: ($el, @data) ->
    super @data
    @metaCategory      = @data.meta.title
    @totalCardsViewed  = 0
    @requiredCardViews = @data["required-views"]
    @$node             = $ $.parseHTML("<div></div>")
    @cards             = new Sequence @data.cards

    @createCardGhosts @data.cards
    @superInit $el, @$node, @data

  createCardGhosts : (cards) ->
    @ghosts = []
    for cardData in cards
      if cardData.label?
        cardData.label.id     = cardData.hit
        cardData.label.events = click: (id)=> @showCard id
        @addLabel cardData.label

      data =
        id     : cardData.hit
        events : click: (id)=> @showCard id
      @ghosts.push cardData.hit
      PubSub.publish 'ghostux.add', data

  addLabel : (labelData) ->
    PubSub.publish 'label.add', labelData

  showCard : (cardId) =>
    @totalCardsViewed++
    if @$currentCard? then @removeCurrentCard()
    data = @cards.getItemByParam 'hit', cardId # we may want to assign an unique id to each card or something..
    @$currentCard = $ jadeTemplate["slide-ux/components/cards/#{@data.template}"]( data )
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, @$currentCard
    $(".got-it-btn", @$currentCard).on "click", (e)=> @removeCurrentCard()
    PubSub.publish 'meta.activity', {activity: "Click : #{@metaCategory} - #{data.label.text}"}
    if @totalCardsViewed >= @requiredCardViews
      PubSub.publish 'continue.show'

    @$node.append @$currentCard

  removeCurrentCard : () -> @$currentCard.remove()

  destroy : () ->
    for ghostId in @ghosts
      PubSub.publish 'ghostux.remove', ghostId
    super()


