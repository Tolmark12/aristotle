APIproxy      = require "misc/api-proxy"
ChromeUI      = require "chrome/chrome-ui"
Commander     = require 'misc/commander'
DevTools      = require 'misc/dev-tools'
Dictionary    = require 'misc/dictionary'
Episode       = require "episode/episode"
EpisodeLoader = require 'misc/episode-loader'
GlobalVars    = require 'misc/global-vars'
Logger        = require 'misc/logger'
Movie         = require 'movie/movie'
Parser        = require 'misc/parser'
SlideUX       = require 'slide-ux/slide-ux'
SoundFX       = require 'episode/soundfx'
isInternetExp = require 'misc/browser-detect'

class Aristotle

  constructor: ($el, @episodesDir, @localDir, @episodeNum) ->
    window.aristotle = @
    aristotle.isIE = isInternetExp()
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

    commander    = new Commander()
    dictionary   = new Dictionary()
    globals      = new GlobalVars()
    parser       = new Parser()
    soundFx      = new SoundFX()
    apiProxy     = new APIproxy "http://127.0.0.1:1337"
    @chromeUI    = new ChromeUI $(".chrome",   $base)
    @slideUX     = new SlideUX  $(".slide-ux", $base)
    @movie       = new Movie    $(".movie",    $base)

  setDevMode : (devMode) ->
    logger             = new Logger $('body'), devMode
    aristotle.devTools = new DevTools devMode

  getEpisodeRoot : (episodeNum) ->
    if !episodeNum? then episodeNum = @episodeNum
    return "#{@episodesDir}/episode#{episode}/"


window.Aristotle = Aristotle