import axios from 'axios'

function getPopularMovies (page, callback) {
  axios.get(`/movie/popular?api_key=df373a590596ceafcc6f3f32e91717b3&language=en-US&page=${page}`)
    .then((res) => {
      callback(null, res)
    })
    .catch((err) => {
      callback(err)
    })
}

function searchMovies (searchText, callback) {
  searchText = encodeURI(searchText)
  axios.get(`/search/movie?api_key=df373a590596ceafcc6f3f32e91717b3&language=en-US&query=${searchText}&page=1&include_adult=false`)
    .then((res) => {
      callback(null, res)
    })
    .catch((err) => {
      callback(err)
    })
}

function getMovieDetails (id, callback) {
  axios.get(`/movie/${id}?api_key=df373a590596ceafcc6f3f32e91717b3&language=en-US`)
    .then((res) => {
      callback(null, res)
    })
    .catch((err) => {
      callback(err)
    })
}

function getTrailer (movieId, callback) {
  axios.get(`/movie/${movieId}/videos?api_key=df373a590596ceafcc6f3f32e91717b3&language=en-US`)
    .then((res) => {
      callback(null, res)
    })
    .catch((err) => {
      callback(err)
    })
}

export default {
  getPopularMovies,
  searchMovies,
  getMovieDetails,
  getTrailer
}
