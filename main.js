const {app, BrowserWindow} = require('electron')
let win

app.on('ready', () => {
  let {width, height} = require('electron').screen.getPrimaryDisplay().size
  win = new BrowserWindow({width: width, height: height, show: false})
  win.loadURL(`file://${__dirname}/app/index.html`)
  win.webContents.openDevTools()
  win.once('ready-to-show', () => {
    win.show()
  })
})
