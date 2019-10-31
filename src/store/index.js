import Vue from 'vue'
import Vuex from 'vuex'
import MovieService from '../services/movieService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    moviesToRender: [],
    page: 1,
    isSearching: false,
    movieSelected: null,
    rowSelected: -1,
    trailerLink: null,
    isTrailerPlaying: false,
    numberOfMoviesPerRow: 7
  },
  getters: {
    getMovies: state => state.moviesToRender.slice(0, state.moviesToRender.length - state.moviesToRender.length % state.numberOfMoviesPerRow),
    isSearching: state => state.isSearching,
    getMovieSelected: state => state.movieSelected,
    getRowSelected: state => state.rowSelected,
    getTrailerLink: state => state.trailerLink,
    getIsTrailerPlaying: state => state.isTrailerPlaying,
    getNumberOfMoviesPerRow: state => state.numberOfMoviesPerRow
  },
  mutations: {
    setMovies (state, payload) {
      state.movies = [...state.movies, ...payload]
      state.moviesToRender = state.movies
    },
    setMoviesSearched (state, payload) {
      state.moviesToRender = payload
    },
    setMovieSelected (state, payload) {
      state.movieSelected = payload
    },
    setRowSelected (state, payload) {
      state.rowSelected = payload
    },
    setTrailerLink (state, payload) {
      state.trailerLink = payload
    },
    setIsTrailerPlaying (state, payload) {
      state.isTrailerPlaying = payload
    },
    setNumberOfMoviesPerRow (state, payload) {
      state.numberOfMoviesPerRow = payload
    }
  },
  actions: {
    retrieveMovies ({ commit, state }, payload) {
      if (!payload && state.isSearching === true) {
        state.isSearching = false
        state.moviesToRender = state.movies
        return
      }

      if (!payload) {
        state.isSearching = false
        let page = state.page
        state.page += 1
        MovieService.getPopularMovies(page, (err, res) => {
          if (err) {
            console.log(err)
            // show error
          } else {
            commit('setMovies', res.data.results)
          }
        })
      } else {
        state.isSearching = true
        MovieService.searchMovies(payload, (err, res) => {
          if (err) {
            console.log(err)
          } else {
            commit('setMoviesSearched', res.data.results)
          }
        })
      }
    },
    retrieveSelectedMovie ({ commit }, payload) {
      MovieService.getMovieDetails(payload, (err, result) => {
        if (err) {
          console.log(err)
        } else {
          commit('setMovieSelected', result.data)
        }
      })
    },
    retrieveTrailer ({ commit }, payload) {
      MovieService.getTrailer(payload, (err, result) => {
        if (err || result.data.results.length === 0) {
          console.log(err)
        } else {
          commit('setTrailerLink', `https://www.youtube.com/embed/${result.data.results[0].key}?autoplay=1&mute=1`)
        }
      })
    }
  },
  modules: {
  }
})
