Component = require 'slide-ux/components/component'

module.exports = class Quiz extends Component

  constructor: ($el, data) ->
    @$node = $ jadeTemplate['slide-ux/components/quiz/quiz']( data )
    super $el, @$node
