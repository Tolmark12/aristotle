Component = require 'slide-ux/components/component'

module.exports = class Dialogue extends Component

  constructor: ($el, data) ->
    @$node = $ jadeTemplate['slide-ux/components/dialogue/dialogue']( data )
    super $el, @$node
    $('.btn', @$node).on "click", ()=>
      aristotle.commander.do data.btn.action