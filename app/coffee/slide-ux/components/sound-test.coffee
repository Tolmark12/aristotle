Component = require 'slide-ux/components/component'

module.exports = class SoundTest extends Component

  constructor: ($el, data) ->
    super data
    @$node = $ jadeTemplate['slide-ux/components/sound-test']( data )
    @superInit $el, @$node, data