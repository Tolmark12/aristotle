module.exports = class LogStache

  constructor : () ->
    window.log = ()->
    return
    
    @logs = @getLogStache()
    window.log = @log
    window.logstache = @

  log : (args...)=>
    if args.length == 1
      @logs[++@logs.total] = args[0]
    else
      @logs[++@logs.total] = args
    @save()

  clear     : ()-> localStorage.removeItem "logstache"
  toConsole : ()-> console.log @logs
  save      : ()-> localStorage.setItem "logstache", JSON.stringify @logs

  download : () ->
    blob = new Blob [localStorage.getItem("logstache")], {type: 'text/plain'}
    fileName = 'logs.json'
    if aristotle.isIE
      window.navigator.msSaveBlob blob, fileName
    else
      downloadLink           = document.createElement "a"
      downloadLink.download  = fileName
      downloadLink.innerHTML = "Download File"
      downloadLink.href      = window.URL.createObjectURL blob
      downloadLink.click()

  downloadOLD : ()->
    str = "data:text/csv;charset=utf-8,"
    str += localStorage.getItem "logstache"
    encodedUri = encodeURI str
    window.open encodedUri

  getLogStache : () ->
    storedStache = JSON.parse( localStorage.getItem("logstache") )
    if !storedStache?
      storedStache = {
        total  : -1
      }
    return storedStache