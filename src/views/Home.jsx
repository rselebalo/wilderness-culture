import React, { Component } from "react";
import axios from 'axios';
import ImageList from '../components/ImageList';
 
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            images: []
        }
    }
  componentWillMount(){
     axios
    .get(`https://cors-anywhere.herokuapp.com/https://pixabay.com/api/?key=13140157-990fe95c036386799e41d26e9q=wilderness+culture`)
    .then(data => {
        this.setState({ images: data.data });
    })
    .catch(err => {
        console.log('Error happened during fetching!', err);
    });
  }  
  render() {
    return (
      <div style={{ backgroundImage: this.state.images.length > 0 ? `url(${this.state.images.data.hits[0].largeImageURL})` : ""}}>        
        <div className="main-content">
					{this.state.loadingState
						? <p>Loading</p>
						: <ImageList data={this.state.images} />}
				</div>
      </div>
    );
  }
}
 
export default Home;