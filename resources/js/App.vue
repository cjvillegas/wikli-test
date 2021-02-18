<template>
  <router-view></router-view>
</template>

<style lang="scss">
// Main Stylesheet
@import './assets/scss/main';

// Bootstrap Vue Stylesheet
@import '~bootstrap-vue/src/index';

// All color themes are included and available by default
// Feel free to comment out any of them if you won't use them in your project
@import './assets/scss/oneui/themes/amethyst';
@import './assets/scss/oneui/themes/city';
@import './assets/scss/oneui/themes/flat';
@import './assets/scss/oneui/themes/modern';
@import './assets/scss/oneui/themes/smooth';
</style>

<script>
export default {
  name: 'App'
}
</script>
