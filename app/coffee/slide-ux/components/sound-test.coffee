Component = require 'slide-ux/components/component'

module.exports = class SoundTest extends Component

  constructor: ($el, data) ->
    super data
    @$node = $ jadeTemplate['slide-ux/components/sound-test']( data )
    @superInit $el, @$node, data

    # Listen for them to click on "play sound"
    @soundListen = PubSub.subscribe 'playsound', (m, data)=>
      PubSub.publish 'meta.activity', {activity: "Play Test Sound"}

  destroy : () ->
    PubSub.unsubscribe @soundListen
    super()