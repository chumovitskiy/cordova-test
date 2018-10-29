# My Test Cordova build for web,android and ios
## Build ios
cordova platform add ios
#https://github.com/ionic-team/ionic/issues/12958#issuecomment-331861138
cordova plugin add cordova-plugin-disable-ios11-statusbar
npm run build && cordova build ios --buildFlag='-UseModernBuildSystem=0'
cordova run --emulator --nobuild ios
## Build android
cordova platform add android
npm run build && cordova build android
cordova run --emulator --nobuild android
## Build WEB
cordova platform add browser
npm run build && cordova build browser
cordova run --nobuild browser
## Known Issues
If android's emulator doesn't start check path to emulator
