<template lang='pug'>
  v-layout(wrap align-center)
    v-flex(xs12 align-center)
      | {{weather}}
      ve-line(:data="chartData" :settings="chartSettings")
</template>

<script>
import publicIp from 'public-ip'
import iplocation from 'iplocation'
import DarkSkyApi from 'dark-sky-api'
import geolocator from 'ipapi.co'

export default {
  name: 'ModuleWeather',
  data () {
    this.chartSettings = {
      stack: { 'sell': ['cost', 'profit'] },
      area: true
    }
    return {
      weather: '',
      chartData: {
        columns: ['date', 'Température'],
        rows: [
          { 'date': '01/1', 'Température': 1523 },
          { 'date': '01/2', 'Température': 1223 },
          { 'date': '01/3', 'Température': 2123 },
          { 'date': '01/4', 'Température': 4123 },
          { 'date': '01/5', 'Température': 3123 },
          { 'date': '01/6', 'Température': 7123 }
        ]
      }
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
      geolocator.location( geo => {
        console.log(geo);
        DarkSkyApi.apiKey = '3243ee68155dc349256ef028fd56466c'
        DarkSkyApi.units = 'si'
        DarkSkyApi.language = 'fr'
        DarkSkyApi.loadItAll(null, {
          latitude: geo.latitude,
          longitude: geo.longitude
        })
        .then(result => {
            this.chartData.rows = result.hourly.data.map(e => {
              return {
                'date': new Date(e.time*1000).getMonth() + '/' + new Date(e.time*1000).getDate(),
                'Température': e.temperature
              }
            })
            console.log(this.chartData.rows)        
          })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
