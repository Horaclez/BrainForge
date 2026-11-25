const{contextBridge,ipcRenderer}=require('electron');
contextBridge.exposeInMainWorld('bfNative',{pick:()=>ipcRenderer.invoke('pick'),list:d=>ipcRenderer.invoke('list',d),write:(d,f,b)=>ipcRenderer.invoke('write',d,f,b),del:(d,f)=>ipcRenderer.invoke('del',d,f)});
