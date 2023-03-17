import { Component } from "react";
import { connect } from "react-redux";
import { selectPhoto } from "../actions";

class PhotoList extends Component {
  render() {
    return (
      <>
        {this.props.photos.map((photo) => (
          <div key={photo.title}>
            <h3>
              {photo.title}{" "}
              <button onClick={() => this.props.selectPhoto(photo)}>
                Select
              </button>
            </h3>
          </div>
        ))}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.photos,
  };
};

export default connect(mapStateToProps, { selectPhoto })(PhotoList);
