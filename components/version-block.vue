<template>
  <div class="block">
    <h1 class="title">{{ version }}</h1> <!-- Probably do this backend as I think some versions need the _ for the version name -->
    <file v-for="version in versions" :key="id" :version="version" :id="id"></file>
  </div>
</template>

<script>
export default {
  name: 'version-block',
  props: ['version', 'versions', 'id'],
}
</script>

<style scoped>
.block {
  background: rgba(51, 50, 50, 0.5);
  border-radius: 6px;
  padding: 15px;
  margin: 16px auto;
  max-width: 1200px;
}

.title {
  font-size: 20px;
  text-decoration-thickness: auto;
  color: #ffffff;
}

.description {
  color: white;
  text-decoration-thickness: 1px;
}

.top-bar {
  border-style: solid;
  color: dimgray;
  border-width: 0;
  border-top-width: 2px;
  margin-top: 10px;
  padding-top: 5px;
}

.download-button {
  color: white;
  border-radius: 3px;
  border-style: solid;
  background-color: #797979;
  font-size: 13px;
  padding: 1px 4px;
}

.version {
  color: white;
}
</style>
