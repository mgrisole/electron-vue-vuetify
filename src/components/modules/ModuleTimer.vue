<template lang='pug'>
  v-layout(wrap align-center)
    v-flex(xs12 align-center)
      | {{hour}} : {{minutes}} : {{seconds}}
</template>

<script>
import moment from 'moment'

export default {
  name: 'Home',
  data () {
    return {
      hour: '',
      minutes: '',
      seconds: ''
    }
  },
  beforeCreate () {
    moment.locale('fr');
  },
  props: {
    locale: {
      type: String,
      default: ''
    }
  },
  timers: {
    tick: { time: 1000, autostart: true, repeat: true, immediate: true }
  },
  methods: {
    tick () {
      let now = moment();
      this.hour = now.hour()
      this.minutes = now.minute()
      this.seconds = now.seconds()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
