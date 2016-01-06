ProgressMap = require 'chrome/progress-map'
VCRControls = require 'chrome/vcr-controls'

module.exports = class BottomUiElements

  constructor: (@$el) ->
    @$node = $ jadeTemplate['chrome-ui/progress']( {} )
    @$el.append @$node
    @progessMap  = new ProgressMap @$node
    @vcrControls = new VCRControls @$node

    @show 'progress-map'

    PubSub.subscribe 'vcr-control.show', (m, data)=>
      @showAnimationControls data
      @show 'vcr'

  showAnimationControls : (svgAnimation) ->
    @vcrControls.activate svgAnimation, ()=>
      @show 'progress-map'
      PubSub.publish 'slides.next-slide'

  show : (clss)->
    @$node.children().addClass 'hidden'
    $(".#{clss}", @$node).removeClass 'hidden'

  destroy : () ->
    if @progressMap?
      @progressMap.destroy()
