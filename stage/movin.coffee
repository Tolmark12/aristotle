anim = ""

buildAnimation = () ->
  animData =
    container: document.getElementById('bodymovin')
    renderer: 'svg'
    loop: false
    autoplay: true
    path: 'episodes/episode1/animations/interior_build.json'

  anim = bodymovin.loadAnimation animData
  anim.addEventListener "complete", ()=>
    console.log "complete"
  anim.addEventListener "data_ready", ()=>
    console.log "dataready"

destroyAnimation = () ->
  anim.destroy()
  anim = null

