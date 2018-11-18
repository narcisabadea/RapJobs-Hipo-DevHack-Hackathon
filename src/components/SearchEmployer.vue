<template>
  <v-container fluid grid-list-xl align-content-center>
    <v-layout row>
      <v-flex xs4 align-content-center>
        <v-card>
          <v-card-text>
            <!-- INPUT NAME -->
            <v-layout row wrap>
              <v-flex xs12 sm12>
                <v-text-field
                  :items="jobName"
                  v-model="selectedName"
                  label="Nume"
                  autocomplete
                ></v-text-field>
              </v-flex>
            </v-layout>
            <!-- SELECT LOCATION -->
            <v-layout row wrap>
              <v-flex xs12 sm12>
                <v-autocomplete
                  :items="jobLocations"
                  label="Locatie"
                  v-model="selectedLocation"
                >
                </v-autocomplete>
              </v-flex>
            </v-layout>
            <!-- SELECT SORT BY RATING -->
            <!-- <v-layout row wrap>
              <v-flex xs12 sm12>
                <v-select
                  :items="itemsSort"
                  label="Sorteaza dupa rating"
                  v-model="selectedSort"
                >
                </v-select>
              </v-flex>
            </v-layout> -->
            <!-- SELECT FACILITIES -->
            <!-- <v-layout row wrap>
              <v-flex xs12 sm12>
                <v-select
                  :items="facilities"
                  label="Facilitati"
                  v-model="selectedFacilities"
                  multiple>
                </v-select>
              </v-flex>
            </v-layout> -->
            <!-- SELECT RATINGS -->
            <!-- <v-layout row wrap>
              <v-flex xs12 sm12>
                <v-select
                  :items="ratings"
                  item-text="text"
                  item-value="value"
                  label="Rating"
                  v-model="selectedRatings"
                  single-line
                  multiple>
                </v-select>
              </v-flex>
            </v-layout> -->
          </v-card-text>
        </v-card>
      </v-flex>
      <!-- REZULTATE FILTRE / LISTA -->
      <v-flex xs8>
        <v-card>
          <v-card-text>
            <v-list three-line>
              <template v-for="(item, index) in dataFilter">
                <v-list-tile
                  :key="index"
                  avatar>
                  <!-- <v-list-tile-avatar>
                    <img :src="item.Logo">
                  </v-list-tile-avatar> -->
                  <v-list-tile-content>
                    <v-list-tile-title>{{item.Name}} <span style="opacity: 0.3;color:grey">- {{item.Location}} </span></v-list-tile-title>
                    <v-list-tile-sub-title v-if="selectSearch === 'university'" class="text-truncate">{{item.Description}}...</v-list-tile-sub-title>
                    <v-list-tile-sub-title v-else class="text-truncate">{{item.Specialisations}}...</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </template>
            </v-list>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  /* eslint-disable no-unused-vars */
  export default {
    name: 'app',
    data () {
      return {
        slider: 1,
        id: null,
        valid: true,
        selectedLocation: 'Toate locatiile',
        selectedFacilities: null,
        selectedName: null,
        selectedRatings: null,
        selectedSort: 'Fara Sortare',
        selectedFaculties: null,
        selectedFacultyName: null
      }
    },
    computed: {
      // return jobs names
      jobName () {
        var jobName = []
        var jobKeys = Object.keys(this.$store.getters.jobs)
        jobKeys.forEach(job => {
          jobName.push(this.$store.getters.jobs[job].Name)
        })
        return jobName
      },
      // return universities locations
      jobLocations () {
        var jobLocation = ['Toate locatiile']
        var jobKeys = Object.keys(this.$store.getters.jobs)
        jobKeys.forEach(job => {
          jobLocation.push(this.$store.getters.jobs[job].Location)
        })
        return jobLocation
      },
      // FILTERS
      dataFilter () {
        var filteredData
        var jobs = []
        var jobsKeys = Object.keys(this.$store.getters.jobs)
        jobsKeys.forEach(job => {
          jobs.push(this.$store.getters.jobs[job])
        })
        console.log(jobs)
        console.log(this.$store.getters.jobs)
        filteredData = jobs.filter(job => {
          console.log(jobs[job])
          // let matchingFacilities = true
          let matchingLocation = true
          let matchingName = true
          // let matchingRatings = true
          // filter location
          matchingLocation = this.selectedLocation ? (this.selectedLocation === job.Location || this.selectedLocation === 'Toate locatiile') : true
          // filter name
          matchingName = this.selectedName ? job.Name.toLowerCase().includes(this.selectedName.toLowerCase()) : true
          // filter rating
          // if (this.selectedRatings) {
          //   if (this.selectedRatings.length > 0) {
          //     matchingRatings = this.selectedRatings ? this.selectedRatings.includes(Math.round(job.Rating).toString()) : true
          //   } else {
          //     matchingRatings = true
          //   }
          // }
          // filter facilities
          // if (this.selectedFacilities) {
          //   if (job.Facilities) {
          //     matchingFacilities = this.selectedFacilities ? job.Facilities.filter(elem => {
          //       return this.selectedFacilities.indexOf(elem) > -1
          //     }).length === this.selectedFacilities.length : true
          //   } else {
          //     matchingFacilities = false
          //   }
          // }
          return matchingLocation & matchingName
        })
        // filter sort by ratings
        // switch (this.selectedSort) {
        //   case 'Crescator': filteredData.sort((a, b) => {
        //     return a.Rating - b.Rating
        //   })
        //     break
        //   case 'Descrescator': filteredData.sort((a, b) => {
        //     return b.Rating - a.Rating
        //   })
        //     break
        // }
        return filteredData
      }
    }
  }
</script>

<style>
</style>