Component = require 'slide-ux/components/component'

module.exports = class SelectionDialogue extends Component

  constructor: ($el, data) ->
    jadeData = @generateConfigData data
    @$node = $ jadeTemplate['slide-ux/components/selection-dialogue']( jadeData )
    @addEventListeners @$node, data
    super $el, @$node

  generateConfigData : (data) ->
    @items   = {}
    jadeData = {}
    jadeData.title    = data.title
    jadeData.subTitle = data.subTitle
    jadeData.btnTxt   = data.submitBtn.txt
    jadeData.btnIcon  = data.submitBtn.icon
    jadeData.intro    = data.intro
    jadeData.items    = [  ]
    for item, i in data.items
      item.id = "item#{i}"
      jadeData.items.push {txt:item.btnTxt, id:item.id, icon:item.icon}
      @items[item.id] = item
    jadeData

  addEventListeners : ($el, data) ->
    $buttons = $(".button", $el)
    $buttons.on "click", (e)=>
      $targ = $(e.target)
      @activateItem( $targ, @items[ $targ.attr('id') ])

    $("#action-btn", $el).on "click", (e)=>
      for action in data.click
        PubSub.publish action.cmd, action.data
      @destroy()

  activateItem : ($button, item) ->
    $(".intro", @$node).css display:"none"
    $(".item-info", @$node).css display:"block"
    $(".button", @$node).removeClass "active"
    $button.addClass "active"
    $(".icon", @$node).removeClass "active"
    $("#icon-#{item.id}", @$node).addClass "active"
    $(".blurb", @$node).html item.blurb
    $(".details", @$node).html item.details
    PubSub.publish item.click.cmd, item.click.data