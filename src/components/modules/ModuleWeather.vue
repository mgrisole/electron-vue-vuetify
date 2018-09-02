<template lang='pug'>
  v-layout(wrap align-center)
    v-flex(xs12 align-center)
      | {{weather}}
      ChartLine(:chart-data="datacollection")
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
      weather: '',
      datacollection: null
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
            let data = result.hourly.data.map(e => {
              return {
                'date': moment.unix(e.time).format('DD/MM HH') + 'h',
                'Température': e.temperature
              }
            })
            // this.labels = data.map(e => e.date)
            // console.log(this.labels)
            console.log(data);
            
            this.datacollection = {
              labels: data.map(e => e.date),
              datasets: [
                {
                  label: 'Data One',
                  backgroundColor: '#f87979',
                  data: data.map(e => e.Température)
                }
              ]
            }
          })
      })
    },
    getRandomInt () {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
