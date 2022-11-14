<template>
  <nav class="bg-gray-700 p-5 relative dirt">
    <div class="ml-[50%] transform -translate-x-1/2 flex gap-7 w-[80%]" style="align-items: center">
      <nuxt-link to="/" style="float: left"><h1 class="text-white font-bold text-3xl block">MC Archive</h1></nuxt-link>
      <nuxt-link to="/plugins"><button class="block text-white font-semibold">Plugins</button></nuxt-link>
      <nuxt-link to="/mods"><button class="block text-white font-semibold">Mods</button></nuxt-link>
      <nuxt-link to="/server-software"><button class="block text-white font-semibold">Server Software</button></nuxt-link>

      <nuxt-link v-if="$store.state.auth.user === undefined" to="/login" class="block text-white font-semibold" style="margin-left: auto;"><button class="block text-white font-semibold">Login</button></nuxt-link>

      <p v-if="$store.state.auth.user !== undefined" class="block text-white font-semibold" style="margin-left: auto;"><button class="block text-white font-semibold">{{ $store.state.auth.user }}</button></p>
      <p v-if="$store.state.auth.user !== undefined" class="block text-white font-semibold" v-on:click="logout"><button class="block text-white font-semibold">Logout</button></p>
    </div>
  </nav>
</template>

<style>
.dirt {
  background-image: url('~/assets/img/dirt.png');
}
</style>

<script>
import Auth from './auth'
import axios from "axios";

export default {
  name: 'Header',
  components: { Auth },
  methods: {
    logout: function () {

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true
      }

      axios.post('http://localhost:8080/api/auth/signout',{}, config).then(function (response) {
      }).catch(function (error) {
        console.log(error)
      })
    },
  },
}
</script>

<style scoped>
</style>
