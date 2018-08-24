<template lang='pug'>
  v-app
    router-view
</template>

<script>

export default {
  name: 'App',
  data () {
    return {}
  },
  timers: {
    log: { time: 1000, autostart: true }
  },
  methods: {
    log () {
      console.log('Hello world')
    }
  }
}
</script>
