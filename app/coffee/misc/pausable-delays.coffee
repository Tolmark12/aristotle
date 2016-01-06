module.exports = class PausableDelays

  constructor: () ->
    @count  = 0
    @timers = {}
    aristotle.timeout = @createTimeout
    PubSub.subscribe 'timer.destroy', (m, data)=> delete @timers[data]
    PubSub.subscribe 'timers.pause',  (m, data)=> @pauseTimers()
    PubSub.subscribe 'timers.resume', (m, data)=> @resumeTimers()

  pauseTimers  : () ->
    timer.pause() for key, timer of @timers

  resumeTimers : () ->
    timer.start() for key, timer of @timers

  createTimeout : (cb, delay) =>
    id = "time#{@count++}"
    @timers[id] = new Timer cb, delay, id
    @timers[id].start()

class Timer
  constructor:  (@cb, delay, @id) ->
    @remaining = delay

  start : ()->
    @running = true
    @started = new Date
    @ref = setTimeout ()=>
      @cb()
      PubSub.publish 'timer.destroy', @id
    ,
      @remaining

  pause : ()->
    @running = false
    clearTimeout @ref
    @remaining -= new Date - @started

  getTimeLeft : ()->
    if @running
      @pause()
      @start()
    return @remaining

  getStateRunning : ()-> @running

