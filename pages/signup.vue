<template>
  <div style="max-width: 1200px; margin-left: auto; margin-right: auto">
    <div class="block" style="width: auto">
      <h1 class="title">Login</h1>
      <div class="description">
        Username: <input id="username" class="input-box" type="text" placeholder="Username"/><br>
        Password: <input id="password" class="input-box" type="password" placeholder="Password"/><br>
        Email: <input id="email" class="input-box" type="text" placeholder="Email"/><br>
        <button v-on:click="login">Login</button>
      </div>
      <p class="description">Currently there is no signing up for an account, this feature is still in the works. Only
        admins have accounts.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'add',
  methods: {
    login: function () {
      const config = {
        headers: {
          Accept: 'application/json',
        },
      }

      const username = document.getElementById('username').value
      const password = document.getElementById('password').value
      const email = document.getElementById('email').value
      const data = {
        username: username,
        password: password,
        email: email,
        role: [
          'USER',
        ],
      }

      axios.post('http://localhost:8080/api/auth/signup', data, config).then(function (response) {
        console.log(response)
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
