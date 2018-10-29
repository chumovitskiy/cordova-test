import React from 'react';
import { render} from 'react-dom';
import App from './js/App';

function iOS() {

  var iDevices = [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ];

  if (!!navigator.platform) {
    while (iDevices.length) {
      if (navigator.platform === iDevices.pop()){ return true; }
    }
  }

  return false;
}

function startApp() {
  //https://harrymoreno.com/2015/07/14/Deploying-a-React-App-to-Cordova.html
  if(iOS()) {
    styles.base.paddingTop = '20px'
  }

  render(<App />, document.getElementById("root"));
}

if (window.cordova) {
  document.addEventListener('deviceready', startApp, false);
} else {
  startApp();
}
