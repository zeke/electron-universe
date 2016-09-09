NodeList.prototype.forEach = Array.prototype.forEach

const {desktopCapturer, shell, remote} = require('electron')
const inView = require('in-view')
// const repos = require('repos-using-electron')

require('./lib/slides')
require('./lib/carousel')
require('./lib/keyboard')

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

// Give each section an active class when it's visible in the viewport
inView('section').on('enter', el => {
  el.classList.add('active')
})
