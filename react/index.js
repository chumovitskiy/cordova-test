import React from 'react';
import { render} from 'react-dom';
import MyComponent from './js/MyComponent';

function startApp() {
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