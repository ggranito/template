import React, {render} from 'preact';
import App from './components/App.jsx';
import './Main.less';
import 'preact-material-components/style.css';
import 'normalize.css';
import 'typeface-roboto';
import './fonts/MaterialIcons.less';


document.addEventListener("DOMContentLoaded", () => {
  render(<App/>, document.getElementById('app'));

  //devtools
  if (module.hot) {
    require('preact/devtools.js');
  }

});

