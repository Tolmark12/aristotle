module.exports = class ProgressMap

  constructor: (@$el) ->
    PubSub.subscribe 'episode.loaded', (m, data)=> @buildMap data

  buildMap : (data) ->
    mapData = @parseEpisodeData data
    $node = $ jadeTemplate['chrome-ui/progress-map']( mapData )
    @$el.append $node


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
    console.log items



  getItem : (slide) ->
    return null if !slide.ux?
    return null if !slide.ux.components?
    for component in slide.ux.components
      if component.kind == "quiz"
        return {kind:"quiz", title:"quiz"}
      else if component.kind == "duties"
        return {kind:"duties", title:"Duty Review"}
    return null



