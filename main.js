const {app, BrowserWindow} = require('electron')
let win

app.on('ready', () => {
  win = new BrowserWindow({fullscreen: true, show: false})
  win.loadURL(`file://${__dirname}/app/index.html`)
  win.once('ready-to-show', () => {
    win.show()
  })
})
