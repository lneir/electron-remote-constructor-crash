# electron-remote-constructor-crash
This project demonstrates crash that occurs in electron when creating a remote object.
repo steps:
- npm install
- npm run start
- in main window press 'add object tag' button
- in main window press 'create remote' button
Result: crash in renderer console...

Uncaught Error: Cannot call constructor on missing remote object 6
Error: Cannot call constructor on missing remote object 6
    at throwRPCError (/Users/lneir/IntelliJProjects/tests/electron-bugs/electron-remote-constructor-crash/node_modules/electron/dist/Electron.app/Contents/Resources/electron.asar/browser/rpc-server.js:143:17)
    at EventEmitter.<anonymous> (/Users/lneir/IntelliJProjects/tests/electron-bugs/electron-remote-constructor-crash/node_modules/electron/dist/Electron.app/Contents/Resources/electron.asar/browser/rpc-server.js:303:7)
    at emitThree (events.js:116:13)
    at EventEmitter.emit (events.js:194:7)
    at WebContents.<anonymous> (/Users/lneir/IntelliJProjects/tests/electron-bugs/electron-remote-constructor-crash/node_modules/electron/dist/Electron.app/Contents/Resources/electron.asar/browser/api/web-contents.js:256:37)
    at emitTwo (events.js:106:13)
    at WebContents.emit (events.js:191:7)
    at throwRPCError (/Users/lneir/IntelliJProjects/tests/electron-bugs/electron-remote-constructor-crash/node_modules/electron/dist/Electron.app/Contents/Resources/electron.asar/browser/rpc-server.js:143:17)
    at EventEmitter.<anonymous> (/Users/lneir/IntelliJProjects/tests/electron-bugs/electron-remote-constructor-crash/node_modules/electron/dist/Electron.app/Contents/Resources/electron.asar/browser/rpc-server.js:303:7)
    at emitThree (events.js:116:13)
    at EventEmitter.emit (events.js:194:7)
    at WebContents.<anonymous> (/Users/lneir/IntelliJProjects/tests/electron-bugs/electron-remote-constructor-crash/node_modules/electron/dist/Electron.app/Contents/Resources/electron.asar/browser/api/web-contents.js:256:37)
    at emitTwo (events.js:106:13)
    at WebContents.emit (events.js:191:7)
    at metaToValue (<anonymous>:552:13)
    at new remoteFunction (<anonymous>:565:20)
    at HTMLButtonElement.<anonymous> (file:///Users/lneir/IntelliJProjects/tests/electron-bugs/electron-remote-constructor-crash/index.html:44:26)
