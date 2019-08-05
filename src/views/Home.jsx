import React, { Component } from "react";
import axios from "axios";
import { FormGroup, Button, Col, Row } from "reactstrap";
import BgndImg from "../assets/images/wide-rolley2.jpg";
import BgndMistImg from "../assets/images/mist2.jpg";
import PicturesComponent from "../components/Pictures";
import Global from "../global";

const LOAD_STATE = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  LOADING: "LOADING"
};

class Home extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loadState: LOAD_STATE.LOADING
    };
  }
  componentDidMount() {
    this.fetchPhotos(this.state.currentPage);
  }

  fetchPhotos() {
    var self = this;
    const { client_id, baseUrl } = Global;
    const options = {
      params: {
        client_id,
        query: "wilderness",
        page: 1,
        per_page: 20
      }
    };

    this.setState({ loadState: LOAD_STATE.LOADING });
    axios
      .get(`${baseUrl}/search/photos`, options)
      .then(response => {
        self.setState({
          photos: response.data.results,
          loadState: LOAD_STATE.SUCCESS
        });
      })
      .catch(() => {
        this.setState({ loadState: LOAD_STATE.ERROR });
      });
  }

  render() {
    return (
      <div>
        <div className="carousel slide" data-ride="carousel" id="carousel1">
          <ol className="carousel-indicators">
            <li data-target="#carousel1" data-slide-to="0" className="active" />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={BgndImg} className="d-block w-100" alt="..."/>
              <div className="carousel-caption d-block centered">
                <h5 className="Text-Style-2">WALIBI</h5>
                <Button className="btn btn-default">View Case</Button>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"/>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="text-center mt-4">
          <Col xs={12} sm={12} md={12}>
            <h6 className="Text-Style">WE ARE TAM TAM</h6>
            <p className="Text-Style-2">
              Tam Tam is a full service digital agency focusing on Dutch Digital
              Service Design We combine strategy, design, technology and
              interactions between company and customer valuable and memorable
              We work for awesome brands with a team of 120 digitals from our
              office in Armsterdam Making great work and having a blast doing
              it. That's what we believe in
            </p>
          </Col>
        </div>
        <div
          className="mt-4"
          style={{
            backgroundImage: `Url(${BgndMistImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
        >
          <Col xs={12} sm={12} md={12}>
            {this.state.loadState === LOAD_STATE.LOADING ? (
              <div className="loader" />
            ) : (
              <div className="text-center">
                <h6 className="Text-Style mt-4">FOLLOW US ON INSTAGRAM</h6>
                <p>@tamtamnl</p>
                <PicturesComponent photos={this.state.photos} />
              </div>
            )}
          </Col>
        </div>
        {/* <div
          className="grid__item card"
          style={{
            backgroundImage: `Url(${BgndMistImg})`,
            backgroundRepeat: "no-repeat"
          }}
        >
          <div
            className="card__body"
            style={{
              position: "relative",
              textAlign: "center",
              color: "white"
            }}
          >
            <div style={{ height: "300px" }}>
              <img src={BgndImg} alt="" />
            </div>
            <div class="centered">
              <h5 className="Text-Style-2">WALIBI</h5>
              <Row className="mt-2 text-center">
                <FormGroup row>
                  <Col xs={4} sm={2} md={2}>
                    <a href="#" className="btn a-default">
                      <span className="glyphicon glyphicon-chevron-left" />
                    </a>
                  </Col>
                  <Col xs={4} sm={8} md={8}>
                    <Button className="btn btn-default">View Case</Button>
                  </Col>
                  <Col xs={4} sm={2} md={2}>
                    <button href="#" className="btn a-default">
                      <span className="glyphicon glyphicon-chevron-right" />
                    </button>
                  </Col>
                </FormGroup>
              </Row>
            </div>
          </div>
          <div className="card__body">
            <div className="media__body text-center">
              <h6 className="Text-Style">WE ARE TAM TAM</h6>
              <p className="Text-Style-2">
                Tam Tam is a full service digital agency focusing on Dutch
                Digital Service Design We combine strategy, design, technology
                and interactions between company and customer valuable and
                memorable We work for awesome brands with a team of 120 digitals
                from our office in Armsterdam Making great work and having a
                blast doing it. That's what we believe in
              </p>
            </div>
          </div> */}
        {/* {this.state.loadState === LOAD_STATE.LOADING ? (
            <div className="loader" />
          ) : (
            <div className="text-center">
              <h6 className="Text-Style">FOLLOW US ON INSTAGRAM</h6>
              <p>@tamtamnl</p>
              <PicturesComponent photos={this.state.photos} />
            </div>
          )}
        </div> */}
      </div>
    );
  }
}

export default Home;
