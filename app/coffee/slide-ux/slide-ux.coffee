Ctanlee = require 'slide-ux/ctanlee/Ctanlee'

module.exports = class SlideUX

  constructor: (@$el) ->
    @ctanlee = new Ctanlee @$el