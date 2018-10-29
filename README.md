# My Test Cordova build for web,android and ios
## Build ios
cordova platform add ios
npm run build && cordova build ios
cordova run --emulator --nobuild ios --buildFlag='-UseModernBuildSystem=0'
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
