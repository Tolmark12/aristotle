Component = require 'slide-ux/components/component'

module.exports = class SimpleSelection extends Component


  constructor: ($el, data) ->
    jadeData = @generateConfigData data
    @$node = $ jadeTemplate['slide-ux/components/dialogue/selection-dialogue']()
    $right = $ jadeTemplate['slide-ux/components/dialogue/dialogue-buttons']( jadeData )
    @$node.append $right
    @addEventListeners @$node, data
    super $el, @$node

  generateConfigData : (data) ->
    @items         = {}
    jadeData       = {}
    jadeData.items = []
    jadeData.title    = data.title
    jadeData.subTitle = data.subTitle
    for item, i in data.items
      item.id = "item#{i}"
      jadeData.items.push {txt:item.btnTxt, id:item.id}
      @items[item.id] = item
    jadeData

  addEventListeners : ($el, data) ->
    $buttons = $(".button", $el)
    $buttons.on "click", (e)=>
      $targ = $(e.target)
      data = @items[ $targ.attr('id') ]
      aristotle.commander.do data.click
