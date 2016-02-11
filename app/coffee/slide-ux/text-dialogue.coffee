AudioTrack    = require 'episode/audio-track'
Sequence      = require 'misc/sequence'
Ctanlee       = require 'slide-ux/dialogue-actors/ctanlee'
ClosedCaption = require 'slide-ux/dialogue-actors/closed-caption'

module.exports = class TextDialogue

  constructor: ($parent) ->
    aristotle.dialogue = @

    @cc      = new ClosedCaption $parent, @playNextAction
    @ctanlee = new Ctanlee $parent, @playNextAction

    # If they've turned off closed captioning some time in the past, disable it here
    if !aristotle.globals.get "ccIsOn", false
      @cc.disableCc()
      @ctanlee.disableCc()

    token1  = PubSub.subscribe 'ctanlee.activate',            (a, data)=> @playAction(data)
    token2  = PubSub.subscribe 'ctanlee.add-event-listener',  (a, data)=> @addEventListener data
    token3  = PubSub.subscribe 'dialogue.activate',           (a, data)=> @playAction(data)
    token4  = PubSub.subscribe 'dialogue.add-event-listener', (a, data)=> @addEventListener data
    token5  = PubSub.subscribe 'vcr.pause',                   (a, data)=> @pauseTimeline()
    token6  = PubSub.subscribe 'vcr.play',                    (a, data)=> @playTimeline()
    token7  = PubSub.subscribe 'vcr.replay',                  (a, data)=> @replayTimeline()
    token8  = PubSub.subscribe 'dialogue.shh',                (a, data)=> @killTalking()

    @tokens = [token1, token2, token3, token4, token5, token6, token7, token8]

  # ------------------------------------ API

  activate : (@data) ->
    if !@data.timeline? then return

    # copy the items out of the timeline
    @timeline = []
    for item in @data.timeline
      @timeline.push item

    @sequence = new Sequence @timeline
    @playAction @sequence.getCurrentItem().action


  # WOAH! This method has gotten way out of hand,
  # break it up into functional chunks!!
  say : (text, audio, next, txtPos) ->
    # If there is text, show it
    if text?
      @actor.say text, txtPos
      @actor.startTalking()
    else
      @actor.hideText()

    if @timeout?
      clearTimeout @timeout

    # If there is audio, play it
    if audio?

      # If there is an old undestroyed track, take care of it
      if @track?
        @track.stop()
        @track.destroy()
        @track = null

      # # If this audio file errored out on load, or the sound is disabled
      # if aristotle.deadFiles[audio]? || !aristotle.sound
      #   PubSub.publish 'cc.temp.on'
      #
      #   # If the next item in the list was meant to trigger at the end
      #   # of the sound, or at the end of the sound we are running an action:
      #   if next == "audio" || typeof next == "object"
      #     me = @
      #     # Wait as long as the audio would have played, then either play
      #     # the next item in the list, or run an aristotle command
      #     @timeout = aristotle.timeout ()->
      #       PubSub.publish 'cc.temp.off'
      #       if next == 'audio'
      #         me.playNextAction()
      #       else if typeof next == "object"
      #         aristotle.commander.do next
      #     ,
      #       70 * text.length # (our dialogue averages about 70 ms per character)
      #
      #else

      @track = new AudioTrack(audio)
      if @track != false

        # Play, then on complete, play the next action if that
        # is how next is defined
        @track.play {}, ()=>

          if !@track?
            @playNextAction()
            return
          @track.destroy()
          @track = null
          @actor.stopTalking()
          @actor.hideText()
          # If next should trigger the next audio..
          if next == 'audio'
            @playNextAction()
          # else if it's an object, run a general aristotle command
          else if typeof next == "object"
            aristotle.commander.do next

      else
        if next == 'audio'
          @playNextAction()
        else if typeof next == "object"
          aristotle.commander.do next


    # If "next" param is to be a click generated via the actor
    if next == 'click'
      @actor.showNext()
    else
      @actor.hideNext()

    # In the strange event there there is no audio, but next is audio..
    if next == 'audio' && !audio?
      @playNextAction()

    # If "next" param is a number, count that many milliseconds and play next
    if typeof next == "number"
      @timeoutDuration = next
      aristotle.timeout ()=>
        @playNextAction()
      ,
        next

  pauseTimeline : () ->
    @track?.pause()
    @actor?.stopTalking()
    PubSub.publish "timers.pause"

  playTimeline  : () ->
    @track?.pausedPlay()
    @actor?.startTalking()
    PubSub.publish "timers.resume"

  replayTimeline : () ->
    @track?.stop()
    @sequence.reset()
    @playAction @sequence.getCurrentItem().action

  addEventListener : (data) ->
    if data.event == 'complete'
      @track.addOnComplete ()=>
        aristotle.commander.do data.action

  killTalking : () ->
    @track?.stop()
    @actor?.stopTalking()
    @actor?.complete()

  # ------------------------------------ Slide Sequencing

  complete : () ->
    PubSub.publish 'dialogue.complete'
    @actor.complete()

  playNextAction : () ->
    return if !@sequence?
    if @track? then @track.stop()
    if @sequence.isAtLastItem()
      @complete()
    else
      @sequence.next()
      @playAction @sequence.getCurrentItem().action

  # Play the specified action and set the action index to that action's index
  playAction : (actionId) ->
    if !@data.actions[actionId]? then aristotle.throw "Dialogue was asked to play the action named `#{actionId}`, but no action with that id exists." ; return

    # Apply default parameters to the action
    action = @overlayDefaults actionId

    oldActor = @actor
    @setActor action.actor

    if oldActor != undefined
      if oldActor != @actor
        oldActor.sleep()

    # Do any commander actions
    if action.action?
      aristotle.commander.do action.action, true

    @actor.special action
    @say action.text, action.audio, action.next, action.txtPos


  getIndexOfAction : (action) ->
    if !@timeline? then return 0

    for data, i in @timeline
      if data.action == action then return i

  overlayDefaults : (actionId) ->
    if !@data.defaults? then return @data.actions[actionId]
    # copy default actions into new object
    actions = JSON.parse JSON.stringify @data.defaults
    for key, val of @data.actions[actionId]
      actions[key] = val
    actions

  setActor : (actor) ->
    # if no actor specifiied, then use ctanlee
    if !actor? then @actor = @ctanlee; return

    switch actor
      when 'warcore', 'sektimus', 'firewall', 'packet'
        @actor = @cc
      else
        @actor = @ctanlee

  destroy : () ->
    @data     = null
    @timeline = null
    @sequence = null
    @ctanlee?.destroy()
    @cc?.destroy()

    if @track? then @track.stop()
    for token in @tokens
      PubSub.unsubscribe token
