# My Test Cordova build for web, android and ios
## Set platform in gradle.properties
browser, android or ios
## Init
gradlew init
## Build
gradlew build
## run ios
cd frontend
cordova run --emulator --nobuild ios
cordova run --emulator --nobuild android
cordova run --nobuild browser
## Known Issues
If android's emulator doesn't start check path to emulator
