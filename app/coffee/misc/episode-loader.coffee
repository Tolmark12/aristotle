module.exports = class EpisodeLoader

  constructor: (@callback) ->
    @loadConfigData()

  # Load the local config vars
  loadConfigData : () ->
    aristotle.getJson "local/#{aristotle.configFile}", (data)=>
      for key, val of data
        aristotle.globals.set key, val, false

      @setMicrosoftTrackingData()
      @loadEpisode()

  # Load the Episode
  loadEpisode: ()->
    mapName = aristotle.globals.get("episodeMapFiles")[aristotle.episodeNum]
    aristotle.getJson aristotle.getAssetPath( mapName ), (data)=>
      # Search through the map.yml and remove any object that has a `fid` listed in the filters array (defined in the config.json file)
      if aristotle.globals.get("filters")[aristotle.episodeNum]?
        @filter data, aristotle.globals.get("filters")[aristotle.episodeNum]
      @callback data

  # Microsoft app insights
  setMicrosoftTrackingData : () ->
    if !EpisodeLoader.hasSetMsftData
      EpisodeLoader.hasSetMsftData = true
      learnerId = aristotle.globals.get 'userId'
      apikey    = aristotle.globals.get 'apikey'
      appInsights.setAuthenticatedUserContext learnerId.replace(/[,;=| ]+/g, "_"), apikey.replace(/[,;=| ]+/g, "_")

  filter : (episodeData, filters) ->
    @filterItems episodeData.chapters, filters

    for chapter in episodeData.chapters
      @filterItems chapter.slides, filters

  filterItems : (items, filters)->
    # Start at the end of the array and count backwards
    for i in [items.length-1..0]
      if items[i].fid?              # if this slide has an fid
        if filters[items[i].fid]?   # if this fid exists in our list of filters, remove the slide
          items.splice i, 1
