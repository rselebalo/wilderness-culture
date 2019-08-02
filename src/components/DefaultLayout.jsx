import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container, Row} from 'reactstrap';
import NavComponent from './Navigation';

// routes config
import routes from '../routes';

class DefaultLayout extends Component {
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
  
    render() {
      return (
        <div className="root">
          <NavComponent />
          <div className="app-body">            
            <main className="main">
              <Container fluid>
                <Suspense fallback={this.loading()}>                
                    <Switch>
                      {routes.map((route, idx) => {
                        return route.component ? (
                          <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            render={props => <route.component {...props} />}
                          />
                        ) : null;
                      })}
                    </Switch>
                </Suspense>
              </Container>
            </main>            
          </div>
          <div className="footer">
            <Suspense fallback={this.loading()}>
              <Row className="text-centre" style={{ background: "black"}}>
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-camera"></i></a>
              </Row>
            </Suspense>
          </div>
        </div>
      );
    }
  }
  
  export default DefaultLayout;