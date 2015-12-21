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
    if action.INJECT_GLOBAL_VARS?
      for keyValPair in action.INJECT_GLOBAL_VARS
        for key, globalVarName of keyValPair
          if aristotle.globals[globalVarName]?
            action.data[key] = aristotle.globals[globalVarName]
          else
            aristotle.throw "Tried to access the global var `#{globalVarName}` but it doesn't exist", true
    if publishSynchronously
      PubSub.publishSync action.cmd, action.data
    else
      PubSub.publish action.cmd, action.data