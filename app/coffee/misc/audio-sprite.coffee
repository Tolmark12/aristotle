module.exports = class AudioSprite

  constructor: ( @loadedCb ) ->
    aristotle.soundLib = @

    data              = preloader.preloadQueue.getResult "~s/sprite.json"
    data.onload       = @onLoad
    data.onloaderror  = @onLoadError
    data.src          = [ aristotle.getAssetPath("~s/sprite.mp3") ]
    delete data.urls
    @sound            = new Howl data

  play   : (id)            -> @sound.play id
  stop   : (id)            -> @sound.stop id
  volume : (volume, id)    -> @sound.volume volume, id
  on     : (event, fn, id) -> @sound.on  event, fn, id
  off    : (event, fn, id) -> @sound.off event, fn, id


  onLoad : () => @loadedCb()

  onLoadError : () -> console.log "Could not load the audio sprite"
