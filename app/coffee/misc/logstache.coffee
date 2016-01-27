module.exports = class LogStache

  constructor : () ->
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
  save      : () -> localStorage.setItem "logstache", JSON.stringify @logs

  download : ()->
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