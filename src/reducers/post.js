import {
  FETCH_POSTS,
  FETCH_POST
} from '../constants/post';

const commonStateFlags = {
  loading: false,
  success: false,
  error: false
};

const initialState = {
  fetch: {...commonStateFlags},
  all: [],
  single: {}
};

const post = (state=initialState, action) => {
  switch(action.type) {
    case `${FETCH_POSTS}_LOADING`:
    case `${FETCH_POST}_LOADING`:
      return {
        ...state,
        fetch: {
          ...state.fetch,
          loading: true
        }
      };
    case `${FETCH_POSTS}_SUCCESS`:
      return {
        ...state,
        fetch: {
          ...state.fetch,
          loading: false,
          success: true,
          error: false
        },
        all: action.payload.data
      };
    case `${FETCH_POST}_SUCCESS`:
      return {
        ...state,
        fetch: {
          ...state.fetch,
          loading: false,
          success: true,
          error: false
        },
        single: {
          ...state.single,
          [action.meta]: action.payload.data
        }
      };
    case `${FETCH_POSTS}_ERROR`:
    case `${FETCH_POST}_ERROR`:
      return {
        ...state,
        fetch: {
          ...state.fetch,
          loading: false,
          success: false,
          error: true
        }
      };
    default:
      return state;
  }
}

export default post;
