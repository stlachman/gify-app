import axios from "axios";

export const FETCH_GIFS_INITIALIZE = "FETCH_GIFS_INITIALIZE";
export const FETCH_GIFS_SUCCESS = "FETCH_GIFS_SUCCESS";
export const FETCH_GIFS_FAIL = "FETCH_GIFS_FAIL";

export const getGifs = () => dispatch => {
  dispatch({ type: FETCH_GIFS_INITIALIZE });

  axios
    .get(
      `https://api.giphy.com/v1/gifs/trending?api_key=${
        process.env.REACT_APP_GIF_API
      }&limit=25`
    )
    .then(res => dispatch({ type: FETCH_GIFS_SUCCESS, payload: res.data }))
    .catch(err =>
      dispatch({ type: FETCH_GIFS_FAIL, payload: "Error Fetching Data" })
    );
};
