<template>
  <div style="max-width: 1200px; margin-left: auto; margin-right: auto">
    <div class="block" style="width: auto">
      <div class="description">
        <button v-on:click="signout">Signout</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'add',
  methods: {
    signout: function () {

      const config = {
        headers: {
          Accept: '*/*',
          'Content-Type': 'application/json',
          credentials: "include"
        },
      }

      axios.post('http://localhost:8080/api/auth/signout', config).then(function (response) {
        console.log("signedout")
      }).catch(function (error) {
        console.log(error)
      })
    },
  },
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
