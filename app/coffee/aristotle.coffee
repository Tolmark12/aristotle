Episode       = require "episode/episode"
ChromeUI      = require "chrome/chrome-ui"
DevTools      = require 'misc/dev-tools'
Movie         = require 'movie/movie'
EpisodeLoader = require 'misc/episode-loader'
SlideUX       = require 'slide-ux/slide-ux'

class Aristotle

  constructor: ($el, @episodeRoot) ->
    window.aristotle = @
    @build $el
    episodeLoader = new EpisodeLoader @onJsonLoaded
    devTools      = new DevTools()

  onJsonLoaded : (json) =>
    episode = new Episode JSON.parse(json), @movie

  build : ($el) ->
    $base = $ jadeTemplate['aristotle']( {} )
    $el.append $base
    shadowIcons = new pxicons.ShadowIcons();
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, $base

    @chromeUI = new ChromeUI $(".chrome",   $base)
    @slideUI  = new SlideUX  $(".slide-ux", $base)
    @movie    = new Movie    $(".movie",    $base)


window.Aristotle = Aristotle