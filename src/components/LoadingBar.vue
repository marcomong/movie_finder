<template>
  <div class="loading-bar-container">
    <h2 class="percentage">{{percentage}}%</h2>
    <div class="meter">
      <span :style="{width: `${percentage}%`}"
      :class="{
        red: percentage < 45,
        yellow: percentage >=45 && percentage < 60,
        green: percentage >= 60}">
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['percentage']
}
</script>

<style lang="scss">
@import "@/styles/components/_loadingBar.scss";
</style>
