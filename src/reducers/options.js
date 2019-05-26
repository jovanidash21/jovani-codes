import { FETCH_OPTIONS } from '../constants/options';

const commonStateFlags = {
  loading: false,
  success: false,
  error: false,
};

const initialState = {
  fetch: {...commonStateFlags},
  data: {}
};

const options = (state=initialState, action) => {
  switch(action.type) {
    case `${FETCH_OPTIONS}_LOADING`:
      return {
        ...state,
        fetch: {
          ...state.fetch,
          loading: true,
        }
      };
    case `${FETCH_OPTIONS}_SUCCESS`:
      return {
        ...state,
        fetch: {
          ...state.fetch,
          loading: false,
          success: true,
          error: false,
        },
        data: action.payload.data
      };
    case `${FETCH_OPTIONS}_ERROR`:
      return {
        ...state,
        fetch: {
          ...state.fetch,
          loading: false,
          success: false,
          error: true,
        }
      };
    default:
      return state;
  }
}

export default options;
