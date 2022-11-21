<template>
  <div style="max-width: 1200px; margin-left: auto; margin-right: auto">
    <div class="block" style="width: auto">
      <h1 class="title">Login</h1>
      <div class="description">
        <p>Username: <br><input id="username" class="input-box" type="text" placeholder="Username"/><br></p>
        <p>Password: <br><input id="password" class="input-box" type="password" placeholder="Password"/><br></p>
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
    login: async function () {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }

      const username = document.getElementById('username').value
      const password = document.getElementById('password').value
      const data = {
        username: username,
        password: password,
      }

      try {
        await axios.post('http://localhost:8080/api/auth/signin', data, config)
        await this.$router.push('/')
      } catch (e) {
        console.log(e)
      }
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
