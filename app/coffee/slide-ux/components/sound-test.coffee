Component = require 'slide-ux/components/component'

module.exports = class SoundTest extends Component

  constructor: ($el, data) ->
    super data
    @$node = $ jadeTemplate['slide-ux/components/sound-test']( data )
    @superInit $el, @$node, data

    $("#sound-test", @$node).on "click", (e)=>
      return if @hasPlayed
      @hasPlayed = true
      PubSub.publish 'playsound', {content: data.sound}
      PubSub.publish 'meta.activity', {activity: "Play Test Sound"}

  destroy : () ->
    PubSub.unsubscribe @soundListen
    super()