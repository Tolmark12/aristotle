Component = require 'slide-ux/components/component'

module.exports = class DefenderCard extends Component

  constructor: ($el, data) ->
    @$node = $ jadeTemplate['slide-ux/components/duties-card']( {} )
    super $el, @$node