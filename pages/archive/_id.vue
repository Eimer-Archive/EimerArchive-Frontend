<template>
  <div>
    <nuxt-child :resource="resource" :versions="versions"/>
  </div>
</template>

<script>
export default {
  name: "index",
  async asyncData(data) {
    const res = await data.$axios.get('api/archive/slug/' + data.params.id);
    const resource = res.data;

    const versions = {};

    // TODO: somehow sort this in the correct order

    // Not actually 100% sure if these comments are correct, but it works, so I'm not touching it
    // Loop through the updates
    for (let j = 0; j < resource.updates.length; j++) {
      // Loop through the versions
      for (let i = 0; i < resource.updates[j].versions.length; i++) {
        // Check if the list of versions has the version
        if (versions[resource.updates[j].versions[i]] !== undefined) {
          // If it does, add the update to the list
          versions[resource.updates[j].versions[i]].push(resource.updates[j])
          continue;
        }
        // If it doesn't, add the version to the list
        const version = versions[resource.updates[j].versions[i]] = [];
        version.push(resource.updates[j]);
      }
    }

    return {resource, versions};
  }
}
</script>