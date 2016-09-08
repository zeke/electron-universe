document.addEventListener('keyup', event => {
  switch (event.key) {
    case 'Escape':
      let win = remote.getCurrentWindow()
      if (win.isFullScreen()) win.setFullScreen(false)
      break
  }
})
