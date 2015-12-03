Ctanlee           = require 'slide-ux/ctanlee/Ctanlee'
GhostUX           = require 'slide-ux/components/ghost-ux'
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
      when "ghost-ux"
        component = new GhostUX @$el, componentData.config
      else
        aristotle.throw "tried to create an unrecognized component type: `#{componentData.kind}`"

