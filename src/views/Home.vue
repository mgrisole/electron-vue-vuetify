<template lang='pug'>
  v-container(fill-height)
    v-layout(column align-center)
      ModuleTimer
      ModuleTimer
</template>

<script>
import ModuleTimer from '@/components/modules/ModuleTimer'

export default {
  name: 'Home',
  components: {
    ModuleTimer
  },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
