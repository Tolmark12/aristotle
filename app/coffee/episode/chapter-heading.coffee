AssetPreloader = require 'misc/asset-preloader'

module.exports = class ChapterHeading

  constructor: (data, @loadComplete) ->
    @$el = $('body')
    @$node = $ jadeTemplate['misc/chapter-heading']( {title:data.title, subtitle:data.subtitle} )
    @$el.append @$node
    @$fg = $ ".fg", @$node # (Forground progress bar)
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, @$node
    @preload data

  preload : (data) ->
    preloader = new AssetPreloader data, @complete, @update, @setLoadingContext

  update : (perc) =>
    if perc > 1 then perc = 1 # Don't allow the bar to grow longer than 1..
    @$fg.css width: "#{Math.round(perc*100)}%"

  setLoadingContext : (message) ->
    $(".sub-title" , @$node).html message

  complete : ()=>
    @$node.addClass 'complete'
    @destroy()
    @loadComplete()

  destroy : () ->
    @$node.velocity {opacity:0}, {delay:300, duration:400, complete:()=> @$node.remove()}
