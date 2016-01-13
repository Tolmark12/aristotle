module.exports = class EpisodeLoader

  constructor: (@callback) ->
    @loadConfigData()

  # Load the local config vars
  loadConfigData : () ->
    aristotle.getJson "local/config.json", (data)=>
      for key, val of data
        aristotle.globals.set key, val, false
      @loadEpisode()

  # Load the Episode
  loadEpisode: ()->
    aristotle.getJson aristotle.getAssetPath("map.json"), (data)=>
      @callback data

