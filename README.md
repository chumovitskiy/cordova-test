# My Test Cordova build for web,android and ios
## Build ios
cordova platform add ios
cordova build ios
cordova run --emulator --nobuild ios --buildFlag='-UseModernBuildSystem=0'
## Build android
cordova platform add android
cordova build android
cordova run --emulator --nobuild android
## Known Issues
If android's emulator doesn't start check path to emulator
