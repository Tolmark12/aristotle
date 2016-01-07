AudioTrack = require 'episode/audio-track'

module.exports = class SoundFX

  constructor: () ->
    @count = 0
    PubSub.subscribe 'vcr.play',        (m, data)=> @vcrPlay()
    PubSub.subscribe 'vcr.pause',       (m, data)=> @vcrPause()
    PubSub.subscribe 'vcr.replay',      (m, data)=> @vcrReplay()
    PubSub.subscribe 'slides.changing', (m, data)=> @flushSfxStore()
    PubSub.subscribe 'sfx.add',         (m, data)=> @parseSFX data
    PubSub.subscribe 'playsound',       (m, data)=>
      @playSound data

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
    track = new AudioTrack data.content
    track.play {volume:data.volume, loop:data.loop, offset:data.offset}, ()->
      # track.isDonePlaying = true
      track.destroy()
      if data.complete?
        aristotle.commander.do data.complete
    if saveToSfxStore
      id = "s#{@count++}"
      @sfx[id] = { track:track, data:data }
      track.sfxId = id


