Component = require 'slide-ux/components/component'

module.exports = class DialoguePage extends Component

  constructor: ($el, data) ->
    super data
    @configData data
    @$node = $ jadeTemplate['slide-ux/components/dialogue/dialogue-pages/base']( data )
    @superInit $el, @$node, data

    if data.theme?
      @$node.addClass data.theme

    # Make the svg stretch to fill whatever size the button is
    @configButtons @$node, data
    $("svg", @$node).each (i, el)-> el.setAttribute "preserveAspectRatio", "none"

    $(".btn").on 'click', (e)=>
      id = e.currentTarget.getAttribute "id"
      for btn in data.btns
        if btn.id == id
          aristotle.commander.do btn.click
          return

  configData : (data) ->
    count = 0
    for btn in data.btns
      btn.id = "btn#{count++}"

  configButtons : (el, data) ->
    return if !data.btnConfig?
    if data.btnConfig.width?  then $(".btn", el).css width  : "#{data.btnConfig.width}px"
    if data.btnConfig.height? then $(".btn", el).css height : "#{data.btnConfig.height}px"
    if data.btnConfig.bottom? then $(".btn-wrapper", el).css "margin-bottom" : "#{data.btnConfig.bottom}px"
    if data.btnConfig.lines   then $(".btn-wrapper").addClass 'lines'
