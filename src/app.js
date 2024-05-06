const { ipcMain} = require("electron");
// const path = require('path');
// var net = process.argv[1].replace('--', '');
// var namespace = 'QuickStart.' + net.charAt(0).toUpperCase() + net.substr(1);
// if(net === 'core') net = '';
// var version = net === 'standard' ? '2.0' : '7.0'

// const baseNetAppPath = path.join(__dirname, '/src/'+ namespace +'/bin/Debug/net' + net + version);

// process.env.EDGE_USE_CORECLR = 1;
// if(net !== 'standard')
// {
//     process.env.EDGE_APP_ROOT = baseNetAppPath;
// }

var edge = require('electron-edge-js');

// var baseDll = path.join(baseNetAppPath, namespace + '.dll');

// var localTypeName = 'QuickStart.LocalMethods';

// var createOutlook = edge.func({
//     assemblyFile: baseDll,
//     typeName: localTypeName,
//     methodName: 'CreateOutlook'
// });

exports.invokeCreateOutlook = function (window, {toEmail, body, subject, ccEmail, bccEmail, attachment}) {
    console.log(toEmail, 'fuck yeah')
    // createOutlook({toEmail, body, subject, ccEmail, bccEmail, attachment}, function(error, result) {
    //     if (error) throw error;
    //     window.webContents.send("fromMain", 'createOutlook', result);

    //     window.setTitle(result);
    // });
}