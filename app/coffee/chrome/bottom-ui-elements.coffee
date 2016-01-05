ProgressMap = require 'chrome/progress-map'

module.exports = class BottomUiElements

  constructor: (@$el) ->
    $node = $ jadeTemplate['chrome-ui/progress']( {} )
    @$el.append $node
    @progessMap = new ProgressMap( $node )


  destroy : () ->
    if @progressMap?
      @progressMap.destroy()
