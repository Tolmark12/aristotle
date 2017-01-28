module.exports = class IframeCreator

  makeIframe : ($holder)->
    if window.domain?
      baseUrl    = window.domain
      indexPath  = "#{window.domain}/"
    else
      baseUrl    = "#{window.location.protocol}//#{window.location.host}"
      indexPath  = ""

    $holder.html "<iframe id=iframe src='#{indexPath}index.html' width='100%' height='768px' scrolling='no'></iframe>"
    return baseUrl
