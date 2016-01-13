Component = require 'slide-ux/components/component'

module.exports = class CallSignSelect extends Component

  constructor: ($el, data) ->
    super data
    @$node = $ jadeTemplate['slide-ux/components/call-sign-select']( data )
    @superInit $el, @$node, data
    @$node.addClass 'hidden'
    @$txt = $ '#callsign-txt', @$node
    $('#generate-callsign', @$node ).on 'click', ()=> @generateCallSign()
    PubSub.subscribe 'save.callsign', (m, data) => @saveCallSign()

    aristotle.getJson "local/callsigns.json", (data)=>
      @callsigns = data.callsigns
      @$node.removeClass 'hidden'

  generateCallSign : () ->
    @callSign = @callsigns[Math.floor(Math.random()*@callsigns.length)]
    PubSub.publish 'meta.activity', {activity: "Generate Call Sign"}
    @$txt.val @callSign

  saveCallSign : () ->
    callSign = @$txt.val()
    if callSign?.length > 1
      aristotle.globals.set 'callSign',   callSign
      PubSub.publish 'state.save'
      PubSub.publish 'callsign.selected', callSign
      PubSub.publish 'slides.next'
