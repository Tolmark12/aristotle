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

    PubSub.subscribe 'continue.show', (m, data)=>
      if data?
        @showContinueStrip data.css
      else
        @showContinueStrip()

  showContinueStrip : (cssClasses) ->
    @$continueStrip.removeClass "hidden"
    if cssClasses?
      @addedClasses = cssClasses
      @$continueStrip.addClass @addedClasses
    else
      @addedClasses = null

  hideContinueStrip : () ->
    @$continueStrip.addClass "hidden"
    if @addedClasses?
      @$continueStrip.removeClass @addedClasses

  destroy : () ->
