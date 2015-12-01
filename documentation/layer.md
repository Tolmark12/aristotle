## Layers
Layers are an array of items that specify what content to load at a particular depth

```coffeescript
movie:
  layers:
    - {depth: 0, content: smoke-bg.svg }
    - {depth: 1, content: steve/smoke.json, events: [complete], loop: false}
```

## Layer Options

#### depth (required)
The depth to place the layer at
```yaml
layers:
  - {depth: 0,  content: background.svg }
```

#### content (required?)
The name of the file to load at this depth.
```yaml
layers:
  - {depth: 3,  content: overlay-items.png }
  - {depth: 15, content: foreground-animation.json }
```
_IMPORTANT_: Files must be placed in the folder that matches their file type.
```yaml
mp3            ->  sounds/
svg            ->  animations/
jpg, png, gif  ->  assets/

```
Sub directories are allowed, for example:
```yaml
layers:
  - {depth: 0,  content: some/sub/directory/me.svg }
  # file expected to be at: assets/some/sub/directory/me.svg
```

#### wait (optional)
Optional number of milliseconds to wait before adding the content
```yaml
layers:
  - {depth: 6,  content: animation.json, wait: 1000 }
  # waits 1 second before adding the animations and playing it
```

#### background (optional)
Background of the layer, is directly aplied to the css background property, therefore, either of the following is valid:
```yaml
layers:
  - {depth: 6, background: red }
  - {depth: 6, background: #FF0000 }
  - {depth: 6, background: url(/path/to/some/image.png) }
  # waits 1 second before adding the animations and playing it
```


### Options specific to animations (files with .json extensions):

#### events
Fires a global event every time the event occurs.  

_options: complete, enterFrame_

_generates: layer.[depth].[event name]_
```yaml
# This would fire 'layer.1.complete' when the animation finishes.
# Also note that this slide will be complete when it "hears" the
# event : 'layer.1.complete'
movie:
  layers:
    - {depth: 1, content: anim.json, events: [complete] }
  duration: {kind: listen, event: layer.1.complete}  
```

#### loop (optional, defaults to false)
Set to true if you want the animation to continuously loop
```yaml
layers:
  - {depth: 0,  content: some/sub/directory/me.svg, loop: true }
```