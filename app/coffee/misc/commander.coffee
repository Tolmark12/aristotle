module.exports = class Commander

  constructor: () ->
    window.aristotle.commander = @

  do: (action, publishSynchronously=false)->
    if Array.isArray action
      for item in action
        @publish item, publishSynchronously
    else
      @publish action, publishSynchronously

  publish : (action, publishSynchronously=false) ->
    if action.delay?
      @publishDelayedAction action
      return

    if publishSynchronously
      PubSub.publishSync action.cmd, action.data
    else
      PubSub.publish action.cmd, action.data

  publishDelayedAction : (action) ->
    setTimeout ()->
      PubSub.publish action.cmd, action.data
    ,
      action.delay