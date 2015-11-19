module.exports = class Highlighter

  constructor: (@$el) ->
    PubSub.subscribe 'highlight',   (m, data)=> @highlightElement data.id, data.color
    PubSub.subscribe 'unhighlight', (m, data)=> @unHighlightElement data

  highlightElement : ( elementId, color ) ->
    $("##{elementId}", @$el).css filter : "url(#highlight)"

  unHighlightElement : ( elementId ) ->
    $("##{elementId}", @$el).css filter : "initial"