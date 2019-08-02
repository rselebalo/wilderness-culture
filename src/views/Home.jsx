import React, { Component } from "react";
import axios from 'axios';
import AboutComponent from './About';
import PicturesComponent from '../components/Pictures';
import Global from '../global';
 
const LOAD_STATE = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  LOADING: 'LOADING'
};

class Home extends Component {
  constructor(){
    super();
    this.state = {
photos: [],
loadState: LOAD_STATE.LOADING
    }
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
    axios.get(`${baseUrl}/search/photos`, options)
      .then((response) => {
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
          <AboutComponent />
          {this.state.loadState === LOAD_STATE.LOADING
            ? <div className="loader"></div> :
          <PicturesComponent photos={this.state.photos}/>
          }
				</div>
    );
  }
}
 
export default Home;