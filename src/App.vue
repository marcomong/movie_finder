<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  beforeMount () {
    this.$nextTick(function () {
      window.addEventListener('resize', this.getWindowWidth)
      this.getWindowWidth()
    })
  },
  methods: {
    getWindowWidth (event) {
      var width = document.documentElement.clientWidth
      switch (true) {
        case (width < 600): // phone
          this.$store.commit('setNumberOfMoviesPerRow', 3)
          break
        case (width < 900): // tab port
          this.$store.commit('setNumberOfMoviesPerRow', 4)
          break
        default:
          this.$store.commit('setNumberOfMoviesPerRow', 7)
          break
      }
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.getWindowWidth)
  }
}
</script>

<style lang="scss">

#app {
  min-height: 100%;
  position: relative;
}

</style>
