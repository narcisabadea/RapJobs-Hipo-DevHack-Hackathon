<template>
  <v-app>
    <v-toolbar
      app
      :clipped-left="true"
      dark color="light-blue lighten-1"
    >
    <router-link :to="'/'">
      <v-toolbar-title class="white--text">Rapjobs</v-toolbar-title>
    </router-link>
      <v-spacer></v-spacer>
      <v-menu offset-y v-show="userIsAuthenticated">
        <v-btn
          flat
          slot="activator">
          <v-icon round left>account_circle</v-icon> Account
        </v-btn>
        <v-list>
          <v-list-tile>
            <router-link to="/Profile" tag="li" style="cursor:pointer">
              <v-list-tile-title> Profile </v-list-tile-title>
            </router-link>
          </v-list-tile>
          <v-list-tile  @click="onSignOut">
            <router-link to="/" tag="li" style="cursor:pointer">
              <v-list-tile-title> Sign out </v-list-tile-title>
            </router-link>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-btn flat round @click="(dialogTest = true)" v-if="ifTest === false"> Take the personality test
      </v-btn>
      <v-btn flat round @click="(dialogSignUp = true)" v-if="userIsAuthenticated === false"> Sign up
      </v-btn>
      <v-btn flat round @click="(dialogSignIn = true)" v-if="userIsAuthenticated === false"> Sign in
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>

    <v-dialog v-model="dialogSignUp" max-width="50%">
      <v-layout align-center justify-center>
        <v-flex>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Sign up</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Name"
                  v-model="Name"
                  :rules="[rules.required]"
                >
                </v-text-field>
                <v-text-field
                  label="Surname"
                  v-model="Surname"
                  :rules="[rules.required]"
                >
                </v-text-field>
                <v-text-field
                  label="Enter your E-mail"
                  v-model="email1"
                  :rules="[rules.required, rules.email]"
                >
                </v-text-field>
                <v-text-field
                  name="input-10-1"
                  label="Enter your password"
                  v-model="password2"
                  :append-icon-cb="() => (e1 = !e1)"
                  :type="e1 ? 'password' : 'text'"
                  :rules="[rules.required]"
                  counter
                >
                </v-text-field>
                <v-text-field
                  name="input-10-1"
                  label="Confirm password"
                  v-model="confirmPassword"
                  :type="e1 ? 'password' : 'text'"
                  :rules="[comparePasswords]"
                >
                </v-text-field>
              </v-form>
            </v-card-text>
              <v-btn color="primary" type="submit" @click="userSignUp">Sign Up</v-btn>
              <v-btn color="primary" type="submit" @click="(dialogSignUp = false)">Back</v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-dialog>

    <v-dialog v-model="dialogSignIn" max-width="30%">
      <v-layout align-center justify-space-around row>
        <v-flex>
          <v-card class="elevation-0">
            <v-card-text class="text-xs-center">
              <v-icon x-large color="indigo darken-1">account_circle</v-icon>
            </v-card-text>
            <v-card-text>
              <v-text-field
                v-model="email"
                label="Email adress">
              </v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                :append-icon="show ? 'visibility_off' : 'visibility'"
                :type="show ? 'text' : 'password'"
                @click:append="show = !show">
              </v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="indigo darken-1" type="submit" @click="forgotPassword"> Forgot password
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn color="indigo darken-1 white--text" @click="userSignin"> Log in
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-dialog>

    <v-dialog round v-model="dialogTest" max-width="50%" persistent>
      <v-layout align-center justify-center>
        <v-flex>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Personality Test</v-toolbar-title>
            </v-toolbar><br>
            <v-card-text>
            <v-alert
              :value="true"
              type="success"
            >
              <h3>Relax, get in a quiet place, and read the entire text before making any markings.</h3>
            </v-alert>
            </v-card-text>
              <v-btn color="primary" type="submit" @click="dialogTest=false">Exit</v-btn>
              <v-btn color="primary" to="/Test" type="submit" @click="dialogTest=false">Next</v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-dialog>
  </v-app>
</template>

<script>
 /* eslint-disable */
import firebase from '@/firebase'
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      title: 'Vuetify.js',
      show: false,
      Name: '',
      email: '',
      email1: '',
      Surname: '',
      password: '',
      password2: '',
      passwordConfirm: '',
      confirmPassword: '',
      dialogSignIn: false,
      dialogSignUp: false,
      dialogTest: false,
      e1: true,
      number: '',
      rules: {
        required: (value) => !!value || 'Required.',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      }
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    error () {
      return this.$store.getters.error
    },
    comparePasswords () {
      return this.password2 !== this.confirmPassword ? 'Passwords do not match' : ''
    },
    onLoad () {
      if (this.userIsAuthenticated) {
        this.$router.push('/')
      }
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
    ifTest () {
      return this.$store.getters.test
    }
  },
  methods: {
    userSignin () {
      this.$store.dispatch('signIn', {email: this.email, password: this.password})
      this.dialogSignIn = false
    },
    onSignOut () {
      this.$store.dispatch('signOut')
    },
    userSignUp () {
      this.$store.dispatch('signUp', {email: this.email1, password: this.password2, name: this.Name, surname: this.Surname})
      this.dialogSignUp = false
    },
    forgotPassword () {
      const emailprompt = prompt('Add your email adress', '')
      firebase.auth().sendPasswordResetEmail(emailprompt).then(function () {
        window.alert('An email has been sent to: ' + emailprompt)
      }).catch(function (error) {
        window.alert(error.message)
      })
    }
  },
  name: 'App',
  created () {
    this.$store.dispatch('AuthChange')
    this.$store.dispatch('getUserData')
    this.$store.dispatch('readJobs')
    this.$store.dispatch('readEmployer')
    this.$store.dispatch('readRatings')
    // ADD EMPLOYER
    // firebase.database().ref('Employer')
    // .push({
    //   Adress: 'Sebastian street no. 20, Bucharest',
    //   Industry: 'Customer Suppoert - Client Service',
    //   Jobs: {
    //     id: ''
    //   },
    //   Management: {
    //     1: {
    //       Name: 'Daniel Julien',
    //       JobFunction: 'Executive Chairman of the Board and Group Chief Executive Officer'
    //     }
    //   },
    //   Description: 'The company specializes in outsourced omnichannel customer experience management, also known as Business Process Outsourcing (BPO).',
    //   Name: 'Teleperformance Greece',
    //   Values: '',
    //   Website: 'https://www.teleperformance.com'
    // })
    //ADD JOBS
    // firebase.database().ref('Jobs')
    //   .push({
    //     Benefits: 'Prestigious clients',
    //     Description: 'We are looking for an ambitious person who wants to become our colleague on the short or long term.',
    //     EmployerID: '-LRY73GIBoogXFEebMec',
    //     Name: 'Lightroom/Photoshop Editor',
    //     Other: '',
    //     RecruitmentProcess: 'Tehnical interview',
    //     Requirements: {
    //       Creativity: 'true',
    //       AdobeSuite: 'true'
    //     },
    //     Salary: 100,
    //     ScheduleStart: 12,
    //     Domain: 'eCommerce',
    //     JobType: 'full-time',
    //     Location: 'Bucharest',
    //     ScheduleEnd: 20,
    //     Tag: 'Marketing',
    //     Team: {
        
    //     },
    //     Trainings: 'Design Training',
    //     Responsabilities: 'Create creative content, visually attractive and inovative.'
    //   })

    // // ADD RATINGS
    // // firebase.database().ref('Ratings/' + '-LRY7R2ae7mn0MzH06S8')
    // //   .push({
    // //       UserID: 'aLfaMJxyqGOtLq0cWv6wlMZWbNk2',
    // //       Rating: '1',
    // //       Comment: 'They refused to hire me, stating that i was overqualified for the job.'
    // //   })
    // //
    // ADD RATINGS
    // firebase.database().ref('Ratings/' + '-LRY9BS9vMehcITbDrkR')
    //   .push({
    //       UserID: 'Npx44iPtvpM6TvDVIJsmmCtERxe2',
    //       Rating: '1',
    //       Comment: 'Salary not paid on time'
    //   })
   }
}
</script>

<style>
a {
  text-decoration: none;
}
</style>