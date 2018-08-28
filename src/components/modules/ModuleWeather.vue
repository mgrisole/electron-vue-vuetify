<template lang='pug'>
  v-layout(wrap align-center)
    v-flex(xs12 align-center)
      | {{weather}}
      ChartLine
</template>

<script>
import DarkSkyApi from 'dark-sky-api'
import geolocator from 'ipapi.co'
import moment from 'moment'
import ChartLine from '@/components/ChartLine'

export default {
  name: 'ModuleWeather',
  components: {
    ChartLine
  },
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
      geolocator.location(geo => {
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
                'date': moment.unix(e.time).format('DD/MM HH') + 'h',
                'Température': e.temperature
              }
            })
          })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
