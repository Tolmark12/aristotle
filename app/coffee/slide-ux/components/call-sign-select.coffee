Component = require 'slide-ux/components/component'

module.exports = class CallSignSelect extends Component

  constructor: ($el, data) ->
    super data
    @$node = $ jadeTemplate['slide-ux/components/call-sign-select']( data )
    @superInit $el, @$node, data
    @$node.addClass 'hidden'
    @$txt = $ '#callsign-txt', @$node
    @$name = $ "#name", @$node
    @updateName()
    $('#generate-callsign', @$node ).on 'click', ()=> @generateCallSign()
    PubSub.subscribe 'save.callsign', (m, data) => @saveCallSign()

    @$txt.on "keyup", (e)=>
      @updateName $(e.currentTarget).val()

    aristotle.getJson "local/callsigns.json", (data)=>
      @callsigns = data.callsigns
      @$node.removeClass 'hidden'


  updateName : (callsign) ->
    [lastName, firstName] = aristotle.globals.get("user").split(",")
    if callsign?
      callsign = " \"#{callsign}\" "
    else
      callsign = " "

    @$name.html "#{firstName}#{callsign}#{lastName}"

  generateCallSign : () ->
    @callSign = @callsigns[Math.floor(Math.random()*@callsigns.length)]
    PubSub.publish 'meta.activity', {activity: "Generate Call Sign"}
    @updateName @callSign
    @$txt.val @callSign

  saveCallSign : () ->
    callSign = @$txt.val()
    if callSign?.length > 1
      aristotle.globals.set 'callSign',   callSign
      PubSub.publish 'state.save'
      PubSub.publish 'callsign.selected', callSign
      PubSub.publish 'slides.next'
