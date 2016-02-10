module.exports = class AudioSprite

  constructor: ( @loadedCb, sprites ) ->
    window.addEventListener "beforeunload", ()=> @unloadAudio()
    aristotle.soundLib = @
    @sprites           = {}
    @ids               = {}
    @totalSprites      = sprites.length
    @loadedSprites     = 0
    @makeSprites sprites

  # Create a sound sprite for each sprite file
  makeSprites : (sprites) ->
    for sprite in sprites
      splits = sprite.split(".")[0].split "/"
      name   = splits[ splits.length - 1 ]
      @createSprite sprite, name

  # Howler sprite instance
  createSprite : (spriteJson, name) ->
    data              = preloader.preloadQueue.getResult spriteJson
    data.onload       = @onLoad
    data.onloaderror  = @onLoadError
    sprite            = new Howl data
    @sprites[name]    = sprite

  # Control
  play   : (name)          ->
    spriteName = @isolateSpriteName name
    id = @getSpriteByName( spriteName ).play( name )
    @ids[id] = spriteName
    return id

  pause  : (id)            -> @getSoundById( id ).pause id
  stop   : (id)            -> @getSoundById( id ).stop id
  volume : (volume, id)    -> @getSoundById( id ).volume volume, id
  on     : (event, fn, id) -> @getSoundById( id ).on  event, fn, id
  off    : (event, fn, id) -> @getSoundById( id ).off event, fn, id

  # ------------------------------------ Helpers

  # Get sound by the id returned from previous play
  getSoundById : (id) -> @sprites[ @ids[id] ]

  # Check each sprite json manifest to see if it has a sound with
  # this id, if it does, return the sound that holds that id
  getSpriteByName : (spriteName) ->
    if @sprites[spriteName]?
      return @sprites[spriteName]
    else
      aristotle.throw "Couldn't find the sound `#{name}` in any of the sprites!"

  isolateSpriteName : (fileName) ->
    console.log "...."
    console.log typeof fileName
    console.log fileName
    splits = fileName.split("?")
    if splits.length == 1
      return "dialogue"
    else
      return splits[1]

  # Events
  onLoad      : () => if @totalSprites == ++@loadedSprites then @loadedCb()
  onLoadError : () -> console.log "Could not load the audio sprite"

  # Cleanup on episode end
  unloadAudio : () =>
    for sprite in @sprites
      sprite.unload()
