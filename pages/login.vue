<template>
  <div style="max-width: 1200px; margin-left: auto; margin-right: auto">
    <div class="block" style="width: auto">
      <h1 class="title">Login</h1>
      <div class="description">
      Username: <input class="input-box" type="text" placeholder="Username" /><br>
      Password: <input class="input-box" type="password" placeholder="Password" />
      </div>
      <p class="description">Currently there is no signing up for an account, this feature is still in the works. Only admins have accounts.</p>
    </div>
  </div>
</template>

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
