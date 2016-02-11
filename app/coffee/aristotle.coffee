AnimationQuality  = require 'misc/animation-quality'
APIproxy          = require "misc/api-proxy"
ChromeUI          = require "chrome/chrome-ui"
Commander         = require 'misc/commander'
DevTools          = require 'misc/dev-tools'
Dictionary        = require 'misc/dictionary'
Episode           = require "episode/episode"
EpisodeLoader     = require 'misc/episode-loader'
GlobalVars        = require 'misc/global-vars'
isInternetExp     = require 'misc/browser-detect'
JsonLoader        = require 'misc/json-loader'
LocalStorageProxy = require 'misc/local-storage-proxy'
Logger            = require 'misc/logger'
LogStache         = require 'misc/logstache'
Movie             = require 'movie/movie'
Parser            = require 'misc/parser'
PausableDelays    = require 'misc/pausable-delays'
SlideUX           = require 'slide-ux/slide-ux'
SoundFX           = require 'misc/sfx'
smallScreenZoom   = require 'misc/small-screen-zoomer'
SvgCartographer   = require 'misc/svg-cartographer'

class Aristotle

  constructor: (@$el) ->
    window.aristotle   = @
    globals            = new GlobalVars()
    @localStorageProxy = new LocalStorageProxy @letsGo
    PubSub.subscribe 'episode.goto', (m, data)=> @gotoLocationByTitle data.slide, data.chapter

  letsGo : () =>
    aristotle.isIE    = isInternetExp()
    animationQuality  = new AnimationQuality()
    jsonLoaer         = new JsonLoader()
    commander         = new Commander()
    dictionary        = new Dictionary()
    logStache         = new LogStache()
    apiProxy          = new APIproxy()
    parser            = new Parser()
    soundFx           = new SoundFX()
    pausableDelays    = new PausableDelays()
    cartographer      = new SvgCartographer()
    shadowIcons       = new pxicons.ShadowIcons()
    PubSub.publish 'animations.go.low'
    @setDevMode @isDevMode
    smallScreenZoom()
    @begin()

  begin : () =>
    @setInitialEpisodeNum()
    PubSub.publish 'sessionkey.add'

    PubSub.subscribe 'episode.load', (m, data)=>
      @episodeNum = data
      @init()

    PubSub.publish 'episode.load', @episodeNum
    log "*************** EPISODE #{@episodeNum}"

  init : () ->
    # If chromeui exists, then an episode is already
    # loaded and needs to be deleted / cleared first
    if @chromeUI?
      @deleteOldAssets()
    @build()
    episodeLoader = new EpisodeLoader @onJsonLoaded

  onJsonLoaded : (episodeData) =>
    @episode = new Episode episodeData, @movie, @slideUX, @chromeUI

  build : () ->
    $base = $ jadeTemplate['aristotle']( {} )
    @$el.append $base
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, $base
    @chromeUI    = new ChromeUI $(".chrome",   $base)
    @slideUX     = new SlideUX  $(".slide-ux", $base)
    @movie       = new Movie    $(".movie",    $base)

  deleteOldAssets : () ->
    @episode?.destroy()
    @chromeUI?.destroy()
    @slideUX?.destroy()
    @movie?.destroy()
    @$el.empty()
    @episode = @chromeUI = @slideUX = @movie = null

  setDevMode : (devMode) ->
    logger             = new Logger $('body'), devMode
    aristotle.devTools = new DevTools devMode

  setInitialEpisodeNum : () ->
    # If a previous location has been stored, use that
    if aristotle.localStorageProxy.store?
      if aristotle.localStorageProxy.store.location?
        if aristotle.localStorageProxy.store.location.episodeNum
          @episodeNum = aristotle.localStorageProxy.store.location.episodeNum

    # If we're in dev mode and specified an episode, use that
    if @isDevMode && @devEpisodeNum != false
      @episodeNum = @devEpisodeNum

    # If neither of the above conditions, default to first episode
    if !@episodeNum
      @episodeNum = "0"


  gotoLocationByTitle : (title, chapter) ->
    aristotle.localStorageProxy.saveState title, chapter
    @init()

window.Aristotle = Aristotle