//BACKEND: Creates window

// READ FIRST:

// to run the application, open the terminal and type the command 'npm start'. this will
// run this main.js that was set in the package.json file on line 5. npm is the 'node package manager'
// similar to pip for python. you will also need to install node modules by typing 'npm prune' in the
// terminal. the node_modules file is too large to upload to github.

// requirements: Node.js, Electron.js, and git

const path = require('path');
const {app, BrowserWindow} = require('electron');

function createMainWindow(){
    const mainWindow = new BrowserWindow({
        width:800,
        height:600
    });

    mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
    
}

app.whenReady().then(() =>{
    createMainWindow();

});
