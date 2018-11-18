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
                  :items="jobLocation"
                  label="Locatie"
                  v-model="selectedLocation"
                >
                </v-autocomplete>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12 sm12>
                <v-autocomplete
                  :items="jobDomain"
                  label="Domain"
                  v-model="selectedDomain"
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
            <!-- SELECT Benefits -->
            <v-layout row wrap>
              <v-flex xs12 sm12>
                <v-select
                  :items="Benefits"
                  label="Benefits"
                  v-model="selectedBenefits"
                  multiple>
                </v-select>
              </v-flex>
            </v-layout>
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
                  :key="index">
                  <v-list-tile-content>
                    <v-list-tile-title>{{item.Name}} <span style="opacity: 0.3;color:grey">- {{item.Location}} </span></v-list-tile-title>
                    <v-list-tile-sub-title>{{item.Description}}...</v-list-tile-sub-title>
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
  import firebase from '@/firebase'
  export default {
    name: 'app',
    data () {
      return {
        slider: 1,
        id: null,
        valid: true,
        selectedLocation: 'All locations',
        selectedDomain: 'All domains',
        selectedBenefits: null,
        selectedName: null,
        selectedRatings: null,
        selectedSort: 'Fara Sortare',
        selectedFaculties: null,
        selectedFacultyName: null,
        jobsDetails: [],
        jobName: [],
        jobLocation: ['All locations'],
        jobDomain: ['All domains'],
        jobsKeys: [],
        jobs: [],
        Benefits: []
      }
    },
    computed: {
      dataFilter () {
        var filteredData
        filteredData = this.jobs.filter(job => {
          let matchingBenefits = true
          let matchingLocation = true
          let matchingName = true
          let matchingDomain = true
          // let matchingRatings = true
          // filter location
          matchingLocation = this.selectedLocation ? (this.selectedLocation === job.Location || this.selectedLocation === 'All locations') : true
          // filter name
          matchingName = this.selectedName ? job.Name.toLowerCase().includes(this.selectedName.toLowerCase()) : true
          // filter Benefits
          if (this.selectedBenefits) {
            if (job.Benefits) {
              var Benefitscompany = job.Benefits.split(',')
              matchingBenefits = this.selectedBenefits ? Benefitscompany.filter(elem => {
                return this.selectedBenefits.indexOf(elem) > -1
              }).length === this.selectedBenefits.length : true
            } else {
              matchingBenefits = false
            }
          }
          matchingDomain = this.selectedDomain ? (this.selectedDomain === job.Domain || this.selectedDomain === 'All domains') : true
          return matchingLocation & matchingName & matchingBenefits & matchingDomain
        })
        return filteredData
      }
    },
    created () {
      firebase.database().ref('Jobs')
        .once('value', snap => {
          const myObj = snap.val()
          this.jobsDetails = myObj
          this.jobKeys = Object.keys(this.jobsDetails)
          this.jobKeys.forEach(job => {
            this.jobName.push(this.jobsDetails[job].Name)
            this.jobLocation.push(this.jobsDetails[job].Location)
            this.jobs.push(this.jobsDetails[job])
            var Benefitscompany = this.jobsDetails[job].Benefits.split(',')
            Benefitscompany.forEach(item => {
              this.Benefits.push(item)
            })
            this.jobDomain.push(this.jobsDetails[job].Domain)
          })
        }, function (error) {
          console.log('Error: ' + error.message)
        })
    }
  }
</script>

<style>
</style>