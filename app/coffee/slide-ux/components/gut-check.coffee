Component = require 'slide-ux/components/component'

module.exports = class GutCheck extends Component

  constructor: ($el, data) ->
    super data
    @$node = $ jadeTemplate['slide-ux/components/gut-check']( data )
    @superInit $el, @$node, data
