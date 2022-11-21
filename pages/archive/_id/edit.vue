<template>
  <div style="max-width: 1200px; margin-left: auto; margin-right: auto">
    <div class="block" style="width: auto">
      <h1 class="title">Update Resource Info</h1>
      <div class="description">
        <p>Name: <br><input id="title" class="input-box" :value="project.name"/></p>
        <p>Blurb: <br><input id="blurb" class="input-box" :value="project.blurb"/></p>
        <p>Description: <br><textarea id="description" class="input-box description-box" placeholder="Description" :value="project.description"/></p><br>
      </div>
      <p class="description">Edit the resource info</p>
      <button v-on:click="editResource">Edit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'upload',
  auth: true,
  data() {
    return {
      value: [],
    }
  },
  methods: {
    editResource: async function () {
      const description = document.getElementById('description').value;

      try {
        const res = await this.$axios.post('api/archive/' + this.$route.params.id + "/edit", {
          name: "ayo",
          version: "no",
          description: description
        }, {
          headers: {
            Authorization: this.$store.state.auth.token,
          }
        })

        console.log(res.data)
      } catch (e) {
        console.log(e);
      }
    }
  },
  async asyncData(data) {
    try {
      const res = await data.$axios.get('api/archive/' + data.params.id);
      const project = res.data;

      return {
        project
      }
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

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
