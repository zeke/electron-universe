NodeList.prototype.forEach = Array.prototype.forEach

const {desktopCapturer, shell, remote} = require('electron')
const repos = require('repos-using-electron')
const slides = document.querySelectorAll('link[rel="import"]')

slides.forEach(function (slide) {
  let template = slide.import.querySelector('section')
  document.querySelector('body').appendChild(template)
})

document.addEventListener('keydown', event => {
  switch (event.key) {
    case 'Escape':
      let win = remote.getCurrentWindow()
      if (win.isFullScreen()) win.setFullScreen(false)
      break
  }
})

function updateDOM () {
  formatNumbers()
  openLinksExternally()
}

function formatNumbers () {
  document.querySelectorAll('.pretty-number').forEach(function (el) {
    el.textContent = Number(el.textContent).toLocaleString()
  })
}

// Open all http links in external browser
function openLinksExternally () {
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault()
      shell.openExternal(link.getAttribute('href'))
    })
  })
}
