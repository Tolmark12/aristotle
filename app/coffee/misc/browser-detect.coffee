module.exports = ->
  ua = window.navigator.userAgent
  msie = ua.indexOf('MSIE ')
  if msie > 0
    return true
    # IE 10 or older => return version number
    v = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10)
  trident = ua.indexOf('Trident/')
  if trident > 0
    return true
    # IE 11 => return version number
    rv = ua.indexOf('rv:')
    v  = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10)
  edge = ua.indexOf('Edge/')
  if edge > 0
    return true
    # IE 12 (aka Edge) => return version number
    v = parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10)
  # other browser
  false