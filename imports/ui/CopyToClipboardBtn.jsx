import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import CopyToClipboard from 'react-copy-to-clipboard';
import TextField from 'material-ui/TextField';
import CopyIcon from 'material-ui/svg-icons/action/assignment'
import CopiedIcon from 'material-ui/svg-icons/action/assignment-turned-in'

const iconStyles = {
  margin: 12
}

class CopyToClipboardBtn extends Component {
  constructor(){
    super();
    this.state = {
      copied: false
    }
  }
  render() {
    let Icon;
    if(!this.state.copied) {
      Icon = <CopyIcon style={iconStyles} />
    }else{
      Icon = <CopiedIcon style={iconStyles} />
    }
    return (
      <div>
        <br />
        <br />
        <TextField id='clipboardBtn' disabled={true}  value={this.props.url}
        />
       <CopyToClipboard text={this.props.url} onCopy={() => this.setState({copied: true})}>
        <IconButton tooltip='Copy to Clipboard' tooltipPosition='bottom-center'>
          {Icon}
        </IconButton>
       </CopyToClipboard>
      </div>
    );
  }
}
export default CopyToClipboardBtn;
