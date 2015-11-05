module.exports = class DevTools

  constructor: () ->
    @stats = new Stats()
    @stats.setMode( 0 ) # 0: fps, 1: ms, 2: mb

    # align top-left
    @stats.domElement.style.position = 'absolute'
    @stats.domElement.style.left = '0px'
    @stats.domElement.style.top = '0px'

    document.body.appendChild( @stats.domElement )
    requestAnimationFrame( @update )

  update :()=>
    @stats.end()
    @stats.begin()
    #  monitored code goes here
    requestAnimationFrame( @update );

