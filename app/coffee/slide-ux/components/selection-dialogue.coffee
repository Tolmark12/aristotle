Component = require 'slide-ux/components/component'

module.exports = class SelectionDialogue extends Component

  constructor: ($el, data) ->
    super data
    if !data.meta? then aristotle.throw "Selection dialogue doesn't have any meta data!"

    @$node = $ jadeTemplate['slide-ux/components/dialogue/selection-dialogue']()
    jadeData = @generateConfigData data
    @$left  = $ jadeTemplate['slide-ux/components/dialogue/dialogue-details']( jadeData )
    $right = $ jadeTemplate['slide-ux/components/dialogue/dialogue-buttons']( jadeData )
    @$left.addClass "hidden"
    @$node.append @$left
    @$node.append $right
    @addEventListeners @$node, data
    @metaTitle = data.meta.title

    if @metaTitle == 'fake'
      @$node.css "pointer-events" : "none"
    else
      PubSub.publish 'meta.choice.start', {id:data.meta.title}

    @superInit $el, @$node, data

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
      $targ = $(e.currentTarget)
      @activateItem( $targ, @items[ $targ.attr('id') ])

    $("#action-btn", $el).on "click", (e)=>
      aristotle.commander.do data.click
      PubSub.publish 'meta.choice.finish', {id:data.meta.title, choice: aristotle.dictionary.get( aristotle.globals.get( data.meta.choice ) ) }
      @destroy()

  activateItem : ($button, item) ->
    return if @activeItem == item.btnTxt
    @activeItem = item.btnTxt
    PubSub.publish 'meta.activity', {activity: "Click #{item.btnTxt}", id:@metaTitle }
    @$left.removeClass "hidden"
    $(".item-info", @$node).css display:"block"
    $(".button", @$node).removeClass "active"
    $button.addClass "active"
    $(".icon", @$node).removeClass "active"
    $("#icon-#{item.id}", @$node).addClass "active"
    $(".blurb", @$node).html item.blurb
    $(".details", @$node).html item.details
    $(".quote", @$node).html item.quote
    aristotle.commander.do item.click
