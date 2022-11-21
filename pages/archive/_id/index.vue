<template>
  <div>
    <div class="block">
      <h1 class="title"><b>{{ project.name }}</b></h1>
      <p class="description">{{ project.description }}</p>
      <p v-if="JSON.stringify(versions) === '{}'" class="description"><br>No files for this resource yet :(</p>
    </div>
    <version-block v-for="(value, index) in versions" :key="project.id" :version="index" :versions="value"
                   :id="project.id"></version-block>
  </div>
</template>

<script>

export default {
  name: 'index',
  async asyncData(data) {

    try {
      const res = await data.$axios.get('api/archive/' + data.params.id)

      const project = res.data;
      const versions = {};

      // Not actually 100% sure if these comments are correct, but it works, so I'm not touching it
      // Loop through the updates
      for (let j = 0; j < project.updates.length; j++) {
        // Loop through the versions
        for (let i = 0; i < project.updates[j].versions.length; i++) {
          // Check if the list of versions has the version
          if (versions[project.updates[j].versions[i]] !== undefined) {
            // If it does, add the update to the list
            versions[project.updates[j].versions[i]].push(project.updates[j])
            continue;
          }
          // If it doesn't, add the version to the list
          const version = versions[project.updates[j].versions[i]] = [];
          version.push(project.updates[j]);
        }
      }

      return {
        project,
        versions,
      }
    } catch (e) {
      console.log(e)
    }
  },
}
</script>

<style scoped>
.block {
  background: rgba(51, 50, 50, 0.5);
  border-radius: 6px;
  padding: 15px;
  margin: 16px 0;
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
