const robot = require('robotjs')
const {width, height} = robot.getScreenSize()
const y = height - 50

robot.setMouseDelay(24)

for (let x = 0; x < width; x++) {
  robot.moveMouse(x, y)
}
