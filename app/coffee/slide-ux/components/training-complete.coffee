Component = require 'slide-ux/components/component'

module.exports = class TrainingComplete extends Component


  constructor: ($el, data) ->
    super data
    @$node = $ jadeTemplate['slide-ux/components/training-complete']( {} )
    $el.append @$node

    @superInit $el, @$node, data
    
