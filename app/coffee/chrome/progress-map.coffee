module.exports = class ProgressMap

  constructor: () ->
    PubSub.subscribe 'episode.loaded', (m, data)=> @parseEpisodeData data

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
        console.log "quix"
        return {kind:"quiz", title:"quiz"}
      else if component.kind == "duties"
        console.log "dutz"
        return {kind:"duties", title:"Duty Review"}
    return null



