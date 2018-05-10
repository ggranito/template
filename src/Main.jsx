import React, {render} from 'preact';
import App from './app/App.jsx';
//import './app/App.less';
import 'preact-material-components/style.css';
import 'normalize.css';
import 'typeface-roboto';
import './fonts/MaterialIcons.less';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import MainReducer from './app/services/MainReducer.jsx';

document.addEventListener("DOMContentLoaded", () => {
  const store = createStore(MainReducer);

  render(
    <Provider store={store}>
      <App/>
    </Provider>, 
    document.getElementById('app')
  );

  //devtools
  if (module.hot) {
    require('preact/devtools.js');
  }

});

