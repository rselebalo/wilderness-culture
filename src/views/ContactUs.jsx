import React, { Component } from "react";
import _ from "lodash";
import {
  FormGroup,
  Button,
  Col,
  Input,
  Tooltip,
  Row,
  Card,
  CardHeader,
  CardBody
} from "reactstrap";
import BgndMistImg from "../assets/images/mist2.jpg";
import TooltipComponent from "../components/ToolTipItem";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      message: "",
      email: "",
      phoneNumber: "",
      headerError: "",
      showErrorHeader: false,
      emailInvalid: false,
      lastNameInvalid: false,
      firstNameInvalid: false,
      messageEmpty: false,
      emailValid: false,
      lastNameValid: false,
      firstNameValid: false,
      messageValid: false
    };
  }
  validateFields = () => {
    if (this.state.firstName.length <= 1) {
      this.setState({ firstNameInvalid: true });
    } else {
      this.setState({});
    }
    if (this.state.lastName.length <= 1) {
      this.setState({ lastNameInvalid: true });
    } else {
    }
    if (this.state.message.length <= 1) {
      this.setState({ messageEmpty: true });
    } else {
    }
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRex.test(this.state.email)) {
      this.setState({ emailInvalid: true });
    } else {
    }
  };
  render() {
    return (
      <div style={{
        backgroundImage: `Url(${BgndMistImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>
      <div className="centered">
        <Card className="content">
          <CardHeader hidden={this.state.showErrorHeader}>
            {this.state.HeaderError}
          </CardHeader>
          <CardBody>
            <Col rowSpan={3} xs={12} sm={12} md={12}>
              <h6 style={{ textAlign: "center" }}>
                WE WOULD LIKE TO HEAR FROM YOU
              </h6>
            </Col>
            <FormGroup row style={{ textAlign: "center" }}>
              <Col xs={12} sm={6} md={6}>
                <Input
                  type="text"
                  id={"firstName"}
                  placeholder={"First Name"}
                  value={this.state.firstName}
                  onChange={(e) => {
                    this.setState({
                      firstName: e.target.value,
                      firstNameInvalid: false
                    })
                  }}                  
                />
                {this.state.firstNameInvalid && (
                  <TooltipComponent
                    target="firstName"
                    placement="bottom"
                    toolTipOpen={this.state.firstNameInvalid}
                    message="We need your first name"
                  />
                )}
              </Col>

              <Col xs={12} sm={6} md={6}>
                <Input
                  id={"lastName"}
                  placeholder={"Last Name"}
                  value={this.state.lastName}
                  onChange={(e) => {
                    this.setState({
                      lastName: e.target.value,
                      lastNameInvalid: false
                    })}}
                />
                {this.state.lastNameInvalid && (
                  <TooltipComponent
                    target="lastName"
                    placement="bottom"
                    toolTipOpen={this.state.lastNameInvalid}
                    message="We need your last name"
                  />
                )}
              </Col>
            </FormGroup>
            <FormGroup row style={{ textAlign: "center" }}>
              <Col xs={12} sm={6} md={6}>
                <Input
                  id={"email"}
                  type="email"
                  placeholder={"Your e-mail address"}
                  value={this.state.email}
                  onChange={(e) => {
                    this.setState({
                      email: e.target.value,
                      emailInvalid: false
                    })}}
                />
                {this.state.emailInvalid && (
                  <TooltipComponent
                    target="email"
                    placement="bottom"
                    toolTipOpen={this.state.emailInvalid}
                    message="Please use a valid email address"
                  />
                )}
              </Col>
              <Col xs={12} sm={6} md={6}>
                <Input
                  id={"phoneNumber"}
                  placeholder={"Your phone number (optional)"}
                  value={this.state.phoneNumber}
                  onChange={(e) => {
                    this.setState({
                      phoneNumber: e.target.value
                    })}}
                />
              </Col>
            </FormGroup>
            <Row>
              <Col xs={12} sm={12} md={12}>
                <Input
                  className="form-control"
                  type="textarea"
                  id={"message"}
                  placeholder={"Your message"}
                  value={this.state.message}
                  onChange={(e) => {
                    this.setState({
                      message: e.target.value,
                      messageEmpty: false
                    })
                  }}
                />
                {this.state.messageEmpty && (
                  <TooltipComponent
                    target="message"
                    placement="bottom"
                    toolTipOpen={this.state.messageEmpty}
                    message="Sorry your message can't be empty"
                  />
                )}
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Row className="mt-2 text-center">
          <Col xs={12} sm={12} md={12}>
            <Button className="btn btn-danger" onClick={this.validateFields}>
              Send
            </Button>
          </Col>
        </Row>
      </div>
      </div>
    );
  }
}

export default Contact;
