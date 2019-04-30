import React, { Component } from 'react';
import Homepage from './homepage.js';
import Navigation from './navigation.js';
import { Jumbotron } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Homepage />

      </div>
    );
  }
}

export default App;