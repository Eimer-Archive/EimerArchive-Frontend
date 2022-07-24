<template>
  <div id="list" style="max-width: 1200px; margin-left: auto; margin-right: auto">
    <resource v-for="resource in resources" :name="resource.name" :blurb="resource.blurb" :id="resource.id" :resource="resource" />
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
  data() {
    return {
      resources: []
    };
  },
  async beforeCreate() {
    const config = {
      headers: {
        Accept: "application/json"
      }
    };

    try {
      const res = await axios.get('http://localhost:8080/archive', config);

      for (let i = 0; i < res.data.content.length; i++) {
        this.resources.push(res.data.content[i]);
      }
    } catch (e) {
      console.log(e)
    }
  },
}
</script>

<style scoped>

</style>
