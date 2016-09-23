import React, { Component, PropTypes} from 'react';
import UrlView from './UrlView';
import OpenUrlsBtn from './OpenUrlsBtn'
import { Meteor } from 'meteor/meteor';

class ZipView extends Component {
  constructor(){
    super();
    this.openAllUrls = this.openAllUrls.bind(this);
  }
  renderUrlViews(){
    let urlViews;
    if(this.props.ready){
      urlViews = _.map(this.props.urls, function(url, index){
        url = url.match(/^http[s]*:\/\//) ? url : 'http://' + url;
        return <UrlView key={index} index={index} value={url} />
      }, this)
    }else{
      urlViews = null;
    }
    return urlViews;
  }
  openAllUrls(){
    _.each(this.props.urls, function(url){
      window.open(url, '_blank');
    });
  }
  render() {
    let UrlViews = this.renderUrlViews();
    return (
      <div>
        {UrlViews}
        <OpenUrlsBtn urls={this.props.urls} openAllUrls={this.openAllUrls} />
      </div>
    );
  }
}

ZipView.propTypes = {
  urls: React.PropTypes.array,
  ready: React.PropTypes.bool,
};

export default ZipView;
