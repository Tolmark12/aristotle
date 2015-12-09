ChromeUI      = require "chrome/chrome-ui"
Commander     = require 'misc/commander'
DevTools      = require 'misc/dev-tools'
Episode       = require "episode/episode"
EpisodeLoader = require 'misc/episode-loader'
GlobalVars    = require 'misc/global-vars'
Logger        = require 'misc/logger'
Movie         = require 'movie/movie'
Parser        = require 'misc/parser'
SlideUX       = require 'slide-ux/slide-ux'

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
    parser     = new Parser()
    @chromeUI  = new ChromeUI $(".chrome",   $base)
    @slideUX   = new SlideUX  $(".slide-ux", $base)
    @movie     = new Movie    $(".movie",    $base)

  setDevMode : (devMode) ->
    logger             = new Logger $('body'), devMode
    aristotle.devTools = new DevTools devMode


window.Aristotle = Aristotle