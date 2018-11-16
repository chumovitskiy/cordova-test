# My Test Cordova build for web, android and ios
## Init
gradlew init
## Build all
gradlew build
## Build ios
cd frontend
cordova run --emulator --nobuild ios
## Build android
gradlew buildAndroid
cd frontend
cordova run --emulator --nobuild android
## Build WEB
gradlew buildWeb
cd frontend
cordova run --nobuild browser
## Known Issues
If android's emulator doesn't start check path to emulator
		