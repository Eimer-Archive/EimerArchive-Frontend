<template>
  <div style="max-width: 1200px; margin-left: auto; margin-right: auto">
    <div class="block" style="width: auto">
      <h1 class="title">Add Resource</h1>
      <div class="description">
        Name: <input id="name" class="input-box" type="text" placeholder="Name"/><br>
        Blurb: <input id="blurb" class="input-box" type="text" placeholder="Blurb"/><br>
        Description: <input id="description" class="input-box" type="text" placeholder="Description"/><br>
        Source: <input id="source" class="input-box" type="text" placeholder="Source"/><br>
        Author/s: <input id="author" class="input-box" type="text" placeholder="Author/s"/><br>
        Category: <input id="category" class="input-box" type="text" placeholder="Category"/>
      </div>
      <p class="description">Add a new resource to be archived.</p>
      <button v-on:click="addResource">Add</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'add',
  methods: {
    addResource: function() {
      console.log("Adding resource...");
      document.getElementById('name').value = "some name to test if this runs";

      const config = {
        headers: {
          Accept: "application/json"
        }
      };

      var name = document.getElementById('name').value;
      var blurb = document.getElementById('blurb').value;
      var description = document.getElementById('description').value;
      var source = document.getElementById('source').value;
      var author = document.getElementById('author').value;
      var category = document.getElementById('category').value;
      var data = {
        name: name,
        blurb: blurb,
        description: description,
        source: source,
        author: author,
        category: category
      }

      axios.post('http://localhost:8080/archive', data, config).then(function(response) {
        console.log(response);
      }).catch(function(error) {
        console.log(error);
      });
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

.input-box {
  margin: 5px 0;
  color: black;
  padding: 0 5px;
}
</style>
