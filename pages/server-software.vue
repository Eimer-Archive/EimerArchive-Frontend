<template>
  <div>
    <div class="text-block">
      <h1>Server Software</h1>
      These are the server software that are currently available in the archive. If you would like to help out, please join
      the <a href="https://discord.gg/k8RcgxpnBS">Eimer Archive Discord</a>. Server software is the software that runs the
      Minecraft server, it is what allows players to connect to the server. The most popular was CraftBukkit which Spigot/Paper is based on.
    </div>
    <div id="list" style="max-width: 1200px; margin-left: auto; margin-right: auto">
      <resource v-for="resource in resources" :key="resource.id" :name="resource.name" :blurb="resource.blurb" :id="resource.id" :resource="resource" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import resource from '../components/resource'

export default {
  name: 'server-software',
  components: {
    resource
  },
  async asyncData(data) {

    try {
      const res = await data.$axios.get('api/archive/software');

      const resources = [];

      for (let i = 0; i < res.data.content.length; i++) {
        resources.push(res.data.content[i]);
      }

      return {
        resources
      }
    } catch (e) {
      console.log(e)
    }
  },
}
</script>

<style scoped>

</style>
