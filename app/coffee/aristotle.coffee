APIproxy      = require "misc/api-proxy"
ChromeUI      = require "chrome/chrome-ui"
Commander     = require 'misc/commander'
DevTools      = require 'misc/dev-tools'
Episode       = require "episode/episode"
EpisodeLoader = require 'misc/episode-loader'
GlobalVars    = require 'misc/global-vars'
Logger        = require 'misc/logger'
Movie         = require 'movie/movie'
Parser        = require 'misc/parser'
PreloaderBar  = require 'misc/preloader-bar'
SlideUX       = require 'slide-ux/slide-ux'
isInternetExp = require 'misc/browser-detect'

class Aristotle

  constructor: ($el, @episodesDir, @episodeNum) ->
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
    globals      = new GlobalVars()
    parser       = new Parser()
    preloaderBar = new PreloaderBar $base
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

  # Move somewhere else..
  getAssetPath : (asset) ->
    #
    if asset == "map.json"                     then contentDir = ""
    else if  /.mp3|.m4a/.test(asset)           then contentDir = "sounds/"
    else if /.json/.test(asset)                then contentDir = "animations/"
    else if /.svg|.jpg|.jpeg|.png/.test(asset) then contentDir = "assets/"

    if asset.charAt(0) == "@"
      episodeNum = str.substr(1, 1)
      asset = str.substr(3)
    else
      episodeNum = @episodeNum

    return "#{@episodesDir}/episode#{episodeNum}/#{contentDir}#{asset}"


window.Aristotle = Aristotle