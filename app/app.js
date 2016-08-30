const {desktopCapturer, remote} = require('electron')

document.addEventListener('keydown', event => {
  switch (event.key) {
    case 'Escape':
      if (remote.getCurrentWindow().isFullScreen()) {
        remote.getCurrentWindow().setFullScreen(false)
      }
      break
  }
})

navigator.webkitGetUserMedia({video: true},
  function(stream) {
    NodeList.prototype.forEach = Array.prototype.forEach
    document.querySelectorAll('#camera video').forEach(function (el) {
      el.src = URL.createObjectURL(stream)
    })
  },
  function() {
    console.error('could not connect stream')
  }
)
