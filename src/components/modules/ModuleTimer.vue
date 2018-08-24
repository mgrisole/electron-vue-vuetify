<template lang='pug'>
  v-layout(wrap align-center)
    v-flex(xs12 align-center)
      | {{hour}} : {{minutes}} : {{seconds}}
</template>

<script>
// import moment from 'moment'

// export default {
//   name: 'Home',
//   data () {
//     return {
//       hour: '',
//       minutes: '',
//       seconds: ''
//     }
//   },
//   props: {
//     locale: {
//       type: String,
//       default: ''
//     }
//   },
//   beforeCreate () {
//     moment.locale(this.$options.propsData.locale)
//   },
//   mounted () {
//     this.$options.interval = setInterval(() => {
//       this.hour = moment().hour()
//       this.minutes = moment().minutes()
//       this.seconds = moment().seconds()
//     }, 5000)
//   },
//   beforeDestroy () {
//     moment.locale(this.$options.interval)
//   }
// }

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
  props: {
    locale: {
      type: String,
      default: ''
    }
  },
  beforeCreate () {
    moment.locale(this.$options.propsData.locale)
  },
  mounted () {
    this.$options.interval = setInterval(() => {
      this.hour = moment().hour()
      this.minutes = moment().minutes()
      this.seconds = moment().seconds()
    }, 5000)
  },
  beforeDestroy () {
    moment.locale(this.$options.interval)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
