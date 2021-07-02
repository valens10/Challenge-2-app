import { GET_ALBUM_PHOTOS, GET_ALBUM_PHOTOS_ERROR } from "./types";
import http from "../axiosBase";

export const GetAlbumPhotos = (album_id) => async (dispatch) => {
  try {
    const endpoint = "album-photos/" + album_id;
    const response = await http.get(endpoint);
    dispatch({
      type: GET_ALBUM_PHOTOS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALBUM_PHOTOS_ERROR,
      payload: error,
    });
  }
};
