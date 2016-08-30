const {app, globalShortcut} = require('electron')
const {exec} = require('child_process')

const dedent = require('dedent-js')

const moveWindowToBounds = (x, y, width, height) => {
  const script = dedent`
  tell application "System Events"
      set activeApp to name of first application process whose frontmost is true
      set mainWindow to first window of my application activeApp
      set bounds of my mainWindow to {${x}, ${y}, ${width}, ${height}}
  end tell
  `.trim() + '\n'

  const child = exec('osascript', (err, out, stderr) => {
  })
  child.stdin.end(script)
}

const moveWindowToLeftHalf = () => {
  const screen = require('electron').screen
  const currentScreen = screen.getDisplayNearestPoint(screen.getCursorScreenPoint())
  let {width, height} = currentScreen.workAreaSize

  console.log('moving to left')
  moveWindowToBounds(0, 0, width / 2, height)
}

const moveWindowToRightHalf = () => {
  const screen = require('electron').screen
  const currentScreen = screen.getDisplayNearestPoint(screen.getCursorScreenPoint())
  let {width, height} = currentScreen.workAreaSize

  console.log('moving to right')
  moveWindowToBounds(width / 2, 0, width, height)
}

const fullWindow  = () => {
  const screen = require('electron').screen
  const currentScreen = screen.getDisplayNearestPoint(screen.getCursorScreenPoint())
  let {width, height} = currentScreen.workAreaSize

  console.log('moving to full screen')
  moveWindowToBounds(0, 0, width, height)
}

app.on('ready', () => {
  globalShortcut.register('Cmd+Option+Left', moveWindowToLeftHalf)
  globalShortcut.register('Cmd+Option+Right', moveWindowToRightHalf)
  globalShortcut.register('Cmd+Option+Up', fullWindow)
})