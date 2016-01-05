Component = require 'slide-ux/components/component'

module.exports = class Dialogue extends Component

  constructor: ($el, data) ->
    super data
    @$node = $ jadeTemplate['slide-ux/components/dialogue/dialogue']( data )
    @superInit $el, @$node, data
    $('.btn', @$node).on "click", ()=>
      aristotle.commander.do data.btn.action