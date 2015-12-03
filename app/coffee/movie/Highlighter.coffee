module.exports = class Highlighter

  constructor: (@$el) ->
    PubSub.subscribe 'highlight',   (m, data)=> @highlightElement data.id, data.color
    PubSub.subscribe 'unhighlight', (m, data)=> @unHighlightElement data

  highlightElement : ( elementId, color ) ->
    $item = $ "##{elementId}", @$el
    if $item.length == 0 then aristotle.throw "tried to highlight an element with the id `#{elementId}`, but found no elements with that id.", true
    $item.css filter : "url(#highlight)"

  unHighlightElement : ( elementId ) ->
    $item = $ "##{elementId}", @$el
    if $item.length == 0 then aristotle.throw "tried to unhighlight an element with the id `#{elementId}`, but found no elements with that id.", true
    $item.css filter : "initial"