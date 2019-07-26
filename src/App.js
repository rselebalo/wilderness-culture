import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';
import HomeComponent from './views/Home';
import ContactComponent from './views/ContactUs';
import PeopleComponent from './views/People';
import NavComponent from './views/Navigation';

class App extends Component {
  render() {
    return (
      <Router>
      <div >
          <NavComponent/>
          <div className="container">
            <Route exact path="/" component={HomeComponent}/>
            <Route path="/people" component={PeopleComponent}/>
            <Route path="/contact" component={ContactComponent}/>
          </div>
      </div>
      </Router>
    );
  }
}

export default App;
