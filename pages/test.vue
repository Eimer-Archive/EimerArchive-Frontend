<template>
  <p id="list" style="max-width: 1200px; margin-left: auto; margin-right: auto"></p>
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
      withCredentials: true,
      headers: {
        Accept: "application/json"
      }
    };

    try {
      const res = await axios.get(this.$config.apiURL + '/api/test/user', config);

      document.getElementById('list').innerHTML = res.data.content;
    } catch (e) {
      console.log(e)
    }
  },
}
</script>

<style scoped>

</style>
