<template>
  <div class="movieDetails">
    <img :src="loadBackDrop(movie.backdrop_path)" alt="back drop" class="backDropImage">
    <div class="gradient"></div>
    <iframe frameborder="0" class="video" v-if="showTrailer"
      :src="trailerLink">
    </iframe>
    <div class="closeBtn" @click="closeDetails()">
      <img srcset="@/assets/xBtn/xBtn.png 1x, @/assets/xBtn/xBtn@2x.png 2x" alt="play button" class="closeBtn__image">
    </div>
    <div class="primaryHeading">
      {{movie.title}}
    </div>
    <div class="movieDetails__info">
      <div class="movieDetails__info__container">
        <category v-for="category in movie.genres"
          :key="category.id"
          :name="category.name">
        </category>
        <div class="movieDetails__score">
          <loading-bar :percentage="movie.vote_average*10"></loading-bar>
        </div>
        <div class="movieDetails__description">
          {{movie.overview}}
        </div>
      </div>
      <div class="movieDetails__info__trailerConatiner" v-if="trailerLink != '' && !showTrailer">
        <img srcset="@/assets/playBtn/playBtn.png 1x, @/assets/playBtn/playBtn@2x.png 2x" alt="play button" class="playBtn" @click="playTrailer()">
      </div>
    </div>
  </div>
</template>

<script>
import LoadingBar from '@/components/LoadingBar.vue'
import Category from '@/components/Category.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    LoadingBar,
    Category
  },
  computed: {
    ...mapGetters(['getMovieSelected', 'getTrailerLink', 'getIsTrailerPlaying']),
    movie () {
      return this.getMovieSelected
    },
    trailerLink () {
      return this.getTrailerLink
    },
    showTrailer () {
      return this.getIsTrailerPlaying
    }
  },
  methods: {
    ...mapActions(['retrieveSelectedMovie', 'retrieveTrailer']),
    loadBackDrop (image) {
      if (!image) {
        return
      }
      return `https://image.tmdb.org/t/p/w1280${image}`
    },
    closeDetails () {
      this.$store.commit('setRowSelected', -1)
      this.$store.commit('setMovieSelected', null)
    },
    playTrailer () {
      this.$store.commit('setIsTrailerPlaying', true)
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/components/_movieDetails.scss";
</style>
