<template>
  <div v-if="isLoaded">
    <div class="block">
      <h1 class="title"><b>{{ this.project.name }}</b></h1>
      <p class="description">{{ this.project.description }}</p>
    </div>
    <version-block v-for="(value, index) in versions" :version="index" :versions="value" :id="this.project.id"></version-block>
  </div>
</template>

<script>
import axios from 'axios'
import Versionblock from '../../../components/version-block'

export default {
  name: 'index',
  data () {
    return {
      isLoaded: false,
      project: {},
      versions: {},
      builds: []
    }
  },
  async beforeCreate () {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }

    try {
      const res = await axios.get( this.$config.apiURL + '/api/archive/' + this.$route.params.id, config)
      this.project = res.data;

      for (let j = 0; j < res.data.updates.length; j++) {
        for (let i = 0; i < res.data.updates[j].versions.length; i++) {
          if (this.versions[res.data.updates[j].versions[i]] !== undefined) {
            this.versions[res.data.updates[j].versions[i]].push(res.data.updates[j])
            continue;
          }
          const version = this.versions[res.data.updates[j].versions[i]] = [];
          version.push(res.data.updates[j]);
        }
      }

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
