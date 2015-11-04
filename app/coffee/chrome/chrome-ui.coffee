module.exports = class ChromeUI

  constructor: ($el) ->
    @build $el

  build : ($el) ->
    $top = $ jadeTemplate['chrome-ui/top']( {} )
    $el.append $top

    $progress = $ jadeTemplate['chrome-ui/progress']( {} )
    $el.append $progress

    shadowIconsInstance.svgReplaceWithString pxSvgIconString, $el
