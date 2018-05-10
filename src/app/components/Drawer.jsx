import React from 'preact';
import { connect } from 'react-redux';
import Drawer from 'preact-material-components/Drawer';
import List from 'preact-material-components/List';
import { setDrawer } from './../services/Actions.jsx';

class AppDrawer extends React.Component {

  render = () => {
    return (
      <Drawer.TemporaryDrawer open={this.props.open} onClose={this.props.onClose}>
        <Drawer.TemporaryDrawerContent>
          <List>
            <List.LinkItem>
                <List.ItemIcon>home</List.ItemIcon>
                Home
            </List.LinkItem>
          </List>
        </Drawer.TemporaryDrawerContent>
      </Drawer.TemporaryDrawer>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  open: state.UI.drawerOpen
});

const mapDispatchToProps = (dispatch) => ({
  onClose: () => dispatch(setDrawer(false))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppDrawer)
