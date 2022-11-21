<template>
  <div style="max-width: 1200px; margin-left: auto; margin-right: auto">
    <div class="block" style="width: auto">
      <h1 class="title">Add Resource</h1>
      <div class="description">
        <p>Name: <br><input id="name" class="input-box" type="text" placeholder="Name"/></p>
        <p>Blurb: <br><input id="blurb" class="input-box" type="text" placeholder="Blurb"/></p>
        <p>Description: <br><textarea id="description" class="input-box description-box" placeholder="Description"/></p>
        <p>Source: <br><input id="source" class="input-box" type="text" placeholder="Source"/></p>
        <p>Author/s: <br><input id="author" class="input-box" type="text" placeholder="Author/s"/></p>
        <p>Category: <br>
          <Multiselect
              v-model="value"
              :options="options"
              :multiple="false"
              :close-on-select="true"
              placeholder="Pick one"
              label="name"
              track-by="name"
              id="category"
          />
        </p>
      </div>
      <p class="description">Add a new resource to be archived.</p>
      <button v-on:click="addResource">Add</button>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  name: 'create',
  auth: true,
  components: {Multiselect},
  data() {
    return {
      value: [],
    }
  },
  methods: {
    addResource: function () {
      const name = document.getElementById('name').value
      const blurb = document.getElementById('blurb').value;
      const description = document.getElementById('description').value;
      const source = document.getElementById('source').value;
      const author = document.getElementById('author').value;
      const category = this.value;
      const data = {
        name: name,
        blurb: blurb,
        description: description,
        source: source,
        author: author,
        category: category
      }

      this.$axios.post('api/archive/create', data, {
        headers: {
          Authorization: this.$store.state.auth.token
        },
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    }
  },
  async asyncData(data) {
    try {
      const res = await data.$axios.get('api/archive/categories', {
        headers: {
          Authorization: data.store.state.auth.token
        }
      });

      const categories = [];

      for (let i = 0; i < res.data.length; i++) {
        categories.push({name: res.data[i]});
      }

      return {
        options: categories
      }
    } catch (e) {
      console.log(e);
    }
  }
}
</script>

<style src="../node_modules/vue-multiselect/dist/vue-multiselect.min.css"></style>
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
  resize: vertical;
  height: 200px;
}

.input-box {
  margin: 5px 0;
  color: black;
  padding: 0 5px;
}
</style>
