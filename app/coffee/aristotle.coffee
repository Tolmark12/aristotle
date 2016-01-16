AnimationQuality = require 'misc/animation-quality'
APIproxy         = require "misc/api-proxy"
ChromeUI         = require "chrome/chrome-ui"
Commander        = require 'misc/commander'
DevTools         = require 'misc/dev-tools'
Dictionary       = require 'misc/dictionary'
Episode          = require "episode/episode"
EpisodeLoader    = require 'misc/episode-loader'
GlobalVars       = require 'misc/global-vars'
isInternetExp    = require 'misc/browser-detect'
JsonLoader       = require 'misc/json-loader'
LMSProxy         = require 'misc/lms-proxy'
Logger           = require 'misc/logger'
Movie            = require 'movie/movie'
Parser           = require 'misc/parser'
PausableDelays   = require 'misc/pausable-delays'
SlideUX          = require 'slide-ux/slide-ux'
SoundFX          = require 'misc/sfx'
SvgCartographer  = require 'misc/svg-cartographer'

class Aristotle

  constructor: (@$el, @episodesDir, @localDir, @devEpisodeNum, @isDevMode, @isLocal, sudo=false) ->
    @version         = { major:0, minor:1, feature:0, storeVersion:1 }
    window.aristotle = @
    aristotle.sudo   = sudo
    aristotle.isIE   = isInternetExp()
    animationQuality = new AnimationQuality()
    jsonLoaer        = new JsonLoader()
    globals          = new GlobalVars()
    commander        = new Commander()
    dictionary       = new Dictionary()
    lmsProxy         = new LMSProxy @isLocal
    apiProxy         = new APIproxy()
    parser           = new Parser()
    soundFx          = new SoundFX()
    pausableDelays   = new PausableDelays()
    cartographer     = new SvgCartographer()
    shadowIcons      = new pxicons.ShadowIcons()
    PubSub.publish 'animations.go.low'

    @setDevMode @isDevMode
    lmsProxy.begin @begin

    PubSub.subscribe 'episode.goto', (m, data)=> @gotoLocationByTitle data

  begin : () =>
    @setInitialEpisodeNum()
    PubSub.publish 'sessionkey.add'

    PubSub.subscribe 'episode.load', (m, data)=>
      @episodeNum = data
      @init()

    PubSub.publish 'episode.load', @episodeNum

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
    @episode.destroy()
    @chromeUI.destroy()
    @slideUX.destroy()
    @movie.destroy()
    @$el.empty()
    @episode = @chromeUI = @slideUX = @movie = null

  setDevMode : (devMode) ->
    logger             = new Logger $('body'), devMode
    aristotle.devTools = new DevTools devMode

  setInitialEpisodeNum : () ->
    # If a previous location has been stored, use that
    if aristotle.lmsProxy.store?
      if aristotle.lmsProxy.store.location?
        if aristotle.lmsProxy.store.location.episodeNum
          @episodeNum = aristotle.lmsProxy.store.location.episodeNum

    # If we're in dev mode and specified an episode, use that
    if @isDevMode && @devEpisodeNum?
      @episodeNum = @devEpisodeNum

    # If neither of the above conditions, default to first episode
    if !@episodeNum?
      @episodeNum = "0"

  gotoLocationByTitle : (title) ->
    aristotle.lmsProxy.saveState title
    @init()

window.Aristotle = Aristotle