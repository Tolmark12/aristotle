AudioTrack = require 'episode/audio-track'

module.exports = class SoundFX

  constructor: () ->
    @count = 0
    @slots = {}
    PubSub.subscribe 'vcr.play',        (m, data)=> @vcrPlay()
    PubSub.subscribe 'vcr.pause',       (m, data)=> @vcrPause()
    PubSub.subscribe 'vcr.replay',      (m, data)=> @vcrReplay()
    PubSub.subscribe 'slides.changing', (m, data)=> @flushSfxStore()
    PubSub.subscribe 'sfx.add',         (m, data)=> @parseSFX data
    PubSub.subscribe 'playsound',       (m, data)=> @playSound data
    PubSub.subscribe 'sound.fadeout',   (m, data)=> @fadeOutSound data
    PubSub.subscribe 'sound.fadein',    (m, data)=> @fadeInSound data

  # ------------------------------------ VCR

  vcrPause  : () ->
    for key, sfx of @sfx
      sfx.track.sound.paused = true

  vcrPlay   : () ->
    for key, sfx of @sfx
      sfx.track.sound.paused = false

  vcrReplay : () ->
    ar = []
    for key, sfx of @sfx
      ar.push sfx.data
    @flushSfxStore()
    @parseSFX ar

  flushSfxStore : () ->
    for key, sfx of @sfx
      if !sfx.track.isDead
        sfx.track.destroy()
    @sfx = {}

  parseSFX : (data) ->
    if Array.isArray(data)
      for fx in data
        @addSoundEffect fx
    else
      @addSoundEffect data

  addSoundEffect : (data) ->
    if data.delay?
      aristotle.timeout ()=>
        @playSound data, true
      ,
        data.delay
    else
      @playSound data

  playSound : (data, saveToSfxStore) ->
    me = @
    track = new AudioTrack data.content
    track.play {volume:data.volume, loop:data.loop, offset:data.offset}, ()->

      # If this was in a slot, remove it from the slot
      if data.slot?
        delete me.slots[data.slot]

      # destroy the track and run any complete callbacks
      track.destroy()
      if data.complete?
        aristotle.commander.do data.complete

    if saveToSfxStore
      id = "s#{@count++}"
      @sfx[id] = { track:track, data:data }
      track.sfxId = id

    if data.slot?
      @clearSlotIfNeeded data, track

  fadeOutSound : (data) ->
    if data.slot?
      @slots[data.slot].fadeOut( data.duration )

  fadeInSound : (data) ->
    if data.slot?
      @slots[data.slot].fadeIn( data.duration )

  clearSlotIfNeeded : (data, track) ->
    # If there is audio in this slot, destroy it
    if @slots[data.slot]?
      @slots[data.slot].destroy()

    @slots[data.slot] = track




