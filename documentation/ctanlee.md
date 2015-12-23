# Ctanlee

## Config Options

#### actions
An array of actions that ctanlee can run, each action can be configured via the attributes listed below:
#### text
Written Text
```yaml
text: I once dated a boiler, she was hot.
```

#### audio (required)
MP3 File :
```yaml
audio: some-audio-file.mp3
```

#### pos (optional)
Position (all params optional) _x[0], y[0], duration[600], delay[0]_ :
```yaml
pos: [100,100,1000,500]
```

#### emo (optional)
Emotion : angry, happy, down, left, right, surprise, unhappy
```yaml
emo: happy
```
#### delayMove (optional)
```yaml
# Will wait 2000 miliseconds (2 seconds) before moving  
delayMove: 2000
```

#### txtPos (optional)
Relative position of the textbox, defaults to `right, bottom`
```yaml
# Changing the text box y position to top
txtPos: top
# Changing the text box `y` position to `top` and the `x` position to `left`
txtPos: [top, left]

```


## EX : Running with no timeline:

```yaml
dialogue:
  global:
    emo: happy
    pos: [200, 200]
    next: btn
  actions:
    a:
      text: "I'm really happy with how things are turning out"
      audio: nothin-special.mp3
    b:
      text: "I'm turning out"
      audio: nothin-special.mp3
    c:
      text: " are turning out"
      audio: nothin-special.mp3
```

## EX : Running with a timeline:

Running with a timeline causes ctanlee to automatically play each action in the order specified.

```yaml
dialogue:
  timeline:
    - {action: first}
    - {action: second}
    - {action: later}
  actions:
    first:
      pos: [200, 200]
      emo: happy
      text: "I'm really happy with how things are turning out"
      audio: nothin-special.mp3
    second:
      pos: [300, 200, 2000, 1000]
      emo: angry
      text: "Sedoricus isat um tulk fortitus"
      audio: nothin-special.mp3
    later:
      pos: [300, 100]
      emo: down
      text: "Lorem ipsum"
      audio: nothin-special.mp3
```