import React from 'preact';
import './App.less';
import Toolbar from './Toolbar.jsx';
import Drawer from './Drawer.jsx';


class App extends React.Component {

  render () {
    return (
      <div className="app-container">
        <Toolbar onMenuClick={this.refs.drawer.toggle()}/>
        <Drawer ref="drawer" />
      </div>
    );
  }
}

export default App
