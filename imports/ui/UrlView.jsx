import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import OpenIcon from 'material-ui/svg-icons/action/open-in-new'
import IconButton from 'material-ui/IconButton';
const open = require('open');

const iconStyles = {
  marginRight: 24
};

class UrlView extends Component {
  constructor(){
    super();
    this.openLink = this.openLink.bind(this);
  }
  openLink(){
    window.open(this.props.value);
  }
  render(){
    return (
      <div>
        <TextField id={this.props.index.toString()} disabled={true}
                   value={this.props.value}
        />
        <IconButton onTouchTap={this.openLink}>
          <OpenIcon style={iconStyles} />
        </IconButton>
        <br />
      </div>
    )
  }
}

export default UrlView;
