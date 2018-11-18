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
                  :items="employerName"
                  v-model="selectedName"
                  label="Nume"
                  autocomplete
                ></v-text-field>
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
                  :key="index">
                  <router-link :to="{ name: 'Employer', params: { id: index }}" tag="li" style="cursor:pointer">
                  <v-list-tile-content>
                    <v-list-tile-title>{{item.Name}} <span style="opacity: 0.3;color:grey">- {{item.Jobs | jobsLength}} </span></v-list-tile-title>
                    <v-list-tile-sub-title class="text-truncate">{{item.Description}}...</v-list-tile-sub-title>
                  </v-list-tile-content>
                  </router-link>
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
        selectedFacilities: null,
        selectedName: null,
        selectedRatings: null,
        selectedSort: 'Fara Sortare',
        selectedFaculties: null,
        selectedFacultyName: null,
        employersDetails: [],
        employerName: [],
        employersKeys: [],
        employers: []
      }
    },
    filters: {
      jobsLength: value => {
        return Object.keys(value).length
      }
    },
    computed: {
      dataFilter () {
        var filteredData
        filteredData = this.employers.filter(employer => {
          // let matchingFacilities = true
          let matchingName = true
          // let matchingRatings = true
          // filter name
          matchingName = this.selectedName ? employer.Name.toLowerCase().includes(this.selectedName.toLowerCase()) : true
          // filter facilities
          // if (this.selectedFacilities) {
          //   if (employer.Facilities) {
          //     matchingFacilities = this.selectedFacilities ? employer.Facilities.filter(elem => {
          //       return this.selectedFacilities.indexOf(elem) > -1
          //     }).length === this.selectedFacilities.length : true
          //   } else {
          //     matchingFacilities = false
          //   }
          // }
          return matchingName
        })
        return filteredData
      }
    },
    created () {
      firebase.database().ref('Employer')
        .once('value', snap => {
          const myObj = snap.val()
          this.employersDetails = myObj
          this.employerKeys = Object.keys(this.employersDetails)
          this.employerKeys.forEach(employer => {
            this.employerName.push(this.employersDetails[employer].Name)
            this.employers.push(this.employersDetails[employer])
          })
        }, function (error) {
          console.log('Error: ' + error.message)
        })
    }
  }
</script>

<style>
</style>