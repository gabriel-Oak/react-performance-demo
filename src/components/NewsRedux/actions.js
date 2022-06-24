import types from "./types";
import axios from 'axios';


export const setName = (payload) => ({
  type: types.setName,
  payload
});

export const setNews = (payload) => ({
  type: types.setNews,
  payload
});

export const getNews = () => async (dispatch) => {
  const { data: { messages } } = await axios.post('https://lunis-api-gabriel-oak.vercel.app/processor', {
    speech: 'notícias'
  });
  dispatch(setNews(messages));
}