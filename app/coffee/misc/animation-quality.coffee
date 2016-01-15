module.exports = class AnimationQuality

  constructor: () ->
    PubSub.subscribe 'animations.go.low',  (m, data)=> @changeAnimationQuality 'low'
    PubSub.subscribe 'animations.go.med',  (m, data)=> @changeAnimationQuality 'med'
    PubSub.subscribe 'animations.go.high', (m, data)=> @changeAnimationQuality 'high'

  changeAnimationQuality : (quality) ->
    bodymovin.setQuality quality