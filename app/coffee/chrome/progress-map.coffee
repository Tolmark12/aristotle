module.exports = class ProgressMap

  constructor: (@$el) ->
    token1  = PubSub.subscribe 'episode.loaded',   (m, data)=> @buildMap data
    token2  = PubSub.subscribe 'chapter.started',  (m, data)=> @lightIcon(data)
    token3  = PubSub.subscribe 'slide.activated',  (m, data)=> @lightIcon(data)
    token4  = PubSub.subscribe 'quiz.activated',   (m, data)=> @lightIcon(data)
    token5  = PubSub.subscribe 'duties.activated', (m, data)=> @lightIcon(data)
    @tokens = [token1,token2,token3,token4,token5]

  lightIcon : (title) ->
    $el = $("##{ @titleToId(title) }", @$node)
    $el.addClass "viewed"
    $el.prevAll().addClass "viewed"
    $el.nextAll().removeClass "viewed"

  buildMap : (data) ->
    mapData = @parseEpisodeData data
    @addIconData mapData
    @$node = $ jadeTemplate['chrome-ui/progress-map']( {milestones : mapData} )
    @$el.append @$node
    shadowIconsInstance.svgReplaceWithString pxSvgIconString, @$node

    $milestone = $(".milestone", @$node)
    # If sudo is true, allow jumping around in the episode
    if aristotle.sudo
      $milestone.on "click",   (e)=> @onMileStoneClick $(e.currentTarget)
    # else, only allow clicking on chapters that are already completed
    else
      $(".chapter", @$node).on "click", (e)=> @onChapterClick $(e.currentTarget)

    $milestone.on "mouseover", (e)=> @onMileStoneOver $(e.currentTarget)
    $milestone.on "mouseout",  (e)=> @onMileStoneOut $(e.currentTarget)

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
    title = title.replace /([\!\?\'])/g, '' # remove any '!' or '?' symbols
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

  # ------------------------------------ Events

  onChapterClick : ($el) ->
    return if !$el.hasClass "viewed" #Stop if this slide hasn't been viewed
    PubSub.publish 'episode.goto', $el.attr "data-title"
  onMileStoneClick : ($el) ->
    # return if !$el.hasClass "viewed" #Stop if this slide hasn't been viewed
    PubSub.publish 'episode.goto', $el.attr "data-title"
  onMileStoneOver  : ($el) ->
    return if !$el.hasClass "viewed" #Stop if this slide hasn't been viewed
    PubSub.publish 'label.attach', { el:$el, content:{title: $el.attr("data-title")} }
  onMileStoneOut   : ($el) ->
    PubSub.publish 'label.destroy', $el

  destroy : () ->
    for token in @tokens
      PubSub.unsubscribe token


