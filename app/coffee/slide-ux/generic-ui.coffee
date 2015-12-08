module.exports = class GenericUi

  constructor: ($el) ->
    $node = $ jadeTemplate['misc/generic-ui']( {} )
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, $node

    @$continueStrip = $(".continue-strip", $node)

    $(".continue-btn", $node).on "click", ()=>
      PubSub.publish "slides.next-slide"
      @hideContinueStrip()

    @hideContinueStrip()
    $el.append $node

    PubSub.subscribe 'continue.show', ()=>
      @showContinueStrip()

  showContinueStrip : () -> @$continueStrip.css display:"initial"
  hideContinueStrip : () -> @$continueStrip.css display:"none"

