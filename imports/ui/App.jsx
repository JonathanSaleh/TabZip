import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ZipForm from './ZipForm';
import ZipViewContainer from './ZipViewContainer';
import { createContainer } from 'meteor/react-meteor-data';
import { Router, Route, Link, browserHistory } from 'react-router'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200
  }
};

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div style={styles.container}>
          <h3>TabZip</h3>
          <Router history={browserHistory}>
            <Route path='/' component={ZipForm} />
            <Route path='/:tag' component={ZipViewContainer} />
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
