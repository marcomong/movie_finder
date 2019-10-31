<template>
    <div class="movieCover">
        <div class="overlaySelected" v-if="movieSelected != null && movieSelected.id == movie.id"></div>
        <img :src="loadUrlImage(image)" alt="movie cover" class="movieCover__image">
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['movie', 'image'],
  computed: {
    ...mapGetters([
      'getMovieSelected'
    ]),
    movieSelected () {
      return this.getMovieSelected
    }
  },
  methods: {
    loadUrlImage (image) {
      if (!image) {
        return require('../assets/unknowCover_Placeholder/coverPlaceholder.png')
      }
      return `https://image.tmdb.org/t/p/w500${image}`
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/components/_movieCover.scss";
</style>
