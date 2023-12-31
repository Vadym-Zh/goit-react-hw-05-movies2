import axios from 'axios';

const API_KEY = '71d212db098bee809be336737b7220c9';
axios.defaults.baseURL = 'https://api.themoviedb.org';

export async function getTrendingMovies() {
  const response = await axios.get(`/3/trending/movie/week?api_key=${API_KEY}`);
  return response;
}

export async function getMoviesQuery(query) {
  const { data } = await axios.get(
    `/3/search/movie?api_key=${API_KEY}&query=${query}&include_adult=false`
  );
  return { data };
}

export async function getMovieById(id) {
  const { data } = await axios.get(`/3/movie/${id}?api_key=${API_KEY}`);
  return { data };
}

export async function getMoviesCast(id) {
  const { data } = await axios.get(`/3/movie/${id}/credits?api_key=${API_KEY}`);
  return { data };
}

export async function getMoviesReviews(id) {
  const { data } = await axios.get(`/3/movie/${id}/reviews?api_key=${API_KEY}`);
  return { data };
}
