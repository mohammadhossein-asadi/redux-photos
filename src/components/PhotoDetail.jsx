import { connect } from "react-redux";

const PhotoDetail = ({ photo }) => {
  return photo ? (
    <>
      <h2>Detail for:</h2>
      <h1>{photo.title}</h1>
      <img src={photo.src} alt={photo.title} />
    </>
  ) : (
    <h2>Select a photo</h2>
  );
};

const mapStateToProps = (state) => {
  return {
    photo: state.selectedPhoto,
  };
};

export default connect(mapStateToProps)(PhotoDetail);
