import React from 'preact';
import { connect } from 'react-redux'
import './App.less';
import Toolbar from './components/Toolbar.jsx';
import Drawer from './components/Drawer.jsx';
import { setDrawer } from './services/Actions.jsx'

class App extends React.Component {

  toggleDrawer = () => {
    this.props.setDrawer(!this.props.drawerOpen);
  }

  render = () => {
    return (
        <div className="app-container">
          <Toolbar onMenuClick={this.toggleDrawer}/>
          <Drawer />
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  drawerOpen: state.UI.drawerOpen
});

const mapDispatchToProps = (dispatch) => ({
  setDrawer: (open) => dispatch(setDrawer(open))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
