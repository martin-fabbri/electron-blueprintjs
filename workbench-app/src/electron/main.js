const {app, BrowserWindow} = require('electron');
const path = require('path');

// require('electron-debug')();

let mainWindow;

// console.log('electron main!!!!');

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 600,
        show: false,
        titleBarStyle: 'hiddenInset',
        webPreferences: {
            devTools: true
        },
        width: 800,


    });

    mainWindow.loadURL('http://localhost:3000');

    mainWindow.on('ready-to-show', () => {
        mainWindow.show();
    });

});


