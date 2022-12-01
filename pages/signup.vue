<template>
  <div style="max-width: 1200px; margin-left: auto; margin-right: auto">
    <div class="block" style="width: auto">
      <h1 class="title">Signup</h1>
      <form @submit.prevent="signup" class="description">
        <p>Username: <br><input id="username" class="input-box" type="text" placeholder="Username" maxlength="24" minlength="2" pattern="[a-zA-Z0-9_]+" required/><br></p>
        <p>Password: <br><input id="password" class="input-box" type="password" placeholder="Password" maxlength="32" minlength="6" required/><br></p>
        <p>Email: <br><input id="email" class="input-box" type="text" placeholder="Email" maxlength="320" minlength="1" pattern="^(.+)@(\S+)$" required/><br></p>
        <input class="mc-button" type="submit" value="Sign up"/>
        <p style="color: red" id="error"></p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add',
  methods: {
    signup: async function () {
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
        email: email
      }

      try {
        const res = await this.$axios.post('api/auth/signup', data, config);

        if (res.data.error === undefined) {
          await this.$router.push('/')
        } else {
          document.getElementById('error').innerHTML = res.data.error
        }
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
