import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'eb4f5e43dfa5373ec69bee1a79b4270f';

const params = {
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day`, params);
  if (response.status === 200) {
    return response.data.results;
  } else {
    return Promise.reject(
      new Error('Oops, something went wrong. Please try again.')
    );
  }
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}`, params);
  if (response.status === 200) {
    return response.data;
  } else {
    return Promise.reject(
      new Error('Oops, something went wrong. Please try again.')
    );
  }
};

export const fetchMovieCast = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits?`, params);
  if (response.status === 200) {
    return response.data.cast;
  } else {
    return Promise.reject(
      new Error('Oops, something went wrong. Please try again.')
    );
  }
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`movie/${movieId}/reviews?`, params);
  if (response.status === 200) {
    return response.data.results;
  } else {
    return Promise.reject(
      new Error('Oops, something went wrong. Please try again.')
    );
  }
};

export const fetchMovieByName = async movieName => {
  const response = await axios.get(`/search/movie?query=${movieName}`, params);
  if (response.status === 200) {
    return response.data.results;
  } else {
    return Promise.reject(
      new Error('Oops, something went wrong. Please try again.')
    );
  }
};
