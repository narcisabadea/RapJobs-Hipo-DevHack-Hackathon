<template>
  <v-container grid-list-sm>
    <v-card>
      <template>
        <v-parallax style=" height: 250px" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
          <v-card-title primary-title style=" margin-left: 20px">
            <img src="https://btclub.ro/uploads/media/default/0001/01/3f98b71e128942ac69e33371d7b85ded7d21ee02.jpeg" height="100px">
            <div class="headline">{{ detailsEmployer.Name }}</div>
            {{ detailsEmployer.Adress }}
            <v-btn color="success" style=" margin-left: 20px">Add Review</v-btn>
          </v-card-title>
        </v-parallax>
      </template>
      <v-card-title style="padding-top: 50px" secondary-title>
        <div>
          <a :href="detailsEmployer.Website" target="_blank"> Website </a>
        <div>{{ detailsEmployer.Website }}</div>
        </div>
      </v-card-title>
      <v-card-title style="padding-top: 50px" secondary-title>
        <div>
          Description
          <div>{{ detailsEmployer.Description }}</div>
        </div>
      </v-card-title>
       <v-card-title secondary-title>
        <div style="padding-top: 20px">
          Industry
          <div>{{ detailsEmployer.Industry }}</div>
        </div>
      </v-card-title>
      <v-card-title secondary-title>
        <div style="padding-top: 20px">
          Values
          <div>{{ detailsEmployer.Values }}</div>
        </div>
      </v-card-title>
      <v-card-title secondary-title>
        <div style="padding-top: 20px">
          Management
          <div>
            <v-list two-line>
                <v-list-tile v-for="(item, index) in employers"
                  :key="index"
                  >
                  <v-list-tile-content>
                        <div v-for="(item, index1) in 3" :key="index1" color="indigo darken-1">
                          {{detailsEmployer.Management[item].JobFunction}}
                          </div>

                    </v-list-tile-content>
                  <v-list-tile-content>
                    <div v-for="(item, index2) in 3" :key="index2" color="indigo darken-1">
                      {{detailsEmployer.Management[item].Name}}
                    </div>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
          </div>
        </div>
      </v-card-title>
      <v-card-title secondary-title>
        <div style="padding-top: 20px">
          Jobs
          <div>{{ detailsEmployer.Jobs}}</div>
        </div>
      </v-card-title>
      <v-btn color="info" router to = "/">Back</v-btn>
    </v-card>
  </v-container>
</template>

<script>
  import firebase from '@/firebase'
  export default {
    name: 'app',
    data () {
      return {
        id: this.$route.params.id,
        idFaculties: [],
        detailsEmployer: []
      }
    },
    computed: {
      employers () {
        return this.$store.getters.employers
      }
    },
    methods: {
    },
    created () {
      this.$store.dispatch('readRatings', this.id)
      firebase.database().ref('Employer')
        .once('value', snap => {
          const myObj = snap.val()
          var details = []
          var employersDetails = myObj
          var employerKeys = Object.keys(employersDetails)
          console.log(employersDetails)
          var x = employerKeys[this.id]
          console.log(x)
          var y = employerKeys.indexOf(x)
          employerKeys.forEach(employer => {
            details.push(employersDetails[employer])
          })
          this.detailsEmployer = details[y]
        }, function (error) {
          console.log('Error: ' + error.message)
        })
    },
    filters: {
    }
}
</script>

 <style>
 #imgLogo {
   max-height: 100px;
 }
 #input {
   display: none;
 }
</style>
