<template>
  <div>
    <div class="text-block">
      <h1>Mods</h1>
      These are the mods that are currently available in the archive. If you would like to help out, please join the <a
        href="https://discord.gg/k8RcgxpnBS">Eimer Archive Discord</a>. Mods are files that modify how Minecraft works. They
      can be used to add new features, change how the game works, or even add new blocks and items.
    </div>
    <div id="list" style="max-width: 1200px; margin-left: auto; margin-right: auto">
      <resource v-for="resource in resources" :key="resource.id" :name="resource.name" :blurb="resource.blurb" :id="resource.id" :resource="resource" />
    </div>
  </div>
</template>

<script>
import resource from '../components/resource'

export default {
  name: 'mods',
  components: {
    resource
  },
  async asyncData(data) {

    try {
      const res = await data.$axios.get('api/archive/mods');

      const resources = [];

      for (let i = 0; i < res.data.content.length; i++) {
        resources.push(res.data.content[i]);
      }

      return {
        resources
      }
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<style scoped>

</style>
