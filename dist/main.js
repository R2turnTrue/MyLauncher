const _0x289d=['이메일이나\x20비밀번호가\x20틀렸습니다.','login_failed','create','알\x20수\x20없는\x20런처\x20내부\x20오류가\x20발생하였습니다.','BrowserWindow','app','__importStar','defineProperty','모장\x20인증\x20서버에\x20접속할\x20수\x20없습니다.','dialog','userData','showMessageBoxSync','hasOwnProperty','login','__setModuleDefault','ipcMain','window-all-closed','Unknown','Auth','reply','name','quit','알\x20수\x20없습니다.\x20','showErrorBox','ForbiddenOperationException','electron','selectedProfile','default','../launcher.html','join','webContents','whenReady','안녕하세요!\x20','CanNotConnectException','__createBinding','MyLauncher','then','__esModule','loadFile','call','../index.html','path'];(function(_0x7dfffe,_0x289d13){const _0x4b8b4e=function(_0x3b04db){while(--_0x3b04db){_0x7dfffe['push'](_0x7dfffe['shift']());}};_0x4b8b4e(++_0x289d13);}(_0x289d,0x85));const _0x4b8b=function(_0x7dfffe,_0x289d13){_0x7dfffe=_0x7dfffe-0x0;let _0x4b8b4e=_0x289d[_0x7dfffe];return _0x4b8b4e;};'use strict';var __createBinding=this&&this[_0x4b8b('0x1b')]||(Object['create']?function(_0xe2c13,_0xc8c667,_0x3fc800,_0x40375c){if(_0x40375c===undefined)_0x40375c=_0x3fc800;Object[_0x4b8b('0x0')](_0xe2c13,_0x40375c,{'enumerable':!![],'get':function(){return _0xc8c667[_0x3fc800];}});}:function(_0x2e6f31,_0x1d266e,_0x4b30f2,_0x5dbec8){if(_0x5dbec8===undefined)_0x5dbec8=_0x4b30f2;_0x2e6f31[_0x5dbec8]=_0x1d266e[_0x4b30f2];}),__setModuleDefault=this&&this[_0x4b8b('0x7')]||(Object[_0x4b8b('0x25')]?function(_0x35ead,_0x53fa29){Object[_0x4b8b('0x0')](_0x35ead,_0x4b8b('0x14'),{'enumerable':!![],'value':_0x53fa29});}:function(_0x283a51,_0x32265c){_0x283a51[_0x4b8b('0x14')]=_0x32265c;}),__importStar=this&&this[_0x4b8b('0x29')]||function(_0x71efbc){if(_0x71efbc&&_0x71efbc[_0x4b8b('0x1e')])return _0x71efbc;var _0x447ed6={};if(_0x71efbc!=null)for(var _0x350db7 in _0x71efbc)if(_0x350db7!==_0x4b8b('0x14')&&Object[_0x4b8b('0x5')][_0x4b8b('0x20')](_0x71efbc,_0x350db7))__createBinding(_0x447ed6,_0x71efbc,_0x350db7);return __setModuleDefault(_0x447ed6,_0x71efbc),_0x447ed6;};Object['defineProperty'](exports,_0x4b8b('0x1e'),{'value':!![]});const electron_1=require(_0x4b8b('0x12')),path=__importStar(require(_0x4b8b('0x22'))),auth=__importStar(require('./backend/auth')),dev=!![];let window;function openWindow(){window=new electron_1[(_0x4b8b('0x27'))]({'height':0x2e5,'width':0x4f7,'minWidth':0x258,'minHeight':0x2aa,'webPreferences':{'preload':path[_0x4b8b('0x16')](__dirname,'preload.js'),'enableRemoteModule':![]}}),window[_0x4b8b('0x1f')]('./index.html'),dev&&(window['loadFile'](_0x4b8b('0x21')),window[_0x4b8b('0x17')]['openDevTools']());}electron_1[_0x4b8b('0x28')][_0x4b8b('0x18')]()[_0x4b8b('0x1d')](()=>{openWindow();}),electron_1['app']['on'](_0x4b8b('0x9'),function(){if(process['platform']!=='darwin')electron_1[_0x4b8b('0x28')][_0x4b8b('0xe')]();}),electron_1[_0x4b8b('0x8')]['on'](_0x4b8b('0x6'),(_0x28de27,_0x2107f8,_0xc679)=>{const _0x39d414=new auth[(_0x4b8b('0xb'))](),_0xe5af4d=_0x39d414['GetAuthenticateRes'](_0x2107f8,_0xc679,_0x63a4a=>{if(_0x63a4a==='Success'){const _0x17bd1e=_0x39d414[_0x4b8b('0x3')];electron_1[_0x4b8b('0x2')][_0x4b8b('0x4')]({'message':_0x4b8b('0x19')+_0x17bd1e[_0x4b8b('0x13')][_0x4b8b('0xd')]+'님!','title':_0x4b8b('0x1c')}),window[_0x4b8b('0x1f')]('./launcher.html');dev&&window[_0x4b8b('0x1f')](_0x4b8b('0x15'));return;}else{if(_0x63a4a===_0x4b8b('0x1a'))electron_1[_0x4b8b('0x2')][_0x4b8b('0x10')]('오류',_0x4b8b('0x1'));else{if(_0x63a4a===_0x4b8b('0x11'))electron_1[_0x4b8b('0x2')][_0x4b8b('0x10')]('오류',_0x4b8b('0x23'));else _0x63a4a===_0x4b8b('0xa')?electron_1['dialog'][_0x4b8b('0x10')]('오류',_0x4b8b('0x26')):electron_1[_0x4b8b('0x2')][_0x4b8b('0x10')]('오류',_0x4b8b('0xf')+_0x63a4a);}}_0x28de27[_0x4b8b('0xc')](_0x4b8b('0x24'));return;});});