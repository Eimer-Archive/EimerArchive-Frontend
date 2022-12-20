<template>
  <div style="max-width: 1200px; margin-left: auto; margin-right: auto">
    <div class="text-block" style="width: auto">
      <h1 class="title">Add file to resource</h1>
      <div class="description">
        <p>Description: <br><textarea id="description" class="input-box description-box" placeholder="Description"/></p>
        <p>Versions: <br>
          <Multiselect
              v-model="value"
              :options="options"
              :multiple="true"
              :close-on-select="false"
              placeholder="Pick some"
              label="name"
              track-by="name"
              id="versions"
          />
        </p>
        <p>Version: <br><input id="version" class="input-box" type="text" placeholder="Version"/></p>
        <p>File: <input id="file" class="input-box" type="file" placeholder="File"/></p>
      </div>
      <p class="description">Add a new resource to be archived.</p>
      <button class="mc-button" v-on:click="addResource">Add</button>
      <p style="color: red" id="error"></p>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  name: 'upload',
  auth: true,
  components: {Multiselect},
  props: {
    resource: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      value: [],
      clicked: false
    }
  },
  methods: {
    addResource: async function () {
      if (this.clicked) return;
      this.clicked = true;

      const description = document.getElementById('description').value;
      const version = document.getElementById('version').value;
      const file = document.getElementById('file').files[0];

      const data = {
        id: this.resource.id,
        description: description,
        version: version,
        versions: [this.value]
      }

      let formData = new FormData();
      formData.append('file', file);
      formData.append('data', JSON.stringify(data));

      try {
        const res = await this.$axios.post('api/file/upload', formData, {
          headers: {
            Authorization: this.$store.state.auth.token,
            'Content-Type': 'multipart/form-data'
          }
        })

        if (res.data.error === undefined) {
          await this.$router.push('/archive/' + this.$route.params.id)
          this.$nuxt.refresh();
        } else {
          document.getElementById('error').innerHTML = res.data.error
        }
      } catch (e) {
        console.log(e)
      }
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
.title {
  font-size: 20px;
  text-decoration-thickness: auto;
  color: #0ca8a8;
}

.description {
  color: white;
  text-decoration-thickness: 1px;
}

.description-box {
  width: 100%;
  height: 200px;
  resize: vertical;
}

.input-box {
  margin: 5px 0;
  color: black;
  padding: 0 5px;
}
</style>
