<template>
  <div style="max-width: 1200px; margin-left: auto; margin-right: auto">
    <div class="block" style="width: auto">
      <h1 class="title">Add file to resource</h1>
      <div class="description">
        Resource ID: <input id="id" class="input-box" type="text" placeholder="Resource ID"/><br>
        Description: <input id="description" class="input-box" type="text" placeholder="Description"/><br>
        Versions:
        <Multiselect
            v-model="value"
            :options="options"
            :multiple="true"
            :close-on-select="true"
            placeholder="Pick some"
            label="name"
            track-by="name"
            id="versions"
        />
        Version: <input id="version" class="input-box" type="text" placeholder="Version"/><br>
        File: <input id="file" class="input-box" type="file" placeholder="File"/><br>
      </div>
      <p class="description">Add a new resource to be archived.</p>
      <button v-on:click="addResource">Add</button>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  name: 'upload',
  auth: true,
  components: {Multiselect},
  data() {
    return {
      value: [],
    }
  },
  methods: {
    addResource: function () {
      const id = document.getElementById('id').value
      const description = document.getElementById('description').value;
      const version = document.getElementById('version').value;
      const file = document.getElementById('file').files[0];

      const data = {
        id: id,
        description: description,
        version: version,
        versions: [this.value]
      }

      let formData = new FormData();
      formData.append('file', file);
      formData.append('data', JSON.stringify(data));

      this.$axios.post('api/file/upload', formData, {
        headers: {
          Authorization: this.$store.state.auth.token,
          'Content-Type': 'multipart/form-data'
        }
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    }
  },
  async asyncData(data) {
    try {
      const res = await data.$axios.get('api/archive/versions');

      const options = [];

      for (let i = 0; i < res.data.versions.length; i++) {
        options.push({
          name: res.data.versions[i]
        });
      }

      return {
        options
      }
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style src="../../../node_modules/vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.block {
  background: rgba(51, 50, 50, 0.5);
  border-radius: 6px;
  padding: 10px;
  margin: 8px 0;
}

.title {
  font-size: 20px;
  text-decoration-thickness: auto;
  color: #0ca8a8;
}

.description {
  color: white;
  text-decoration-thickness: 1px;
}

.input-box {
  margin: 5px 0;
  color: black;
  padding: 0 5px;
}
</style>
