import React from 'preact';
import Drawer from 'preact-material-components/Drawer';
import List from 'preact-material-components/List';

class ServoDrawer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      open: false
    };
  }

  getOpen = () => {
    return this.state.open;
  }

  toggle = () => {
    this.setState({
      open: !this.state.open
    });
  }

  open = () => {
    this.setState({
      open: true
    });
  }

  close  = () => {
    this.setState({
      open: false
    });
  }

  render = () => {
    return (
      <Drawer.TemporaryDrawer open={this.state.open} onClose={this.close}>
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

export default ServoDrawer
