Episode       = require "episode/episode"
ChromeUI      = require "chrome/chrome-ui"
DevTools      = require 'misc/dev-tools'
Movie         = require 'movie/movie'
EpisodeLoader = require 'misc/episode-loader'
SlideUX       = require 'slide-ux/slide-ux'
Commander     = require 'misc/commander'
GlobalVars    = require 'misc/global-vars'
Logger        = require 'misc/logger'

class Aristotle

  constructor: ($el, @episodeRoot) ->
    window.aristotle = @
    @setDevMode true
    @build $el
    episodeLoader = new EpisodeLoader @onJsonLoaded

  onJsonLoaded : (episodeData) =>
    episode = new Episode episodeData, @movie, @slideUX

  build : ($el) ->
    $base = $ jadeTemplate['aristotle']( {} )
    $el.append $base
    shadowIcons = new pxicons.ShadowIcons();
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, $base

    commander  = new Commander()
    globals    = new GlobalVars()
    @chromeUI  = new ChromeUI $(".chrome",   $base)
    @slideUX   = new SlideUX  $(".slide-ux", $base)
    @movie     = new Movie    $(".movie",    $base)

  setDevMode : (devMode) ->
    logger             = new Logger $('body'), devMode
    aristotle.devTools = new DevTools devMode


window.Aristotle = Aristotle