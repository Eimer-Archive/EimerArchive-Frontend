<template>
  <div class="block" style="width: auto">
    <h1><a :href="'/archive/' + id" class="title"><b>{{ name }}</b></a></h1>
    <p class="description">{{ blurb }}</p>
  </div>
</template>

<script>
export default {
  name: 'resource',
  props: ['name', 'blurb', 'description', 'source', 'author', 'category', 'id'],
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
</style>
