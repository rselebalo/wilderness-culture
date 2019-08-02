import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Container, Row} from 'reactstrap';
import BgndImg from './assets/images/mist.jpg';
import HomeComponent from './views/Home';
import ContactComponent from './views/ContactUs';
import PeopleComponent from './views/People';
import NavComponent from './components/Navigation';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="root"> 
                  
      <main className="body">
              <Container fluid>
              <NavComponent/> 
            <Route exact path="/" component={HomeComponent}/>
            <Route path="/people" component={PeopleComponent}/>
            <Route path="/contact" component={ContactComponent}/>
            </Container>
            </main>
            <footer>
            <Row className="text-centre" style={{ background: "black"}}>
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-camera"></i></a>
              </Row>
            </footer>
          </div>
      
      </Router>
    );
  }
}

export default App;
