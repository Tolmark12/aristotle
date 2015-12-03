Ctanlee           = require 'slide-ux/ctanlee/Ctanlee'
Dialogue          = require 'slide-ux/components/dialogue'
GhostUX           = require 'slide-ux/components/ghost-ux'
Quiz              = require 'slide-ux/components/quiz'
SelectionDialogue = require 'slide-ux/components/selection-dialogue'

module.exports = class SlideUX

  constructor: (@$el) ->
    @components = []
    @ctanlee = new Ctanlee @$el

  populate : (data) ->
    @removeCurrentComponents()
    @components = []
    return if !data?.components?
    for component in data.components
      @components.push @addComponent component

  addComponent : (componentData) ->
    switch componentData.kind
      when "selection-dialogue"
        component = new SelectionDialogue @$el, componentData.config
      when "dialogue"
        component = new Dialogue @$el, componentData.config
      when "ghost-ux"
        component = new GhostUX @$el, componentData.config
      when "quiz"
        component = new Quiz @$el, componentData.config
      else
        aristotle.throw "tried to create an unrecognized component type: `#{componentData.kind}`"
        return null
    return component

  removeCurrentComponents : () ->
    for component in @components
      component.destroy()