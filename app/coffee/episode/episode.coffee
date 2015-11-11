Slides = require 'episode/slides'

module.exports = class Episode

  constructor: (trainingData, movie) ->
    @slides = new Slides trainingData, movie, @onSlidesComplete
    @slides.start()

  onSlidesComplete : () =>
    console.log "slides are complete"


