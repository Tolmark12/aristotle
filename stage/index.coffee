getQueryVariable = (variable)->
  query = window.location.search.substring 1
  vars  = query.split "&"
  for item in vars
    pair = item.split "="
    if pair[0] == variable
      return pair[1]
  return false


# See if there is a GET var 'episode'
userSpecifiedEpisode = getQueryVariable 'episode'

# Load either the user specified episode, or a default one
episode = if !userSpecifiedEpisode then "/episodes/episode2" else "/episodes/#{userSpecifiedEpisode}"
aristotle = new Aristotle $(".holder"), episode

# ar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
# count = 0
# for letter in ar
#   console.log "            - depth: #{count++}, content: #{letter}.svg"
# for letter in ar
#   console.log "            - depth: #{count++}, content: z#{letter}.svg"
