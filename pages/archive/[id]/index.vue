<template>
  <div v-if="isLoaded">
    <div class="block">
      <h1 class="title"><b>{{ this.project.name }}</b></h1>
      <p class="description">{{ this.project.description }}</p>
    </div>
    <div class="block">
      <h1 class="title">Beta 1.7.3</h1>
      <div class="top-bar">
        <p class="version">Build: 1093</p>
        <button class="download-button" style="margin-top: 3px">Download</button>
      </div>
      <div class="top-bar">
        <p class="version">Build: 1060</p>
        <button class="download-button" style="margin-top: 3px">Download</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'index',
  data () {
    return {
      isLoaded: false,
      project: {},
    }
  },
  async beforeCreate () {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }

    try {
      const res = await axios.get('http://localhost:8080/archive/' + this.$route.params.id, config)
      this.project = res.data;
      this.isLoaded = true;
    } catch (e) {
      console.log(e)
    }
  },
}
</script>

<style scoped>
.block {
  background: rgba(51, 50, 50, 0.5);
  border-radius: 6px;
  padding: 15px;
  margin: 16px 0;
}

.title {
  font-size: 20px;
  text-decoration-thickness: auto;
  color: #ffffff;
}

.description {
  color: white;
  text-decoration-thickness: 1px;
}

.top-bar {
  border-style: solid;
  color: dimgray;
  border-width: 0;
  border-top-width: 2px;
  margin-top: 10px;
  padding-top: 5px;
}

.download-button {
  color: white;
  border-radius: 3px;
  border-style: solid;
  background-color: #797979;
  font-size: 13px;
  padding: 1px 4px;
}

.version {
  color: white;
}
</style>
