import {GET_NEWS} from '../type/news';

const initialState = {
  news: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
