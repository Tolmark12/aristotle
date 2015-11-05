Episode  = require "episode/episode"
ChromeUI = require "chrome/chrome-ui"
DevTools = require 'misc/dev-tools'
Movie    = require 'movie/movie'

class Aristotle

  constructor: ($el, episodeRoot) ->
    shadowIcons  = new pxicons.ShadowIcons();
    @build($el)
    devTools = new DevTools()

  build : ($el) ->
    $base = $ jadeTemplate['aristotle']( {} )
    $el.append $base
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, $base

    @chromeUI = new ChromeUI $(".chrome", $base)
    @movie    = new Movie    $(".movie",  $base)

    @loadEpisode "/assets/episode1"

  loadEpisode: (episodeRoot)->
    Aristotle.episodeRoot = episodeRoot
    @loadJson Aristotle.episodeRoot + "/map.json", (result)=>
      episode = new Episode JSON.parse(result), @movie

  loadJson : (path, onComplete) ->
    xobj = new XMLHttpRequest()
    xobj.overrideMimeType 'application/json'
    xobj.open 'GET', path, true
    xobj.onreadystatechange = ()=>
      if xobj.readyState == 4 && xobj.status == 200
        onComplete xobj.responseText
    xobj.send(null)

window.Aristotle = Aristotle