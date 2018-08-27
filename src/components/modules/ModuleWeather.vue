<template lang='pug'>
  v-layout(wrap align-center)
    v-flex(xs12 align-center)
      | {{weather}}
      ve-line(:data="chartData" :settings="chartSettings")
</template>

<script>
import publicIp from 'public-ip'
import where from 'node-where'
import ForecastIo from 'forecastio'

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
          { 'date': '01/01', 'Température': 1523 },
          { 'date': '01/02', 'Température': 1223 },
          { 'date': '01/03', 'Température': 2123 },
          { 'date': '01/04', 'Température': 4123 },
          { 'date': '01/05', 'Température': 3123 },
          { 'date': '01/06', 'Température': 7123 }
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
      publicIp.v4().then(ip => {
        console.log(ip)
        where.is(ip, (err, result) => {
          console.log(err);          
          console.log(result)
          
        })
      })

      // let forecastIo = new ForecastIo('3243ee68155dc349256ef028fd56466c');
      // forecastIo.forecast('51.506', '-0.127').then( data => {
      //   console.log(JSON.stringify(data, null, 2))
      // })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
