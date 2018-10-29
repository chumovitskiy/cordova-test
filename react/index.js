import React from 'react';
import { render} from 'react-dom';
import App from './js/App';

function startApp() {
  render(<App />, document.getElementById("root"));
}

//https://harrymoreno.com/2015/07/14/Deploying-a-React-App-to-Cordova.html
if (window.cordova) {
  document.addEventListener('deviceready', startApp, false);
} else {
  startApp();
}
