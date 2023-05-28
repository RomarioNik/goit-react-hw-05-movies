import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '80fe24ea6ea4db327f1f3c79898b7ba2';

export const getTranding = async () => {
  return await axios.get('/trending/all/day', {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
};

export const getMovie = async id => {
  return await axios.get(`/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const getReviews = async id => {
  return await axios.get(`/movie/${id}/reviews`, {
    params: {
      language: 'en-US',
      page: 1,
      api_key: API_KEY,
    },
  });
};

export const getCast = async id => {
  return await axios.get(`/movie/${id}/credits`, {
    params: {
      language: 'en-US',
      api_key: API_KEY,
    },
  });
};

export const searchMovies = async searchText => {
  return await axios.get('/search/movie', {
    params: {
      query: searchText,
      include_adult: false,
      language: 'en-US',
      page: 1,
      api_key: API_KEY,
    },
  });
};
