import axios from 'axios';

// https://api.themoviedb.org/3/trending/all/day?api_key=80fe24ea6ea4db327f1f3c79898b7ba2
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '80fe24ea6ea4db327f1f3c79898b7ba2';

export const getTranding = () => {
  return axios.get('/trending/all/day', {
    params: {
      api_key: API_KEY,
    },
  });
};

export const getMovie = id => {
  return axios.get(`/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
};

export const getReviews = id => {
  return axios.get(`/movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
      page: 1,
    },
  });
};

// https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1'