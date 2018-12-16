<script>
import { Bar } from 'vue-chartjs'
export default {
  extends: Bar,
  props: {
    list: Array
  },
  computed: {
    data() {
      return this.$store.state.agriculture.pastReports;
    },
    labels() {
      return this.data.map((d) => d.year);
    },
    revenue() {
      return this.data.map((d) => d.totalGain());
    },
    cost() {
      return this.data.map((d) => d.totalCost());
    },
  },
  methods: {
    render () {
      this.renderChart({
        labels: this.labels,
        datasets: [
          {
            label: '収益',
            backgroundColor: '#f87979',
            data: this.revenue,
          },
          {
            label: '費用',
            backgroundColor: '',
            data: this.cost,
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: '作者'
        },
        legend: {
          position: 'bottom'
        }
      })
    }
  },
  watch: {
    list () {
      this.render()
    }
  },
  mounted () {
    this.render()
  }
}
</script>