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
cache                = getQueryVariable 'cache'
isLocal              = getQueryVariable('local') == "true"

# Load either the user specified episode, or a default one
episode = if !userSpecifiedEpisode then "episode3" else "#{userSpecifiedEpisode}"

switch episode
  when "episode1" then episode = "1"
  when "episode2" then episode = "2"
  when "episode3" then episode = "3"
  when "episode4" then episode = "4"
  when "episode5" then episode = "5"
  when "episode6" then episode = "6"
  when "episode7" then episode = "7"


aristotle = new Aristotle $(".holder"), "episodes", "local", episode, true, isLocal

if cache == "false" then aristotle.dontCache = true



# ar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
# count = 0
# for letter in ar
#   console.log "            - depth: #{count++}, content: #{letter}.svg"
# for letter in ar
#   console.log "            - depth: #{count++}, content: z#{letter}.svg"
