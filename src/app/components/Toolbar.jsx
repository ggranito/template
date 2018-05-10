import React from 'preact';
import Toolbar from 'preact-material-components/Toolbar';
import 'preact-material-components/Toolbar/style.css';

class ServoToolbar extends React.Component {

  render = () => {
    return (
      <Toolbar className="toolbar">
        <Toolbar.Row>
          <Toolbar.Section align-start={true}>
            <Toolbar.Icon menu onClick={() => this.props.onMenuClick()}>menu</Toolbar.Icon>
            <Toolbar.Title>
              My App
            </Toolbar.Title>
          </Toolbar.Section>
          <Toolbar.Section align-end={true}>
            <Toolbar.Icon>more_vert</Toolbar.Icon>
          </Toolbar.Section>
        </Toolbar.Row>
      </Toolbar>
    );
  }
}

export default ServoToolbar
