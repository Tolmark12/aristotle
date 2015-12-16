AudioTrack  = require 'episode/audio-track'

module.exports = class SoundFX

  constructor: () ->
    PubSub.subscribe 'playsound', (m, data)=> @playSound data

  playSound : (data) ->
    track = new AudioTrack data.file
    track.play ()->
      track.destroy()
      if data.complete?
        aristotle.commander.do data.complete

