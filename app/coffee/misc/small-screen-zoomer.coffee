# The training is shown on some old monitors, if the screen is
# small, shrink the page to fit
module.exports = () ->
  if screen.height <= 600
    document.body.style.zoom="60%"
  else if screen.height <= 720
    document.body.style.zoom="75%"
  else if screen.height <= 768
    document.body.style.zoom="80%"
  else if screen.height <= 800
    document.body.style.zoom="85%"