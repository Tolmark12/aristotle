ProgressMap = require 'chrome/progress-map'
VCRControls = require 'chrome/vcr-controls'

module.exports = class BottomUiElements

  constructor: (@$el) ->
    @$node = $ jadeTemplate['chrome-ui/progress']( {} )
    @$el.append @$node
    @progessMap  = new ProgressMap @$node
    @vcrControls = new VCRControls @$node



    PubSub.subscribe 'vcr-control.show', (m, data)=>
      @showAnimationControls data
      @shode @progessMap

  showAnimationControls : (svgAnimation) ->
    @vcrControls.activate svgAnimation

  show : ($el)->
    @$node.children().addClass 'hidden'
    $el.children().removeClass 'hidden'


  destroy : () ->
    if @progressMap?
      @progressMap.destroy()
