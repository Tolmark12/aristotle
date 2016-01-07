BottomUiElements = require 'chrome/bottom-ui-elements'
Top              = require 'chrome/top'

module.exports = class ChromeUI

  constructor: (@$el) ->
    # @build @$el
    token1  = PubSub.subscribe "chrome.hide",         (m, data)=> @hide()
    token2  = PubSub.subscribe "chrome.show",         (m, data)=> @show()
    @tokens = [token1, token2]

  build : () ->
    @bottomUiElements = new BottomUiElements @$el
    @top = new Top @$el
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, @$el

  hide     : () -> @$el.addClass "hidden"
  show     : () -> @$el.removeClass "hidden"


  destroy : () ->
    @bottomUiElements.destroy()
    @top.destroy()
    for token in @tokens
      PubSub.unsubscribe token