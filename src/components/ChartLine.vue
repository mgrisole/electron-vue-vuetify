<script>
import {Line} from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    labels: {
      type: Array,
      required: true
    },
    datasets: {
      type: Array,
      required: true
    }
  },
  mounted () {
    this.renderChart({
      labels: this.labels,
      datasets: this.datasets
    }, {responsive: true, maintainAspectRatio: false})
  }
}
</script>
