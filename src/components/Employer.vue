<template>
  <v-container grid-list-sm>
        
        <v-card>
          <template>
  <v-parallax style=" height: 250px;" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
            <v-card-title primary-title style=" margin-left: 20px;">
            <img src="https://btclub.ro/uploads/media/default/0001/01/3f98b71e128942ac69e33371d7b85ded7d21ee02.jpeg" height="100px">
            <div class="headline">{{ detailsEmployer.Name }}</div>
            {{ detailsEmployer.Adress }}
            <v-btn color="success" style=" margin-left: 20px;">Add Review</v-btn>
           </v-card-title>
             </v-parallax>
          </template>
        <v-card-title style="padding-top: 50px;" secondary-title>
          <div>
            <div>
              <a :href="detailsEmployer.Website" target="_blank"> Website </a>
            </div>
          </div>
          <div>
            <div>{{ detailsEmployer.Description }}</div>
          </div>
        </v-card-title>
        <v-layout col wrap>
            <v-list dense>
              
              <v-list-tile>
                <v-list-tile-content style=" height:100px padding-top: 50px;"> {{ detailsEmployer.Industry}} </v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content style=" height:100px padding-top: 50px;"> {{ detailsEmployer.Values}} </v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                
                <v-list-tile-content v-badge style=" height:100px padding-top: 50px;"> {{ detailsEmployer.Website}} </v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content style="height:100px padding-top: 50px;"> {{ detailsEmployer.Management}} </v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content >{{ detailsEmployer.Jobs}} </v-list-tile-content>
              </v-list-tile>
            </v-list>
            
        </v-layout>
        <div v-for="(number, index) in detailsEmployer.Jobs" :key="index">
    <v-flex xs12 sm6 offset-sm3 lg4>
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">detailsEmployer.Jobs</div>
            <span class="grey--text">1,000 miles of wonder</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat>Share</v-btn>
          <v-btn flat color="purple">Explore</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
        </div>
     
        <v-btn color="info" router to = "/">Inapoi</v-btn>
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
      firebase.database().ref('Employer')
        .once('value', snap => {
          const myObj = snap.val()
          var details = []
          var employersDetails = myObj
          var employerKeys = Object.keys(employersDetails)
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
