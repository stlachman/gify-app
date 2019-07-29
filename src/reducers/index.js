import {
  FETCH_GIFS_INITIALIZE,
  FETCH_GIFS_SUCCESS,
  FETCH_GIFS_FAIL
} from "../actions";

const initialState = {
  gifs: [],
  isLoading: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GIFS_INITIALIZE:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_GIFS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        gifs: action.payload,
        error: ""
      };
    case FETCH_GIFS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
