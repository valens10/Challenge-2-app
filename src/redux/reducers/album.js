import { GET_ALBUM_PHOTOS, GET_ALBUM_PHOTOS_ERROR } from "../actions/types";

const initialState = {
  response: "",
  err: null,
  photos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALBUM_PHOTOS:
      return {
        ...state,
        response: "success",
        photos: action.payload,
      };
    case GET_ALBUM_PHOTOS_ERROR:
      return {
        ...state,
        err: action.payload,
      };

    default:
      return state;
  }
};
