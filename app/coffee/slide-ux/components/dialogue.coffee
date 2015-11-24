Component = require 'slide-ux/components/component'

module.exports = class Dialogue extends Component

  constructor: ($el, data) ->
    @$node = $ jadeTemplate['slide-ux/components/dialogue']( jadeData )
    @addEventListeners @$node, data
    super $el, @$node