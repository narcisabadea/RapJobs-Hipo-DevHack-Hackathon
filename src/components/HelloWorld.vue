<template>
  <v-container fluid grid-list-xl>
    <v-layout align-center justify-space-around row>
      <!-- buttons -->
      <v-btn to="/SearchEmployer">Search employers</v-btn>
      <v-btn to="SearchJobs">Search jobs</v-btn>
      <!-- employers +- 3 open jobs now -->
      <v-flex xs6>
        <v-card>
          <v-card-title>
            <v-icon style="color: #f86c5c;">
              work
            </v-icon>
            Utilizatori cu/fără colaborări
          </v-card-title>
          <v-card-text>
            <div id="piechart1"></div>
          </v-card-text>
        </v-card>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  /* eslint-disable no-unused-vars */
  import firebase from '@/firebase'
  export default {
    name: 'app',
    data () {
      return {
      }
    },
    computed: {
      openedJobs () {
        console.log(this.$store.getters.jobs)
        return this.$store.getters.jobs
      }
    },
    mounted () {
      this.piechart1()
    },
    methods: {
      piechart1 () {
        var colors = ['#9c5463', '#7b4c67', '#c86060', '#5e4469', '#7f4c66', '#b25a62']
        window.google.charts.load('visualization', '1.0',
          { packages:
          ['corechart', 'bar', 'table'],
            callback: () => {
              var chart = new window.google.visualization.PieChart(document.getElementById('piechart1'))
              chart.draw(window.google.visualization.arrayToDataTable([
                ['Tip', 'Numar'],
                ['+3 jobs', 1],
                ['-3 jobs', 2]
              ]), {
                is3D: false, colors: ['#f86c5c', colors[Math.floor(Math.random() * colors.length)]]
              })
            }})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
