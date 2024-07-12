setInterval(function () {
  const show = document.querySelector('span1[data-show]')
  const next = show.nextElementSibling || document.querySelector('span1:first-child')
  const up = document.querySelector('span1[data-up]')
  
  if (up) {
    up.removeAttribute('data-up')
  }
  
  show.removeAttribute('data-show')
  show.setAttribute('data-up', '')
  
  next.setAttribute('data-show', '')
}, 2000)