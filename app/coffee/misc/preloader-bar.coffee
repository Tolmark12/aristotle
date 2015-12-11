module.exports = class PreloaderBar

  constructor: (@$el) ->
    @$el = $('body')
    aristotle.preloadBar = @

  init : (title) ->
    @$node = $ jadeTemplate['misc/preloader-bar']( {title:title} )
    @$el.append @$node
    @$fg = $ ".fg", @$node

  update : (perc) ->
    @$fg.css width: "#{Math.round(perc*100)}%"

  complete : ()->
    @$node.addClass 'complete'
    @destroy()

  destroy : () ->
    @$node.velocity {opacity:0}, {delay:300, duration:400, complete:()=> @$node.remove()}
