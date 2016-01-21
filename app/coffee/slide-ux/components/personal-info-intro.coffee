Component = require 'slide-ux/components/component'

module.exports = class PersonalInfoIntro extends Component

  constructor: ($el, data) ->
    # TODO: Change this to a global var:
    super data
    data.organization = "Arizona Public Service"
    data.name         = aristotle.localStorageProxy.name
    @$node = $ jadeTemplate['slide-ux/components/personal-info-intro']( data )
    @superInit $el, @$node, data
