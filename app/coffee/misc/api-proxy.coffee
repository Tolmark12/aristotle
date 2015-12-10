module.exports = class APIproxy

  constructor: (@baseUrl) ->
    return
    aristotle.apiProxy = @
    @companyApiToken   = "COMPANY-API-TOKEN"
    @userApiToken      = "USER-API-TOKEN"

    @testCreate()
    @testGet()
    @testPut()

  testCreate : ()->
    @createUser (status, data, textStatus, errorThrown) =>
      switch status
        when 'done'
          console.log data
        when 'fail'
          aristotle.throw "API call failed : #{errorThrown}", true

  testPut : ()->
    @setUserDecisions (status, data, textStatus, errorThrown) =>
      switch status
        when 'done'
          console.log data
        when 'fail'
          aristotle.throw "API call failed : #{errorThrown}", true

  testGet : ()->
    @getUserDecisions (status, data, textStatus, errorThrown) =>
      switch status
        when 'done'
          console.log data
        when 'fail'
          aristotle.throw "API call failed : #{errorThrown}", true

  createUser          : (cb)-> @ajax "/companies/#{@companyApiToken}/users/create", cb, 'POST'
  setUserDecisions    : (cb)-> @ajax "/companies/#{@companyApiToken}/users/#{@userApiToken}/data", cb, 'PUT'
  getUserDecisions    : (cb)-> @ajax "/companies/#{@companyApiToken}/users/#{@userApiToken}/data", cb, 'GET'

  ajax : (url, cb, requestType="GET", data) ->
    console.log requestType
    $.ajax
      type : requestType
      url  : @baseUrl + url
      data : data
    .done (data)=>
      if typeof data == 'string'
        data = JSON.parse data
      cb 'done', data
    .fail (data, textStatus, errorThrown)=>
      try
        data = JSON.parse data.responseText
        # console.log arguments
      catch e
        data = {}
        console.log 'failed to parse json', data.responseText
      cb 'fail', data, textStatus, errorThrown
