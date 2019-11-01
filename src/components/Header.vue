<template>
    <div class="header">
      <div class="header__logo">
          <img srcset="@/assets/Logo.png 1x, @/assets/Logo@2x.png 2x" alt="logo" class="header__logo__image">
      </div>
      <input type="text" placeholder="Search here" class="searchBar" v-model="search">
    </div>
</template>

<script>
import _ from 'lodash'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      search: '',
      isCalculating: true,
      searchQueryIsDirty: false
    }
  },
  watch: {
    search: function () {
      this.searchQueryIsDirty = true
      this.loadMovies()
    }
  },
  methods: {
    ...mapActions(['retrieveMovies']),
    loadMovies: _.debounce(function () {
      this.isCalculating = true
      setTimeout(function () {
        this.isCalculating = false
        this.searchQueryIsDirty = false
        this.retrieveMovies(this.search)
      }.bind(this), 500)
    }, 250)
  }
}
</script>

<style lang="scss">
@import "@/styles/components/_header.scss";
</style>
