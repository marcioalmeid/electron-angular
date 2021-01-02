const {app,dialog,Notification, BrowserWindow, ipcMain} = require('electron')
const updater = require('./src/updater')
const url = require("url");
const path = require("path");

let mainWindow

function createWindow () {
  setTimeout( updater, 1000)
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })


  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/index.html`),
      protocol: "file:",
      slashes: true
    })
  );
  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})

ipcMain.on('openModal', (event, arg) => {
  openModal()
})

function openModal(){
 
  let modal = new BrowserWindow({ parent: mainWindow, modal: true, show: false })
  modal.loadURL('http://marcio.mendes.website')
  modal.once('ready-to-show', () => {
    modal.show()
  })
}

function showNotification (title, body) {
	const notification = {
	  title: title,
	  body: body,
	  timeoutType :"never"
	}
	new Notification(notification).show()
  }

