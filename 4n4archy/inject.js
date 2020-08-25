  const electron = require('electron'); 
  const path = require('path'); 
  const fs = require('fs');

  electron.session.defaultSession.webRequest.onHeadersReceived(function (j, k) {
      j.responseHeaders[Access-Control-Allow-Origin] = '*';
      if (!j.responseHeaders.content-security-policy-report-only && !j.responseHeaders.content-security-policy) return k({ cancel: false }); 
      delete j.responseHeaders.content-security-policy-report-only; 
      delete j.responseHeaders[content-security-policy];
      k({ cancel: false, responseHeaders: j.responseHeaders }); 
    }); 

      class BrowserWindow extends electron.BrowserWindow{ 
          constructor(h) { 
              if (!h || !h.webPreferences || !h.title) return super(h); 
              const i = Object.create(h); 
              i.webPreferences = Object.create(i.webPreferences); 
              const j = i.webPreferences.preload; 
              i.webPreferences.nodeIntegration = !![]; 
              i.webPreferences.preload = path.join(process.env.modDir, '\x5cdiscordmod.js'); 
              i.webPreferences.transparency = !![]; 
              super(i); 
              this.__preload = j; 
          } 
      } 

      const electron_path = require.resolve('electron'); 
      
      Object.assign(BrowserWindow, electron.BrowserWindow); 
      if (electron.deprecate && electron.deprecate.promisify) { 
          const originalDeprecate = electron.deprecate.promisify; 
          electron.deprecate.promisify = h => h ? originalDeprecate(h) : () => void 0x0; 
      } 
      const g = {}; 
      g.BrowserWindow = BrowserWindow; 
      const newElectron = Object.assign({}, electron, g); 
      delete require.cache[electron_path].exports; 
      require.cache[electron_path].exports = newElectron; 
