import types from "./types";

const INITIAL_STATE = {
  news: [],
  name: '',
}

const news = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.setNews:
      return { ...state, news: action.payload };
    case types.setName:
      return { ...state, name: action.payload };
    default:
      return state;
  }
}

export default news;