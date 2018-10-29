import React from 'react';
import { render} from 'react-dom';
import MyComponent from './js/MyComponent';

function startApp() {
  //https://harrymoreno.com/2015/07/14/Deploying-a-React-App-to-Cordova.html
  const App = () => (
    <MyComponent />
);

  render(<App />, document.getElementById("root"));
}
if (window.cordova) {
  document.addEventListener('deviceready', startApp, false);
} else {
  startApp();
}