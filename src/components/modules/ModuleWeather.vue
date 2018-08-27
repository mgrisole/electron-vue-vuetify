<template lang='pug'>
  v-layout(wrap align-center)
    v-flex(xs12 align-center)
      | {{weather}}
</template>

<script>
import publicIp from 'public-ip'
import openWeather from 'openweather-apis'

export default {
  name: 'ModuleWeather',
  data () {
    return {
      weather: ''
    }
  },
  props: {
    location: {
      type: String,
      default: ''
    }
  },
  timers: {
    tick: { time: 5 * 60000, autostart: true, immediate: true }
  },
  methods: {
    tick () {
      // publicIp.v4().then(ip => {
      //   console.log(ip);
      // });
      openWeather.setLang('fr')
      openWeather.setCity('Toulouse')
      openWeather.setAPPID('e169fc4be7c5b637dd06aa4f62fc88dd')
      openWeather.getTemperature((err, temp) => {
        if (err) {
          console.error(err)
        }
        this.weather = temp
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
