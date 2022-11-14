<template>
  <div id="list" style="max-width: 1200px; margin-left: auto; margin-right: auto">
    <resource v-for="resource in resources" :key="resource.id" :name="resource.name" :blurb="resource.blurb" :id="resource.id" :resource="resource" />
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
    const config = {
      headers: {
        Accept: "application/json"
      }
    };

    try {
      const res = await data.$axios.get('api/archive/software', config);

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
