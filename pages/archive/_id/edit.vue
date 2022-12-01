<template>
  <div style="max-width: 1200px; margin-left: auto; margin-right: auto">
    <div class="text-block" style="width: auto">
      <h1 class="title">Update Resource Info</h1>
      <div class="description">
        <p>Name: <br><input id="title" class="input-box" :value="project.name"/></p>
        <p>Blurb: <br><input id="blurb" class="input-box" :value="project.blurb"/></p>
        <p>Source: <br><input id="source" class="input-box" :value="project.source"/></p>
        <p>Description: <br><textarea id="description" class="input-box description-box" placeholder="Description" :value="project.description"/></p><br>
        <!--<p>Category: <br>
          <Multiselect
              v-model="project.category"
              :options="options"
              :multiple="false"
              :close-on-select="true"
              placeholder="Pick one"
              label="name"
              track-by="name"
              id="category"
          />
        </p>-->
      </div>
      <p class="description">Edit the resource info</p>
      <button v-on:click="editResource">Edit</button>
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
      value: null,
    }
  },
  methods: {
    editResource: async function () {
      const title = document.getElementById('title').value
      const blurb = document.getElementById('blurb').value;
      const description = document.getElementById('description').value;
      const source = document.getElementById('source').value;

      try {
        const res = await this.$axios.post('api/archive/slug/' + this.$route.params.id + "/edit", {
          name: title,
          blurb: blurb,
          source: source,
          description: description
        }, {
          headers: {
            Authorization: this.$store.state.auth.token,
          }
        })
        await this.$router.push('/archive/' + this.$route.params.id)
      } catch (e) {
        console.log(e);
      }
    }
  },
  async asyncData(data) {
    try {
      let res = await data.$axios.get('api/archive/slug/' + data.params.id);
      const project = res.data;

      res = await data.$axios.get('api/archive/categories', {
        headers: {
          Authorization: data.store.state.auth.token
        }
      });

      const categories = [];

      for (let i = 0; i < res.data.length; i++) {
        categories.push({name: res.data[i]});
      }

      console.log("btuh")
      return {
        project,
        options: categories
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
