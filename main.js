const {app, BrowserWindow} = require('electron')
let win

app.on('ready', () => {
  win = new BrowserWindow({show: false})
  win.maximize()
  win.loadURL(`file://${__dirname}/app/index.html`)
  win.webContents.openDevTools()
  win.once('ready-to-show', () => {
    win.show()
  })
})
