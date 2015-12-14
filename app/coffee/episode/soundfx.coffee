AudioTrack  = require 'episode/audio-track'

module.exports = class SoundFX

  constructor: () ->
    PubSub.subscribe 'playsound', (m, data)=> @playSound data.file

  playSound : (file) ->
    track = new AudioTrack file
    track.play ()-> track.destroy()
