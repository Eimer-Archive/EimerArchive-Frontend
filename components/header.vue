<template>
  <nav class="bg-gray-700 p-5 relative dirt">
    <div class="ml-[50%] transform -translate-x-1/2 flex gap-7 w-[80%]" style="align-items: center">
      <nuxt-link to="/" style="float: left"><h1 class="text-white font-bold text-3xl block">MC Archive</h1></nuxt-link>
      <nuxt-link to="/plugins"><button class="block text-white font-semibold">Plugins</button></nuxt-link>
      <nuxt-link to="/mods"><button class="block text-white font-semibold">Mods</button></nuxt-link>
      <nuxt-link to="/server-software"><button class="block text-white font-semibold">Server Software</button></nuxt-link>

      <nuxt-link v-if="info.username === undefined" to="/login" class="block text-white font-semibold" style="margin-left: auto;"><button class="block text-white font-semibold">Login</button></nuxt-link>

      <p v-if="info.username !== undefined" class="block text-white font-semibold" style="margin-left: auto;"><button class="block text-white font-semibold">{{ this.info.username }}</button></p>
      <nuxt-link v-if="info.username !== undefined" to="/signout" class="block text-white font-semibold" style=""><button class="block text-white font-semibold">Logout</button></nuxt-link>
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
import axios from "axios";

export default {
  name: 'Header',
  components: { Auth },
  data() {
    return {
      info: []
    };
  },
  async beforeCreate() {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    }

    try {
      const response = await axios.get("http://localhost:8080/api/auth/info", config)
      this.info = response.data;
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>
</style>
