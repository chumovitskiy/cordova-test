import React from 'react';
import { render} from 'react-dom';
import App from './js/App';

function startApp() {
	/*
	const iDevices = [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ];
	
	if (!!navigator.platform) {
      while (iDevices.length) {
        if (navigator.platform === iDevices.pop()){
		  if (window.device && parseFloat(window.device.version) >= 7) {
            $(window).on('orientationchange', function () {
            var orientation = parseInt(window.orientation, 10);
            // We now the width of the device is 320px for all iphones
            // Default height for landscape (remove the 20px statusbar)
            var height = 300;
            // Default width for portrait
            var width = 320;
            if (orientation !== -90 && orientation !== 90 ) {
              // Portrait height is that of the document minus the 20px of
              // the statusbar
              height = document.documentElement.clientHeight - 20;
            } else {
              // This one I found experimenting. It seems the clientHeight
              // property is wrongly set (or I misunderstood how it was
              // supposed to work).
              // Dunno if it's specific to my setup.
              width = document.documentElement.clientHeight + 20;
            }
            document.querySelector('meta[name=viewport]')
              .setAttribute('content',
                'width=' + width + ',' +
                'height=' + height + ',' +
                'initial-scale=1.0,maximum-scale=1.0,user-scalable=no');
            })
            .trigger('orientationchange');
          } else {
            break;
          }
		}
      }
    }*/
  render(<App />, document.getElementById("root"));
}

//https://harrymoreno.com/2015/07/14/Deploying-a-React-App-to-Cordova.html
if (window.cordova) {
  document.addEventListener('deviceready', startApp, false);
} else {
  startApp();
}
