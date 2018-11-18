<template>
  <v-container fluid grid-list-xl align-content-center>
    <v-layout row>
      <v-flex xs4 align-content-center>
        <v-card>
          <v-card-text>
            <!-- SELECT UNIVERSITY/FACULTY -->
            <v-layout row wrap align-center justify-content-center>
              <v-radio-group v-model="selectSearch" row color="indigo darken-1">
                <v-radio label="Universitate" value="university"></v-radio>
                <v-radio label="Facultate" value="faculty"></v-radio>
              </v-radio-group>
            </v-layout>
            <!-- INPUT NAME -->
            <v-layout row wrap>
              <v-flex xs12 sm12>
                <v-text-field
                  :items="selectSearch === 'Universitate' ? universityName : facultyName"
                  v-model="selectedName"
                  label="Nume"
                  autocomplete
                ></v-text-field>
              </v-flex>
            </v-layout>
            <!-- SELECT STAT/PRIVAT -->
            <v-layout row wrap>
              <v-flex xs6 sm3>
                <v-checkbox
                  label="Stat"
                  v-model="typeStat">
                </v-checkbox>
              </v-flex>
              <v-flex xs6 sm3>
                <v-checkbox
                  label="Privat"
                  v-model="typePrivat">
                </v-checkbox>
              </v-flex>
            </v-layout>
            <!-- SELECT LOCATION -->
            <v-layout row wrap>
              <v-flex xs12 sm12>
                <v-autocomplete
                  :items="universityLocation"
                  label="Locatie"
                  v-model="selectedLocation"
                >
                </v-autocomplete>
              </v-flex>
            </v-layout>
            <!-- SELECT SORT BY RATING -->
            <v-layout row wrap>
              <v-flex xs12 sm12>
                <v-select
                  :items="itemsSort"
                  label="Sorteaza dupa rating"
                  v-model="selectedSort"
                >
                </v-select>
              </v-flex>
            </v-layout>
            <!-- SELECT FACILITIES -->
            <v-layout row wrap>
              <v-flex xs12 sm12>
                <v-select
                  :items="facilities"
                  label="Facilitati"
                  v-model="selectedFacilities"
                  multiple>
                </v-select>
              </v-flex>
            </v-layout>
            <!-- SELECT RATINGS -->
            <v-layout row wrap>
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
            </v-layout>
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
                  <v-list-tile-avatar>
                    <img :src="item.Logo">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <router-link :to="{ name: 'Universitypage', params: { id: item.id }}" tag="li" style="cursor:pointer">
                      <v-list-tile-title>{{item.Name}} <span style="opacity: 0.3;color:grey">- {{item.Location}} </span></v-list-tile-title>
                      <v-list-tile-sub-title>
                        <v-icon v-for="(item, index1) in roundgreen(item.Rating)" :key="index1" color="indigo darken-1">
                          star
                          </v-icon>
                          <v-icon v-for="(item, index2) in roundred(item.Rating)" :key="5 - index2" color="indigo darken-1">
                          star_border
                          </v-icon>
                          {{item.Rating}}
                        </v-list-tile-sub-title>
                      <v-list-tile-sub-title v-if="selectSearch === 'university'" class="text-truncate">{{item.Description}}...</v-list-tile-sub-title>
                      <v-list-tile-sub-title v-else class="text-truncate">{{item.Specialisations}}...</v-list-tile-sub-title>
                    </router-link>
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
        typeStat: true,
        typePrivat: true,
        valid: true,
        selectedLocation: 'Toate locatiile',
        selectedFacilities: null,
        selectedName: null,
        selectedRatings: null,
        selectedSort: 'Fara Sortare',
        selectedFaculties: null,
        itemsSort: ['Fara Sortare', 'Crescator', 'Descrescator'],
        selectSearch: 'university',
        selectedFacultyName: null
      }
    },
    computed: {
      // return facilities
      facilities () {
        return this.$store.getters.facilities
      },
      // return universities names
      universityName () {
        var universityName = []
        this.$store.getters.universityData.forEach(university => {
          universityName.push(university.Name)
        })
        return universityName
      },
      // return universities locations
      universityLocation () {
        var universityLocation = ['Toate locatiile']
        this.$store.getters.universityData.forEach(university => {
          universityLocation.push(university.Location)
        })
        return universityLocation
      },
      // return faculties names
      facultyName () {
        var facultyName = []
        this.$store.getters.facultyData.forEach(faculty => {
          facultyName.push(faculty.Name)
        })
        return facultyName
      },
      // FILTERS
      dataFilter () {
        var filteredData
        filteredData = this.$store.getters.universityData.filter(university => {
          let matchingFacilities = true
          let matchingLocation = true
          let matchingName = true
          let matchingRatings = true
          // filter location
          matchingLocation = this.selectedLocation ? (this.selectedLocation === university.Location || this.selectedLocation === 'Toate locatiile') : true
          // filter name
          matchingName = this.selectedName ? university.Name.toLowerCase().includes(this.selectedName.toLowerCase()) : true
          // filter rating
          if (this.selectedRatings) {
            if (this.selectedRatings.length > 0) {
              matchingRatings = this.selectedRatings ? this.selectedRatings.includes(Math.round(university.Rating).toString()) : true
            } else {
              matchingRatings = true
            }
          }
          // filter facilities
          if (this.selectedFacilities) {
            if (university.Facilities) {
              matchingFacilities = this.selectedFacilities ? university.Facilities.filter(elem => {
                return this.selectedFacilities.indexOf(elem) > -1
              }).length === this.selectedFacilities.length : true
            } else {
              matchingFacilities = false
            }
          }
          return matchingLocation & matchingName & matchingRatings & matchingFacilities
        })
        // filter sort by ratings
        switch (this.selectedSort) {
          case 'Crescator': filteredData.sort((a, b) => {
            return a.Rating - b.Rating
          })
            break
          case 'Descrescator': filteredData.sort((a, b) => {
            return b.Rating - a.Rating
          })
            break
        }
        return filteredData
      }
    }
  }
</script>

<style>
</style>