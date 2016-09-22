import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ZipForm from './ZipForm';
import { createContainer } from 'meteor/react-meteor-data';

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
          <ZipForm />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
