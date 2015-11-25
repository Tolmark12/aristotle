# Global commands
Global commands can be fired from many different locations. They are useful for controlling aristotle.

## Todo
```
set.variable
read.variable
```

## Movie

#### movie.load-layer
Swaps out the content of a layer at a given depth and adds in new content at that depth.
```yaml
{cmd: movie.load-layer, data: {depth: 3, content: new-animation.json } }
```

#### movie.zoom
Zooms to a particular X/Y position and scale
```yaml
{cmd: movie.zoom, data: {scale: 2, x: 680, y: 635} }
```

## Slides

#### slides.next-slide
Move to the next slide
```yaml
{cmd: slides.next-slide}
```

## Items

#### highlight
Highlights the svg item with that id
```yaml
{cmd: highlight, data: {id: my-cool-item, level: green} }
```

#### unhighlight
Clears highlighting from the svg item with that id
```yaml
{cmd: unhighlight, data: my-cool-item }
```

## Ctanlee

#### ctanlee.activate
Activates ctanlee and has him play an item from his actions library. (see ctanlee documentation)
```yaml
{cmd: ctanlee.activate, data: action1}
```

#### ctanlee.clear
Clears the text from ctanlee, but doesn't send him to his home station

