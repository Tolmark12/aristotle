Component = require 'slide-ux/components/component'

module.exports = class DialoguePate extends Component

  constructor: ($el, data) ->
    @$node = $ jadeTemplate['slide-ux/components/dialogue/dialogue-pages/base']( data )
    super $el, @$node, data