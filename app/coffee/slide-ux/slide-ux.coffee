Ctanlee           = require 'slide-ux/ctanlee/Ctanlee'
SelectionDialogue = require 'slide-ux/components/selection-dialogue'

module.exports = class SlideUX

  constructor: (@$el) ->
    @ctanlee = new Ctanlee @$el

  populate : (data) ->
    return if !data?.components?
    for component in data.components
      @addComponent component

  addComponent : (componentData) ->
    switch componentData.kind
      when "selection-dialogue"
        component = new SelectionDialogue @$el, componentData.config
      when "dialogue"
        component = new Dialogue @$el, componentData.config
