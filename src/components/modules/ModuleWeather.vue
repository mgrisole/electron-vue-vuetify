<template lang='pug'>
  v-layout(wrap align-center)
    v-flex(xs12 align-center)
      | {{weather}}
      ChartLine(:labels="labels", :datasets="datasets")
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
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#FC2525',
          data: [40, 39, 10, 40, 39, 80, 40]
        }
      ]
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
            this.labels = data.map(e => e.date)
            console.log(this.labels)
          })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
