http    = require("http")
nock    = require('nock')
request = require('request')

createServer = () ->
  http.createServer((req, resp) =>
    switch req.method
      when "GET"
        request.get("http://asdf.com#{req.url}").pipe(resp)
      when  "PUT"
        request.put("http://asdf.com#{req.url}").pipe(resp)
      when "POST"
        request.post("http://asdf.com#{req.url}").pipe(resp)
      when "OPTIONS"
        resp.writeHead(200, {"Content-Type": "text/plain", "Access-Control-Allow-Origin":"*", 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE'})
        resp.end()
    return
  ).listen 1337, "127.0.0.1"

  console.log "API simulation server running at http://127.0.0.1:1337/"

initNock = () ->
  baseDelay = 0
  randDelay = 0
  for data in API
    n = nock('http://asdf.com')
    n.persist()
    switch data.method
      when 'PUT'  then x = n.put  data.path
      when 'POST' then x = n.post data.path
      else             x = n.get  data.path

    response_code = if data.response_code? then data.response_code else 200
    delete data.method
    delete data.response_code
    delete data.path

    x.delay baseDelay + Math.random()* randDelay
    x.reply response_code, JSON.stringify(data), {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE'}

API = [
  # Create a new user, returns their api token
  path: '/companies/COMPANY-API-TOKEN/users/create'
  response_code     : 200
  method            : "POST"
  user_api_token    : "ABCD1234"
,
  # Set data about a particular user, such as their email and facility choice
  # ex data : "{personal: {email:john@doe.com, name:"John Doe"}}"
  path: '/companies/COMPANY-API-TOKEN/users/USER-API-TOKEN/data'
  method            : "PUT"
,
  # Save a user's progress (episode / chapter)
  # ex data : "{episode:1, chapter:2}"
  path: '/companies/COMPANY-API-TOKEN/users/USER-API-TOKEN/progress'
  method            : "PUT"
,
  # Save a user's test results, we could do strings or percentages, whichever is needed
  # ex data : { score:0.89, questions: [ {id:1, score:0.75}, {id:2, score:1}, etc.. ] }
  path: '/companies/COMPANY-API-TOKEN/users/USER-API-TOKEN/test-results'
  method            : "PUT"
,
  # Get company specific data about an episode for test section
  path: '/companies/COMPANY-API-TOKEN/episodes/2/averages'
  method            : "GET"
  data              :
    decisionAvgs    :
      acsAvgs       :
        "HAL 90"    : 0.35
        "LOREM"     : 0.24
        "IPSUM"     : 0.41
      buildingAvgs  :
        "LOREM"     : 0.34
        "IPSUM"     : 0.31
        "DELOR"     : 0.35

,
  # Get data about a particular user
  path: '/companies/COMPANY-API-TOKEN/users/USER-API-TOKEN/data'
  method            : "GET"
  data              :
    personal        :
      email         : "john@doe.com"
      name          : "John Doe"
      company       : "Arizona Public Service"
      callSign      : "Radar"
    globals         :
      facility      : "substation"
      facilityBuild : "substation_facility_build.json"
      facilityLoop  : "substation_facility_loop.json"
]


initNock()
createServer()