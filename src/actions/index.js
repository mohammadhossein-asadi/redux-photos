export const selectPhoto = (photo) => {
  return {
    type: "SELECTED_PHOTOS",
    payload: photo,
  };
};
