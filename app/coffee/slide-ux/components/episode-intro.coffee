Component = require 'slide-ux/components/component'

module.exports = class EpisodeIntro extends Component

  constructor: ($el, data) ->
    super data
    @$node = $ jadeTemplate['slide-ux/components/episode-intro']( data )
    @superInit $el, @$node, data