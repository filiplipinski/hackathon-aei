import {
  FETCH_ARTICLES_BEGIN,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  REQUEST_ARTICLES,
  RECEIVE_ARTICLES,
  UPDATE_ARTICLES,
} from '../actions';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_ARTICLES_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: false,
        items: action.payload.articles,
      };

    case FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };

    case REQUEST_ARTICLES:
      return {
        ...state,
        loading: true,
      };

    case RECEIVE_ARTICLES:
      return {
        ...state,
        json: action.json,
        loading: false,
      };

    case UPDATE_ARTICLES:
      return {
        ...state,
        json: action.data,
      };
    default:
      // default case in a reducer
      return state;
  }
}
