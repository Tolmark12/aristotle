Component = require 'slide-ux/components/component'

module.exports = class EpisodeIntro extends Component

  constructor: ($el, data) ->
    @$node = $ jadeTemplate['slide-ux/components/episode-intro']( data )
    super $el, @$node, data