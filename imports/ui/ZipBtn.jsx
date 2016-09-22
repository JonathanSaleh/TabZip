import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SmokingIcon from 'material-ui/svg-icons/places/smoking-rooms'

const style = {
  margin: 12
};

class ZipBtn extends Component {
  render() {
    return (
      <RaisedButton label="Zip It!" onTouchTap={this.props.handleZipIt} primary={true} style={style} labelPosition="before" icon={<SmokingIcon />} />
    );
  }
}
export default ZipBtn;
