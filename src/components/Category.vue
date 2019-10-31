<template>
  <div class="category">
    <p>{{name}}</p>
  </div>
</template>

<script>
export default {
  props: ['name']
}
</script>

<style lang="scss">
@import "@/styles/components/_category.scss";
</style>
