<template>
  <div class="home">
    <div class="home__movieListContainer" :key="numberOfMoviesPerRow">
      <div class="row" v-for="row in movies.length / numberOfMoviesPerRow" :key="row">
        <movie-cover
          v-for="movie in movies.slice(row*numberOfMoviesPerRow - numberOfMoviesPerRow, row*numberOfMoviesPerRow)"
          :key="`${movie.id}_${Math.floor(Math.random())}`"
          :movie="movie"
          :image="movie.poster_path"
          @click.native="showDetailsAtRow(row, movie)">
        </movie-cover>
        <movie-details v-if="rowSelected == row" :showTrailer="false"></movie-details>
      </div>
      <div class="arrow" v-if="!searching">
        <img @click="retrieveMovies()" srcset="@/assets/arrow/arrow.png 1x, @/assets/arrow/arrow@2x.png 2x" alt="load more movies" class="arrow__image">
      </div>
    </div>
  </div>
</template>

<script>
import MovieCover from '@/components/MovieCover.vue'
import MovieDetails from '@/components/MovieDetails.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'home',
  components: {
    MovieCover,
    MovieDetails
  },
  computed: {
    ...mapGetters([
      'getMovies',
      'isSearching',
      'getRowSelected',
      'getNumberOfMoviesPerRow'
    ]),
    movies () {
      return this.getMovies
    },
    searching () {
      return this.isSearching
    },
    rowSelected () {
      return this.getRowSelected
    },
    numberOfMoviesPerRow () {
      return this.getNumberOfMoviesPerRow
    }
  },
  methods: {
    ...mapActions([
      'retrieveMovies',
      'retrieveSelectedMovie',
      'retrieveTrailer'
    ]),
    showDetailsAtRow (rowToShow, movie) {
      this.$store.commit('setTrailerLink', '')
      this.$store.commit('setMovieSelected', movie)
      this.$store.commit('setRowSelected', rowToShow)
      this.$store.commit('setIsTrailerPlaying', false)
      this.retrieveSelectedMovie(movie.id)
      this.retrieveTrailer(movie.id)
    }
  },
  created () {
    this.retrieveMovies()
      .then(() => {
        this.retrieveMovies()
      })
  }
}
</script>

<style lang="scss">
@import "@/styles/views/_home.scss";
</style>
