Component = require 'slide-ux/components/component'

module.exports = class PersonalInfoIntro extends Component

  constructor: ($el, data) ->
    # TODO: Change this to a global var:
    data.organization = "Arizona Public Service"
    data.name         = aristotle.lmsProxy.name
    @$node = $ jadeTemplate['slide-ux/components/personal-info-intro']( data )
    super $el, @$node, data