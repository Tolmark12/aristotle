anim = ""
buildAnimation = () ->
  animData =
      wrapper: document.getElementById('bodymovin'),
      animType: 'svg',
      loop: false,
      prerender: true,
      autoplay: true,
      path: 'episodes/episode1/animations/interior_build.json'
  anim = bodymovin.loadAnimation(animData);

destroyAnimation = () ->
  anim.destroy()
  anim = null