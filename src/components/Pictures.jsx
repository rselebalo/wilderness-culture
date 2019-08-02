import React, { Component } from "react";

class Pictures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    this.setState({ photos: this.props.photos });
  }
  render() {
    return (
      <div className="mt-3">
        <List data={this.state.photos} />
      </div>
    );
  }
}

const ListItem = ({ photo }) => {
  return (
    <div key={photo.id} className="grid__item card">
      <div className="card__body">
        <img src={photo.urls.small} alt="" />
      </div>
      <div className="card__footer media">
        <img
          src={photo.user.profile_image.small}
          alt=""
          className="media__obj"
        />
        <div className="media__body">
          <a href={photo.user.portfolio_url} target="_blank">
            {photo.user.name}
          </a>
        </div>
      </div>
    </div>
  );
};

const List = ({ data }) => {
  var items = data.map(photo => <ListItem key={photo.id} photo={photo} />);
  return <div className="grid">{items}</div>;
};

export default Pictures;
