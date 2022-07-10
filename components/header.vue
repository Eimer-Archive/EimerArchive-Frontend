<template>
  <nav class="bg-gray-700 p-5 relative dirt">
    <div class="ml-[50%] transform -translate-x-1/2 flex gap-7 w-[80%]">
      <nuxt-link to="/" style="float: left"><h1 class="text-white font-bold text-3xl block">MC Archive</h1></nuxt-link>
      <button class="block text-white font-semibold" style="float: right">Login</button>
    </div>

    <!--<div class="absolute bottom-0 left-[20%] flex gap-3">
      <NuxtLink class="block text-white bg-gray-600 p-1 rounded-t-md" to="/">
        Home
      </NuxtLink>
      <NuxtLink class="block text-white p-1 rounded-t-md" to="/resources">
        Resources
      </NuxtLink>
      <div class="w-[2px] bg-white block">ㅤ</div>
      <a class="block text-white p-1 rounded-t-md" :href="$config.discordURL">
        Discord
      </a>
    </div>-->
  </nav>
</template>

<style>
.dirt {
  background-image: url('~/assets/img/dirt.png');
}
</style>

<script>
import Auth from './auth'
export default {
  name: 'Header',
  components: { Auth },
}
</script>

<style scoped>
</style>
