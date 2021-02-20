import {
  FETCH_ASSETS_STARTED,
  FETCH_ASSETS_SUCCESS,
  FETCH_ASSETS_FAILURE
} from "../constants/assets";

const initialState = {
  loading: false,
  data: [],
  error: null,
  total: 0,
  hasMore: false
};

export default function assetsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ASSETS_STARTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ASSETS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...new Set([...state.data, ...action.payload.data])],
        total: action.payload.total,
        hasMore: action.payload.data.length > 0
      };
    case FETCH_ASSETS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        hasMore: false
      };
    default:
      return state;
  }
}