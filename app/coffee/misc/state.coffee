module.exports = class State

  constructor : (@movie, @ux) ->
    @state = {}
    PubSub.subscribe 'state.save',    (m, data)=> @saveState()
    PubSub.subscribe 'state.load',    (m, data)=> @loadState()
    PubSub.subscribe 'state.persist', (m, data)=> @persistState()

  saveState : () ->
    @hasSavedState = true
    @state.layers = @movie.dehydrateLayerState()

  loadState : () ->
    if !@hasSavedState then return
    @movie.rehydrateLayerState @state.layers

  persisteState : () ->
