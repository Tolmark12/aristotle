module.exports = class ProgressMap

  constructor: (@$el) ->
    PubSub.subscribe 'episode.loaded', (m, data)=> @buildMap data

  buildMap : (data) ->
    mapData = @parseEpisodeData data
    @addIconData mapData
    console.log mapData
    $node = $ jadeTemplate['chrome-ui/progress-map']( {milestones : mapData} )
    @$el.append $node
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, $node

  parseEpisodeData : (data) ->
    items = []
    for chapter in data.chapters
      items.push {kind: "chapter", title:chapter.title}
      for slide in chapter.slides

        item = @getItem slide
        if slide.title?
          if !item? then item = {kind: "slide"}
          item.title = slide.title

        if item?
          items.push item
    items

  addIconData : (mapItems) ->
    for item in mapItems
      switch item.kind
        when "chapter" then item.icon = "chapter-progress-chapter"
        when "slide"   then item.icon = "chapter-progress-slide"
        when "quiz"    then item.icon = "chapter-progress-quiz"
        when "duties"  then item.icon = "chapter-progress-duties"



  getItem : (slide) ->
    return null if !slide.ux?
    return null if !slide.ux.components?
    for component in slide.ux.components
      if component.kind == "quiz"
        console.log "quix"
        return {kind:"quiz", title:"quiz"}
      else if component.kind == "duties"
        console.log "dutz"
        return {kind:"duties", title:"Duty Review"}
    return null



