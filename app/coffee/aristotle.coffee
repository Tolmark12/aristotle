ChromeUI      = require "chrome/chrome-ui"
Commander     = require 'misc/commander'
DevTools      = require 'misc/dev-tools'
Dictionary    = require 'misc/dictionary'
Episode       = require "episode/episode"
EpisodeLoader = require 'misc/episode-loader'
GlobalVars    = require 'misc/global-vars'
LMSProxy      = require 'misc/lms-proxy'
Logger        = require 'misc/logger'
Movie         = require 'movie/movie'
Parser        = require 'misc/parser'
SlideUX       = require 'slide-ux/slide-ux'
SoundFX       = require 'episode/soundfx'
isInternetExp = require 'misc/browser-detect'

class Aristotle

  constructor: (@$el, @episodesDir, @localDir, @episodeNum, isDevMode, @isLocal) ->
    window.aristotle = @
    aristotle.isIE = isInternetExp()
    commander      = new Commander()
    dictionary     = new Dictionary()
    globals        = new GlobalVars()
    lmsProxy       = new LMSProxy @isLocal
    parser         = new Parser()
    soundFx        = new SoundFX()
    shadowIcons    = new pxicons.ShadowIcons()
    @setDevMode isDevMode
    lmsProxy.begin @begin

  begin : () =>
    console.log aristotle.lmsProxy.store
    if aristotle.lmsProxy.store?
      if aristotle.lmsProxy.store.location?
        if aristotle.lmsProxy.store.location.episodeNum
          @episodeNum = aristotle.lmsProxy.store.location.episodeNum

    PubSub.subscribe 'episode.load', (m, data)=>
      @episodeNum = data
      @init()

    PubSub.publish 'episode.load', @episodeNum

  init : () ->
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
    $base = null
    @episode.destroy()
    @chromeUI.destroy()
    @slideUX.destroy()
    @movie.destroy()
    @$el.empty()
    @episode = @chromeUI = @slideUX = @movie = null

  setDevMode : (devMode) ->
    logger             = new Logger $('body'), devMode
    aristotle.devTools = new DevTools devMode

  getEpisodeRoot : (episodeNum) ->
    if !episodeNum? then episodeNum = @episodeNum
    return "#{@episodesDir}/episode#{episode}/"


window.Aristotle = Aristotle