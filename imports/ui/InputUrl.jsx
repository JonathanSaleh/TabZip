import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import CancelIcon from 'material-ui/svg-icons/navigation/cancel'
import IconButton from 'material-ui/IconButton';

const _ = require('underscore');

const iconStyles = {
  marginRight: 24
};

class InputUrl extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.props.updateState(e.target.value, this.props.index);
  }
  render() {
    return (
      <div>
        <TextField id={this.props.index.toString()} onChange={this.handleChange}
                   value={this.props.value}
        />
        <IconButton onTouchTap={_.partial(this.props.handleUrlDelete, this.props.index)}>
          <CancelIcon style={iconStyles} />
        </IconButton>
      </div>
    );
  }
}
export default InputUrl;
