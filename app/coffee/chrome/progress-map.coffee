module.exports = class ProgressMap

  constructor: (@$el) ->
    PubSub.subscribe 'episode.loaded', (m, data)=>   @buildMap data
    PubSub.subscribe 'chapter.started', (m, data)=>  @lightIcon(data)
    PubSub.subscribe 'slide.activated', (m, data)=>  @lightIcon(data)
    PubSub.subscribe 'quiz.activated', (m, data)=>   @lightIcon(data)
    PubSub.subscribe 'duties.activated', (m, data)=> @lightIcon(data)

  lightIcon : (title) ->
    $el = $("##{ @titleToId(title) }", @$node)
    $el.addClass "viewed"
    $el.prevAll().addClass "viewed"

  buildMap : (data) ->
    mapData = @parseEpisodeData data
    @addIconData mapData
    @$node = $ jadeTemplate['chrome-ui/progress-map']( {milestones : mapData} )
    @$el.append @$node
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, @$node

    $(".milestone", @$node).on "click", (e)=> console.log "click"

  parseEpisodeData : (data) ->
    items = []
    for chapter in data.chapters
      items.push {kind: "chapter", title:chapter.title, id: @titleToId(chapter.title) }
      for slide in chapter.slides
        item = @getItem slide
        if slide.title?
          if !item? then item = {kind: "slide"}
          item.title = slide.title

        if item?
          item.id = @titleToId(item.title)
          items.push item
    items

  addIconData : (mapItems) ->
    for item in mapItems
      switch item.kind
        when "chapter" then item.icon = "chapter-progress-chapter"
        when "slide"   then item.icon = "chapter-progress-slide"
        when "quiz"    then item.icon = "chapter-progress-quiz"
        when "duties"  then item.icon = "chapter-progress-duties"

  titleToId : (title) ->
    title = title.replace /\s/g, '_'
    title.toLowerCase()

  getItem : (slide) ->
    return null if !slide.ux?
    return null if !slide.ux.components?
    for component in slide.ux.components
      if component.kind == "quiz"
        return {kind:"quiz", title:"quiz"}
      else if component.kind == "duties"
        return {kind:"duties", title:"Duty Review"}
    return null



