anim = ""
buildAnimation = () ->
  animData =
    # animType: 'svg',
    # wrapper: document.getElementById('bodymovin'),
    container: document.getElementById('bodymovin'),
    renderer: 'svg',
    loop: false,
    # prerender: true,
    autoplay: true,
    path: 'episodes/episode1/animations/interior_build.json'
    # path: 'episodes/episode1/animations/interior_build_1-20.json'
  anim = bodymovin.loadAnimation animData

destroyAnimation = () ->
  anim.destroy()
  anim = null

setTimeout ()=>
  buildAnimation()
,
  10000


setTimeout ()=>
  destroyAnimation()
,
  20000
