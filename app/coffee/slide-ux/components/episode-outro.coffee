Component = require 'slide-ux/components/component'

module.exports = class EpisodeOutro extends Component

  constructor: ($el, data) ->
    @$node = $ jadeTemplate['slide-ux/components/episode-outro']( data )
    super $el, @$node, data