Component = require 'slide-ux/components/component'

module.exports = class CallSignSelect extends Component

  constructor: ($el, data) ->
    super data
    @$node = $ jadeTemplate['slide-ux/components/call-sign-select']( data )
    @superInit $el, @$node, data
    @$txt = $ '#callsign-txt', @$node
    $('#generate-callsign', @$node ).on 'click', ()=> @generateCallSign()

    PubSub.subscribe 'save.callsign', (m, data) => @saveCallSign()

  generateCallSign : () ->
    nicks = [ "Ace","Aftershock","Baldy","Bam-Bam","Bear","Beetle","Bigfoot","Bizo","Bonzo","Boom-Boom","Bowser","Buck","Bugs","Bull","Calico","Deadeye","Dutch","Ghost","Grits","Hammer","Hardcore 54","Hawk","Hawkeye","Hollywood","Huey","Krazy","Lucky","Mad Dog","Pineapple","Pops","Radar","Rebel","Red","Shorty","Sparky","Spooky","Tack","B.A.","Tex","Tiger","Tiny","Wizard"]
    @callSign = nicks[Math.floor(Math.random()*nicks.length)]
    @$txt.val @callSign

  saveCallSign : () ->
    callSign = @$txt.val()
    if callSign?.length > 1
      aristotle.globals.set 'callSign',   callSign
      PubSub.publish 'callsign.selected', callSign
      PubSub.publish 'slides.next'
