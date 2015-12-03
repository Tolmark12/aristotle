module.exports = class Commander

  constructor: () ->
    window.aristotle.commander = @

  do: (action)->
    if Array.isArray action
      for item in action
        @publish item
    else
      @publish action

  publish : (action) ->
    if action.INJECT_GLOBAL_VARS?
      for keyValPair in action.INJECT_GLOBAL_VARS
        for key, globalVarName of keyValPair
          if aristotle.globals[globalVarName]?
            action.data[key] = aristotle.globals[globalVarName]
          else
            aristotle.throw "Tried to access the global var `#{globalVarName}` but it doesn't exist", true

    PubSub.publish action.cmd, action.data