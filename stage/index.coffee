getQueryVariable = (variable)->
  query = window.location.search.substring 1
  vars  = query.split "&"
  for item in vars
    pair = item.split "="
    if pair[0] == variable
      return pair[1]
  return false

episodes =
  dev:      "/episodes/dev"
  episode1: "/episodes/episode1"
  episode2: "/episodes/episode2"
  episode3: "/episodes/episode3"
  episode4: "/episodes/episode4"

# See if there is a GET var 'episode'
userSpecifiedEpisode = getQueryVariable 'episode'

# Load either the user specified episode, or a default one
episode = if !userSpecifiedEpisode then episodes.dev else episodes[userSpecifiedEpisode]
console.log episode
aristotle = new Aristotle $(".holder"), episode
