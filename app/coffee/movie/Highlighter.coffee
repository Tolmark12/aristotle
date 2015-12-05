module.exports = class Highlighter

  constructor: (@$el, @dynamicAssets) ->
    PubSub.subscribe 'highlight', (m, data)=>
      if Array.isArray data.id
        @highlightElement item, data.level, data.label for item in data.id
      else
        @highlightElement data.id, data.level, data.label

    PubSub.subscribe 'unhighlight', (m, data)=>
      if m == "unhighlight.all"
        @unhighlightAll()
      else
        if Array.isArray data
            @unHighlightElement item for item in data
        else
          @unHighlightElement data

  highlightElement : ( elementId, color, label ) ->
    $item = $ "##{elementId}", @$el
    $item.attr "class", "filter-highlighted"
    if $item.length == 0 then aristotle.throw "tried to highlight an element with the id `#{elementId}`, but found no elements with that id.", true

    switch color
      when 'blue'   then filterId = "highlightBlue"
      when 'orange' then filterId = "highlightOrange"
      when 'yellow' then filterId = "highlightYellow"


    $item.css filter : "url(##{filterId})"

  unHighlightElement : ( elementId ) ->
    $item = $ "##{elementId}", @$el
    $item.attr "class", ""
    if $item.length == 0 then aristotle.throw "tried to unhighlight an element with the id `#{elementId}`, but found no elements with that id.", true
    $item.css filter : "initial"

  unhighlightAll : () ->
    $items = $ ".filter-highlighted"
    $items.attr "class", ""
    $items.css filter : "initial"