Component = require 'slide-ux/components/component'
Sequence  = require 'misc/sequence'

module.exports = class Duties extends Component

  constructor: ($el, data) ->
    @numAcknowledgedDuties = 0
    @acknowledgedDuties    = {} # Store the ids of each duty that's acknowledged
    @getData data.definition
    @$node  = $ "<div class='duties'/>"
    super $el, @$node, data

  build : (data) ->
    @createDutyIds data.duties
    @duties = new Sequence data.duties
    $html  = $ jadeTemplate['slide-ux/components/duties']( data )
    @$node.append $html
    @$content = $ ".content", @$node
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, @$node

    @$dutyButtons = $(".duty-btn", @$node)
    @$dutyButtons.on "click", (e)=>
      @activateDuty e.currentTarget, e.currentTarget.getAttribute 'id'
    $(@$dutyButtons[0]).trigger "click"

  setUserHtml : (data) ->
    @$content.empty()
    $userContent = $ jadeTemplate['slide-ux/components/duty-details']( data )
    @$content.append $userContent
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, @$node
    $("#acknowledge", $userContent).on "click", ()=> @dutyAcknowledged()


  dutyAcknowledged : () ->
    if !@acknowledgedDuties[ @duties.currentItem().id ]?
      @numAcknowledgedDuties++
      @acknowledgedDuties[ @duties.currentItem().id ] = ""
      @$currentActiveButton.addClass "complete"

    if @numAcknowledgedDuties == @duties.totalItems
      PubSub.publish 'continue.show'
    else
      # Loop through the duties and trigger the first uncompleted duty we find
      for duty in @duties.items
        if !@acknowledgedDuties[duty.id]?
          $("##{duty.id}", @$node).trigger 'click'
          return





  # Add an id for knowing which duty was clicked on
  createDutyIds : (duties) ->
    count=0
    for duty in duties
      duty.id = "duty#{count++}"

  activateDuty : (el, id) ->
    @duties.activateItemByParam 'id', id
    @$currentActiveButton = $(el)
    @$dutyButtons.removeClass "active"
    @$currentActiveButton.addClass "active"
    @setUserHtml @duties.currentItem()

  getData: (jsonFile)->
    @loadJson aristotle.getAssetPath(jsonFile), (json)=>
      # strip out all the new lines
      obj = JSON.parse json.replace /(\r\n|\n|\r)/gm,""
      @build obj
      # @callback JSON.parse(json)


  loadJson : (path, onComplete) ->
    xobj = new XMLHttpRequest()
    xobj.overrideMimeType 'application/json'
    xobj.open 'GET', path, true
    xobj.onreadystatechange = ()=>
      if xobj.readyState == 4 && xobj.status == 200
        onComplete xobj.responseText
    xobj.send(null)
