import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import OpenIcon from 'material-ui/svg-icons/action/open-in-new'

const style = {
  margin: 12
};

class OpenUrlsBtn extends Component {
  render() {
    return (
      <RaisedButton label="Open All" onTouchTap={this.props.openAllUrls} primary={true} style={style} labelPosition="before" icon={<OpenIcon />} />
    );
  }
}
export default OpenUrlsBtn;
