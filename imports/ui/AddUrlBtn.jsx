import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class AddUrlBtn extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <FloatingActionButton mini={true} onTouchTap={this.props.handleUrlAdd} >
        <ContentAdd />
      </FloatingActionButton>
    );
  }
}
export default AddUrlBtn;
