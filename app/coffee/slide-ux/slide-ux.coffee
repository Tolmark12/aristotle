Ctanlee           = require 'slide-ux/ctanlee/Ctanlee'
DefenderCards     = require 'slide-ux/components/defender-cards'
Dialogue          = require 'slide-ux/components/dialogue'
ExploreCards      = require 'slide-ux/components/explore-cards'
GhostUX           = require 'slide-ux/components/ghost-ux'
Quiz              = require 'slide-ux/components/quiz/quiz'
SelectionDialogue = require 'slide-ux/components/selection-dialogue'
SimpleSelection   = require 'slide-ux/components/simple-selection'
GenericUiElements = require 'slide-ux/generic-ui'

module.exports = class SlideUX

  constructor: (@$el) ->
    @components = []
    @ctanlee    = new Ctanlee @$el
    @genericUi  = new GenericUiElements @$el

  populate : (data) ->
    @removeCurrentComponents()
    @components = []
    return if !data?.components?
    for component in data.components
      @components.push @addComponent component

  addComponent : (componentData) ->
    switch componentData.kind
      when "selection-dialogue" then component = new SelectionDialogue @$el, componentData.config
      when "simple-selection"   then component = new SimpleSelection @$el, componentData.config
      when "dialogue"           then component = new Dialogue @$el, componentData.config
      when "ghost-ux"           then component = new GhostUX @$el, componentData.config
      when "quiz"               then component = new Quiz @$el, componentData.config
      when "defender-cards"     then component = new DefenderCards @$el, componentData.config # Fold this into Explore Cards
      when "explore-cards"      then component = new ExploreCards @$el, componentData.config
      else
        aristotle.throw "tried to create an unrecognized component type: `#{componentData.kind}`"
        return null
    return component

  removeCurrentComponents : () ->
    for component in @components
      component.destroy()