<template lang='pug'>
  v-layout(wrap align-center)
    v-flex(xs12 align-center)
      | {{weather}}
      ve-line(:data="chartData" :settings="chartSettings")
</template>

<script>
import DarkSkyApi from 'dark-sky-api'
import geolocator from 'ipapi.co'
import moment from 'moment'

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
        rows: []
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
                'date': moment.unix(e.time).format("MM/DD/YYYY HH"),
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
