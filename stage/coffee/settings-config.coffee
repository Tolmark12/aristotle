module.exports = class SettingsConfig

  constructor: () ->

  getQueryVars : () ->
    queryVars =
      episode     : @getQueryVariable 'episode'
      cache       : @getQueryVariable 'cache'
      isDevMode   : @getQueryVariable 'dev'
      isLocal     : @getQueryVariable('local') == "true"
      sudo        : @getQueryVariable('sudo')  == "true"
      role        : @getQueryVariable 'role'
      episodeRoot : "episodes"
      localRoot   : "local"

    switch @getQueryVariable('role')
      when "cip-general-awareness" then queryVars.configFile = "config-cip-general-awareness.json"
      when "cip-sustainers"        then queryVars.configFile = "config-cip-sustainers.json"
      when "cip-users"             then queryVars.configFile = "config-cip-users.json"
      else                              queryVars.configFile = "config-cip-sustainers.json"

    return queryVars

  # ------------------------------------ Helper

  getQueryVariable : (variable)->
    query = window.location.search.substring 1
    vars  = query.split "&"
    for item in vars
      pair = item.split "="
      if pair[0] == variable
        return pair[1]
    return false