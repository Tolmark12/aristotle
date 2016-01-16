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
      @callback data


  # Microsoft app insights
  setMicrosoftTrackingData : () ->
    if !EpisodeLoader.hasSetMsftData
      EpisodeLoader.hasSetMsftData = true
      learnerId = aristotle.globals.get 'userId'
      apikey    = aristotle.globals.get 'apikey'
      appInsights.setAuthenticatedUserContext learnerId.replace(/[,;=| ]+/g, "_"), apikey.replace(/[,;=| ]+/g, "_")
