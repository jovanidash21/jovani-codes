import { FETCH_MENU } from '../constants/menu';

const commonStateFlags = {
  loading: false,
  success: false,
  error: false,
};

const initialState = {
  fetch: {...commonStateFlags},
  all: {},
};

const menu = (state=initialState, action) => {
  switch(action.type) {
    case `${FETCH_MENU}_LOADING`: { 
      return {
        ...state,
        fetch: {
          ...state.fetch,
          loading: true,
        }
      };
    }  
    case `${FETCH_MENU}_SUCCESS`: {
      return {
        ...state,
        fetch: {
          ...state.fetch,
          loading: false,
          success: true,
          error: false,
        },
        all: {
          ...state.all,
          [action.meta]: action.payload.data,
        }
      };
    }
    case `${FETCH_MENU}_ERROR`: {
      return {
        ...state,
        fetch: {
          ...state.fetch,
          loading: false,
          success: false,
          error: true,
        }
      };
    }
    default:
      return state;
  }
}

export default menu;
