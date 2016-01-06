module.exports = class VCRControls

  constructor: ($el) ->
    $node = $ jadeTemplate['chrome-ui/vcr']( {} )
    $el.append $node

  activate : (svgAnimation) ->
    animation = svgAnimation.animation
    animation.addEventListener 'enterFrame', ()->
      console.log animation.currentRawFrame, animation.currentFrame, animation.totalFrames
