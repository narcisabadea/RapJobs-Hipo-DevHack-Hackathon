<template>
  <v-container fluid grid-list-xl align-content-center>
    <v-layout row>
      <div class="search-employer">
        <v-flex xs4 align-content-center>
          <v-card>
            <v-card-text>
              <!-- INPUT NAME -->
              <v-layout row wrap>
                <v-flex xs12 sm12>
                  <v-text-field
                    :items="employerName"
                    v-model="selectedName"
                    label="Name"
                    autocomplete
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs12 sm12>
                  <v-text-field
                    :items="employerAddress"
                    v-model="selectedAddress"
                    label="Address"
                    autocomplete
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-autocomplete
                label="Industry"
                :items="employerIndustry"
                v-model="industry"
              >
              </v-autocomplete>
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
                <template v-for="(item, index) in dataFilterEmployer">
                  <v-list-tile :key="index">
                    <router-link
                      :to="{ name: 'Employer', params: { id: index } }"
                      tag="li"
                      style="cursor:pointer"
                    >
                      <v-list-tile-content>
                        <v-list-tile-title
                          >{{ item.Name }}
                          <span style="opacity: 0.3;color:grey"
                            >- {{ item.Jobs | jobsLength }}
                          </span></v-list-tile-title
                        >
                        <v-list-tile-sub-title class="text-truncate"
                          >{{ item.Description }}...</v-list-tile-sub-title
                        >
                      </v-list-tile-content>
                    </router-link>
                  </v-list-tile>
                </template>
              </v-list>
            </v-card-text>
          </v-card>
        </v-flex>
      </div>
      <div class="search-jobs">
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
                    :items="jobType"
                    label="Locatie"
                    v-model="selectedType"
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
              <v-layout row wrap>
                <v-flex xs12 sm12>
                  <v-select
                    :items="Benefits"
                    label="Benefits"
                    v-model="selectedBenefits"
                    multiple
                  >
                  </v-select>
                </v-flex>
              </v-layout>
              <v-layout row wrap>
                <v-flex xs12 sm12>
                  <v-select
                    :items="Requirements"
                    label="Requirements"
                    v-model="selectedRequirements"
                    multiple
                  >
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
                <template v-for="(item, index) in dataFilterJobs">
                  <v-list-tile :key="index">
                    <v-list-tile-content>
                      <v-list-tile-title
                        >{{ item.Name }}
                        <span style="opacity: 0.3;color:grey"
                          >- {{ item.Location }}
                        </span></v-list-tile-title
                      >
                      <v-list-tile-sub-title
                        >{{ item.Description }}...</v-list-tile-sub-title
                      >
                    </v-list-tile-content>
                  </v-list-tile>
                </template>
              </v-list>
            </v-card-text>
          </v-card>
        </v-flex>
      </div>
      <div class="search-map">
        <v-flex>
          <div id="map"></div>
        </v-flex>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from "firebase";
export default {
  name: "search",
  data() {
    return {
      slider: 1,
      id: null,
      valid: true,
      selectedFacilities: null,
      selectedName: null,
      selectedRatings: null,
      selectedSort: "Fara Sortare",
      selectedAddress: null,
      employersDetails: [],
      map: null,
      employerName: [],
      employersKeys: [],
      employers: [],
      employerAddress: ["All locations"],
      employerIndustry: ["All industries"],
      industry: null,
      jobType: ["full-time", "part-time"],
      selectedLocation: "All locations",
      selectedDomain: "All domains",
      selectedBenefits: null,
      selectedFaculties: null,
      selectedFacultyName: null,
      selectedType: "full-time",
      jobsDetails: [],
      jobName: [],
      jobLocation: ["All locations"],
      jobDomain: ["All domains"],
      jobsKeys: [],
      jobs: [],
      Benefits: [],
      Requirements: [],
      selectedRequirements: [],
    };
  },
  filters: {
    jobsLength: (value) => {
      return Object.keys(value).length;
    },
  },
  computed: {
    dataFilterEmployer() {
      var filteredData;
      filteredData = this.employers.filter((employer) => {
        // let matchingFacilities = true
        let matchingName = true;
        let matchingAddress = true;
        let matchingIndustry = true;
        // let matchingRatings = true
        // filter name
        matchingName = this.selectedName
          ? employer.Name.toLowerCase().includes(
              this.selectedName.toLowerCase()
            )
          : true;
        matchingAddress = this.selectedAddress
          ? employer.Adress.toLowerCase().includes(
              this.selectedAddress.toLowerCase()
            )
          : true;
        matchingIndustry = this.industry
          ? employer.Industry.toLowerCase().includes(
              this.industry.toLowerCase()
            ) || this.industry === "All industries"
          : true;
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
        return matchingName & matchingAddress & matchingIndustry;
      });
      return filteredData;
    },
    dataFilterJobs() {
      var filteredData;
      filteredData = this.jobs.filter((job) => {
        let matchingBenefits = true;
        let matchingLocation = true;
        let matchingName = true;
        let matchingDomain = true;
        let matchingType = true;
        let matchingRequirements = true;
        // let matchingRatings = true
        // filter location
        matchingLocation = this.selectedLocation
          ? this.selectedLocation === job.Location ||
            this.selectedLocation === "All locations"
          : true;
        // filter name
        matchingName = this.selectedName
          ? job.Name.toLowerCase().includes(this.selectedName.toLowerCase())
          : true;
        // filter Benefits
        if (this.selectedBenefits) {
          if (job.Benefits) {
            var Benefitscompany = job.Benefits.split(",");
            matchingBenefits = this.selectedBenefits
              ? Benefitscompany.filter((elem) => {
                  return this.selectedBenefits.indexOf(elem) > -1;
                }).length === this.selectedBenefits.length
              : true;
          } else {
            matchingBenefits = false;
          }
        }
        if (this.selectedRequirements) {
          if (job.Requirements) {
            var Requirementscompany = Object.keys(job.Requirements);
            matchingRequirements = this.selectedRequirements
              ? Requirementscompany.filter((elem) => {
                  return this.selectedRequirements.indexOf(elem) > -1;
                }).length === this.selectedRequirements.length
              : true;
          } else {
            matchingRequirements = false;
          }
        }
        matchingType = this.selectedType
          ? this.selectedType === job.JobType
          : true;
        matchingDomain = this.selectedDomain
          ? this.selectedDomain === job.Domain ||
            this.selectedDomain === "All domains"
          : true;
        return (
          matchingLocation &
          matchingName &
          matchingBenefits &
          matchingDomain &
          matchingType &
          matchingRequirements
        );
      });
      return filteredData;
    },
  },
  created() {
    firebase
      .database()
      .ref("Employer")
      .once(
        "value",
        (snap) => {
          const myObj = snap.val();
          this.employersDetails = myObj;
          this.employerKeys = Object.keys(this.employersDetails);
          this.employerKeys.forEach((employer) => {
            this.employerName.push(this.employersDetails[employer].Name);
            this.employers.push(this.employersDetails[employer]);
            this.employerAddress.push(this.employersDetails[employer].Adress);
            this.employerIndustry.push(
              this.employersDetails[employer].Industry
            );
          });
        },
        function(error) {
          console.log("Error: " + error.message);
        }
      );
    firebase
      .database()
      .ref("Jobs")
      .once(
        "value",
        (snap) => {
          const myObj = snap.val();
          this.jobsDetails = myObj;
          this.jobKeys = Object.keys(this.jobsDetails);
          this.jobKeys.forEach((job) => {
            this.jobName.push(this.jobsDetails[job].Name);
            this.jobLocation.push(this.jobsDetails[job].Location);
            this.jobs.push(this.jobsDetails[job]);
            var Benefitscompany = this.jobsDetails[job].Benefits.split(",");
            Benefitscompany.forEach((item) => {
              this.Benefits.push(item);
            });
            this.jobDomain.push(this.jobsDetails[job].Domain);
            if (this.jobsDetails[job].Requirements) {
              var Requirements = Object.keys(
                this.jobsDetails[job].Requirements
              );
              Requirements.forEach((item) => {
                this.Requirements.push(item);
              });
            }
          });
        },
        function(error) {
          console.log("Error: " + error.message);
        }
      );
  },
      mounted () {
      // INIT MAP
      this.map = new window.google.maps.Map(document.getElementById('map'), {
        center: {lat: +44.4243931, lng: +26.1079027},
        zoom: 16
      })
      var employers = {}
      firebase.database().ref('Employer')
        .on('value', snap => {
          employers = snap.val()
          const keysEmployers = Object.keys(employers)
          keysEmployers.forEach(key => {
            var marker = new window.google.maps.Marker({
              position: new window.google.maps.LatLng(+employers[key].LL.Lat, +employers[key].LL.Long),
              map: this.map,
              title: employers[key].Name
            })
            var y = keysEmployers.indexOf(key)
            console.log(y)
            var path = 'Employer'
            console.log(path)
            var infowindow = new window.google.maps.InfoWindow()
            window.google.maps.event.addListener(marker, 'click', function () {
              var contentString = '<div>' + employers[key].Name + '</div>'
              infowindow.setContent(contentString)
              infowindow.open(this.map, this)
            }.bind(marker))
          })
        }, function (error) {
          console.log('Error: ' + error.message)
        })
    }
};
</script>

<style scoped>
 #map {
   width: 100%;
   min-height: 570px;
   background-color: grey;
 }
</style>
