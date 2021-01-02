const { dialog } = require('electron');
const { autoUpdater } = require('electron-updater');
autoUpdater.logger = require("electron-log")
autoUpdater.logger.transports.file.level = "info"

module.exports = () => {

    
        console.log('checking for updates')
        autoUpdater.checkForUpdates()

        autoUpdater.on('update-downloaded', () => {
            dialog.showMessageBox({
                type: 'info',
                title: 'Atualização pronta!',
                message: 'Instalar e reiniciar agora?',
                buttons: ['Sim', 'Depois']
            }).then(result => {
                let buttonResult = result.response

                if (buttonResult == 0) autoUpdater.quitAndInstall(false, true)

                return
            })
        })

        autoUpdater.on('update-available', () => {
            dialog.showMessageBox({
                type: 'info',
                title: 'Atualização disponível',
                message: 'Uma nova versão do comanda está disponível. Você gostaria de atualizar?',
                buttons: ['Atualizar', 'Não']
            }).then(result => {
                let buttonResult = result.response

                if (buttonResult == 0) autoUpdater.downloadUpdate()
            })

        })

    }

 

function isDev() {
	return process.mainModule.filename.indexOf('app.asar') === -1;
}