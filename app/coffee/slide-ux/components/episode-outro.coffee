Component = require 'slide-ux/components/component'

module.exports = class EpisodeOutro extends Component

  constructor: ($el, data) ->
    super data
    @$node = $ jadeTemplate['slide-ux/components/episode-outro']( data )
    @superInit $el, @$node, data
