<template lang='pug'>
  v-container.moduleContainer(fill-height fluid text-xs-center)
    v-layout(column)
      ModuleTimer(locale='fr')
      ModuleWeather
</template>

<script>
import ModuleTimer from '@/components/modules/ModuleTimer'
import ModuleWeather from '@/components/modules/ModuleWeather'

export default {
  name: 'Home',
  components: {
    ModuleTimer,
    ModuleWeather
  },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='stylus'>
</style>
