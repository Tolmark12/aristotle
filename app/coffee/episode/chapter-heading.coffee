Preloader = require 'misc/asset-preloader'

module.exports = class ChapterHeading

  constructor: (data, @loadComplete) ->
    @$el = $('body')
    @$node = $ jadeTemplate['misc/chapter-heading']( {title:data.title, subtitle:data.subtitle} )
    @$el.append @$node
    @$fg = $ ".fg", @$node
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, @$node
    @preload data

  preload : (data) -> preloader = new Preloader data, @complete, @update

  update : (perc) => @$fg.css width: "#{Math.round(perc*100)}%"

  complete : ()=>
    @$node.addClass 'complete'
    @destroy()
    @loadComplete()

  destroy : () ->
    @$node.velocity {opacity:0}, {delay:300, duration:400, complete:()=> @$node.remove()}
