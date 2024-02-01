const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      zoomFactor: 1.4
    }
  })

  win.maximize();
  win.loadURL('http://localhost:3000/')
}

app.whenReady().then(() => {
  createWindow()
})