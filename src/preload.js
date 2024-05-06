/*jshint esversion: 6 */
const {
    contextBridge,
    ipcRenderer
} = require("electron");


contextBridge.exposeInMainWorld(
    "api", {
        send: (channel, data) => {
            ipcRenderer.send(channel, data);
        },
        receive: (channel, func) => {
            ipcRenderer.on(channel, (event, ...args) => func(...args));
        },
        createOutlook: ({toEmail, body, subject, ccEmail, bccEmail, attachment}) => {
            ipcRenderer.send('createOutlook', {toEmail, body, subject, ccEmail, bccEmail, attachment});
        }
    }
);