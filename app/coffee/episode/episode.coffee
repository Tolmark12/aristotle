Slides = require 'episode/slides'

module.exports = class Episode

  constructor: (trainingData, movie, ux) ->
    @slides = new Slides trainingData, movie, ux, @onSlidesComplete
    @slides.start()

  onSlidesComplete : () =>
    console.log "slides are complete"


