<template>
  <div>
    <div class="text-block">
      <a v-if="$store.state.auth.user.username !== undefined" :href="'/archive/' + resource.slug + '/edit'"><button class="mc-button" style="margin-top: 3px">Edit</button></a>
      <a v-if="$store.state.auth.user.username !== undefined" :href="'/archive/' + resource.slug + '/upload'"><button class="mc-button" style="margin-top: 3px">Upload</button></a>
      <h1 class="title"><b>{{ resource.name }}</b></h1>
      <a v-if="resource.source !== ''" class="source" :href="resource.source">Source</a>
      <p class="description">{{ resource.description }}</p>
      <p v-if="JSON.stringify(versions) === '{}'" class="description"><br>No files for this resource yet :(</p>
    </div>
    <version-block v-for="(value, index) in versions" :key="resource.id" :version="index" :versions="value" :id="resource.id"></version-block>
  </div>
</template>

<script>

export default {
  name: 'index',
  props: {
    resource: {
      type: Object,
      default: () => {}
    },
    versions: {
      type: Object,
      default: () => {}
    }
  },
}
</script>

<style scoped>
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

.version {
  color: white;
}
</style>
