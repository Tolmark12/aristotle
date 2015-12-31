getQueryVariable = (variable)->
  query = window.location.search.substring 1
  vars  = query.split "&"
  for item in vars
    pair = item.split "="
    if pair[0] == variable
      return pair[1]
  return false


# See if there is a GET var 'episode'
episode    = getQueryVariable 'episode'
cache      = getQueryVariable 'cache'
isDevMode  = getQueryVariable 'dev'
isLocal    = getQueryVariable('local') == "true"

# Load either the user specified episode, or a default one
aristotle = new Aristotle $(".holder"), "episodes", "local", episode, isDevMode, isLocal
if cache == "false" then aristotle.dontCache = true