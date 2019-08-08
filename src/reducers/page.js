import {
  FETCH_PAGES,
  FETCH_PAGE,
} from '../constants/page';

const commonStateFlags = {
  loading: false,
  success: false,
  error: false,
};

const initialState = {
  fetch: {...commonStateFlags},
  all: [],
  single: {}
};

const page = (state=initialState, action) => {
  switch(action.type) {
    case `${FETCH_PAGES}_LOADING`:
    case `${FETCH_PAGE}_LOADING`: {
      return {
        ...state,
        fetch: {
          ...state.fetch,
          loading: true,
        }
      };
    }
    case `${FETCH_PAGES}_SUCCESS`: {
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
    case `${FETCH_PAGE}_SUCCESS`: {
      return {
        ...state,
        fetch: {
          ...state.fetch,
          loading: false,
          success: true,
          error: false,
        },
        single: {
          ...state.single,
          [action.meta]: action.payload.data,
        }
      };
    }
    case `${FETCH_PAGES}_ERROR`:
    case `${FETCH_PAGE}_ERROR`: {
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

export default page;
