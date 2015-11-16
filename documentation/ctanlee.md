## Ctanlee

### Config Options


#### actions
An array of actions that ctanlee can run, each action can be configured via the attributes listed below:
#### text (required)
Written Text
```text: I once dated a boiler, she was hot.```

#### audio (required)
MP3 File :
```audio: some-audio-file.mp3_```

#### pos (optional)
Position (params optional) _[x, y, delay, duration]_ :
```pos: [100,100,1000,500]```

#### emo (optional)
Emotion : _happy, sad, surprize_
```emo: happy```



### EX : Running with no timeline:

```yaml
ctanlee:
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

### EX : Running with a timeline:

Running with a timeline causes ctanlee to automatically play each action in the order specified.

```yaml
ctanlee:
  timeline:
    - {action: a}
    - {action: b}
    - {action: c}
  actions:
    a:
      pos: [200, 200]
      emo: happy
      text: "I'm really happy with how things are turning out"
      audio: nothin-special.mp3
    b:
      pos: [300, 200, 2000, 1000]
      emo: sad
      text: "I'm turning out"
      audio: nothin-special.mp3
    c:
      pos: [300, 100]
      emo: surprize
      text: " are turning out"
      audio: nothin-special.mp3
```