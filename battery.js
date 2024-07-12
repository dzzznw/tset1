
let progress = 0

function run() {
  if (progress < 1) {
    progress = parseFloat((progress + 0.012).toFixed(2))
    
    document.querySelector('h6').style.setProperty('--progress', progress)
    
    setTimeout(run, 20)
  }
}
function showonmouseover() {
  run()
}
