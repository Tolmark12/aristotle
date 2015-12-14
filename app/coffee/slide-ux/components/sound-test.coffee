Component = require 'slide-ux/components/component'

module.exports = class SoundTest extends Component

  constructor: ($el, data) ->
    @$node = $ jadeTemplate['slide-ux/components/sound-test']( data )
    super $el, @$node, data