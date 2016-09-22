import React, { Component } from 'react';
import InputUrl from './InputUrl';
import AddUrlBtn from './AddUrlBtn'
import ZipBtn from './ZipBtn';
import { Meteor } from 'meteor/meteor';
import {browserHistory} from 'react-router';

class ZipForm extends Component {
  constructor() {
    super();
    this.state = {
      urls: ['']
    };
    this.updateState = this.updateState.bind(this);
    this.handleUrlAdd = this.handleUrlAdd.bind(this);
    this.handleUrlDelete = this.handleUrlDelete.bind(this);
    this.handleZipIt = this.handleZipIt.bind(this);
  }
  updateState(url, index) {
    var newUrls = this.state.urls;
    newUrls[index] = url;
    this.setState({urls: newUrls});
  }
  handleUrlAdd() {
    var newUrls = this.state.urls.concat('');
    this.setState({urls: newUrls});
  }
  handleUrlDelete(index) {
    var newUrls = this.state.urls;
    if(this.state.urls.length <= 1) {
      newUrls = [''];
    }
    else{
      newUrls = newUrls.slice(0, index).concat(newUrls.slice(index+1));
    }
    this.setState({urls: newUrls});
  }
  handleZipIt() {
    Meteor.call('zips.zipUp', this.state.urls, function(err, result){
      newUrl = '/' + result;
      browserHistory.push(newUrl);
    });
  }
  render() {
    var InputUrls = _.map(this.state.urls, function(url, index){
      return <InputUrl key={index} index={index} value={url} handleUrlDelete={this.handleUrlDelete} updateState={this.updateState} />
    }, this)

    return (
      <div>
        {InputUrls}
        <AddUrlBtn handleUrlAdd={this.handleUrlAdd} />
        <br />
        <ZipBtn handleZipIt={this.handleZipIt} />
      </div>
    );
  }
}
export default ZipForm;
