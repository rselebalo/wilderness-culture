import React, { Component } from 'react';
import { FormGroup, Button, Col, Row } from 'reactstrap';
import BgndImg from '../assets/images/roller-coaster.jpg';

class About extends Component {
  render() {
    return (
      <div className="grid__item card">
      <div className="card__body" style={{position: 'relative',
  textAlign: 'center',
  color: 'white'}}>
        <img src={BgndImg} alt="" >
          </img>
        <div class="centered">
        <h5 className="Text-Style-2">WALIBI</h5>
        <Row className="mt-2 text-center">
        <FormGroup row>
            <Col xs={4} sm={2} md={2}>              
              <a href="#" className="btn a-default"><span className="glyphicon glyphicon-chevron-left"></span></a>
              </Col> 
              <Col xs={4} sm={8} md={8}> 
              <Button className="btn btn-default">View Case</Button>
              </Col>
              <Col xs={4} sm={2} md={2}> 
              <button href="#" className="btn a-default"><span className="glyphicon glyphicon-chevron-right"></span></button> 
              
              </Col> 
              </FormGroup>            
            </Row>
        </div>
      </div>
      <div className="card__body">      
        <div className="media__body text-center">
        <h6 className="Text-Style">WE ARE TAM TAM</h6>
                <p className="Text-Style-2">Tam Tam is a full service digital agency focusing on Dutch Digital Service Design
                We combine strategy, design, technology and interactions between company and customer valuable and memorable
                We work for awesome brands with a team of 120 digitals from our office in Armsterdam
                Making great work and having a blast doing it. That's what we believe in</p>
        </div>
      </div>
    </div>
        // <div>
        //   <div style={{ backgroundImage: `url(${BgndImg})`, textAlign: "center", height: "40%"}} rows={6} sm={12} xs={12} md={12}>
        //       <h5 className="Text-Style-2">WALIBI</h5>
        //     <FormGroup> 
        //       <a href="#"><span className="glyphicon glyphicon-chevron-left"></span><i ></i></a>  
        //         <Button className="btn btn-primary">View Case</Button>
        //       <a href="#"><i className="glyphicon glyphicon-chevron-right"></i></a>  
        //     </FormGroup>
        //   </div>
        //     <Col md={12} xs={12} sm={12} style={{textAlign: "center"}}>
        //         <h6 style={{fontWeight: "bold" }}>WE ARE TAM TAM</h6>
        //         <p>Tam Tam is a full service digital agency focusing on Dutch Digital Service Design
        //         We combine strategy, design, technology and interactions between company and customer valuable and memorable
        //         We work for awesome brands with a team of 120 digitals from our office in Armsterdam
        //         Making great work and having a blast doing it. That's what we believe in</p>
        //     </Col>
        //   </div>
    );
  }
}

export default About;
