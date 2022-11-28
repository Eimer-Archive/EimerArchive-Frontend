<template>
  <div>
    <div class="text-block">
      <h1>Plugins</h1>
      These are the plugins that are currently available in the archive. If you would like to help out, please join the <a
        href="https://discord.gg/k8RcgxpnBS">Eimer Archive Discord</a>. Plugins are files that modify how the Minecraft
      server works, plugins are purely server side and do not affect the client.
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
  name: 'plugins',
  components: {
    resource
  },
  async asyncData(data) {
    const config = {
      headers: {
        Accept: "application/json"
      }
    };

    try {
      const res = await data.$axios.get('api/archive/plugins', config);

      const resources = [];

      for (let i = 0; i < res.data.content.length; i++) {
        resources.push(res.data.content[i]);
      }

      return {
        resources
      };
    } catch (e) {
      console.log(e)
    }
  },
}
</script>

<style scoped>

</style>
