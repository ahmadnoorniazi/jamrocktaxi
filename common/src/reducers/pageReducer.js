import { 
  PAGE_LOAD,
  PAGE_LOADED,
  PAGE_ERROR
  } from "../store/types";

  const INITIAL_STATE = {}

  export const pageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case PAGE_LOAD:
        return {
          ...state,
          loading: true
        };
      case PAGE_LOADED:
        return {
          ...state,
        ...action.payload,
          loading:false
        };
      case PAGE_ERROR:
        return {
          ...state,
        loading:false

        };
      default:
        return state;
    }
  };
