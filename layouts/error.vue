<template>
  <div class="text-block">
    <h1 class="text-4xl font-bold text-white">{{ error.message }}</h1>
    <NuxtLink class="text-white" to="/">Oh no! It seems there was an error. Click me to go home</NuxtLink>
  </div>
</template>

<style>
body {
  background-image: url("~/assets/img/bg_main.png");
}
</style>

<script>
import Header from '../components/header'

export default {
  components: {
    Header,
  },
  props: {
    error: {
      type: Object,
      default() {
        return {
          message: 'Unknown error',
        }
      },
    },
  },
}
</script>
