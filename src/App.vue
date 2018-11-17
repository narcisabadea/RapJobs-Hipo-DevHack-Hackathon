<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="true"
      dark color="primary"
    >
      <v-toolbar-title class="white--text">Titlu :)</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat round @click="(dialogTest = true)"> Take the personality test
      </v-btn>
      <v-btn flat round @click="(dialogSignUp = true)"> Sign up
      </v-btn>
      <v-btn flat round @click="(dialogSignIn = true)"> Sign in
      </v-btn>
      <v-btn flat to="/profile"> Profile
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

    <v-dialog v-model="dialogTest" max-width="50%" persistent>
      <v-layout align-center justify-center>
        <v-flex>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Personality Test</v-toolbar-title>
            </v-toolbar><br>
            <v-card-text>
              <p>1.Relax, get in a quiet place, and read the entire text before making any markings.</p>
              <p>2.Before each word on the test below, place a number that best describes you, 5 being most like you and 1 being least like you. Try to be objective.</p>
              <p>3.Turn the page over for instructions on scoring ONLY after completing the test.</p>
            </v-card-text>
            <v-btn color="primary" type="submit" @click="dialogTest=false">Exit</v-btn>
            <v-btn color="primary" type="submit" @click="(dialogTestNext=true) && (dialogTest=false)">Next</v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-dialog>

     <v-dialog v-model="dialogTestNext">
      <v-layout>
        <v-card>
          <v-card-title primary-title> 
            Personality Test
          </v-card-title>
          <v-layout col>
            <v-flex>
              <v-list dense>
                <v-list-tile>
                  <v-list-tile-content>OPTIMISTIC</v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
                <v-list-tile>
                  <v-list-tile-content>VERY QUIET</v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
                <v-list-tile>
                  <v-list-tile-content>DEEP FEELING</v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
                <v-list-tile>
                  <v-list-tile-content>EMOTIONAL</v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
              </v-list>
            </v-flex>
          </v-layout>
        </v-card>
      </v-layout>
    </v-dialog>

    




    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
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
      dialogTestNext: false,
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
    }
  },
  methods: {
    userSignin () {
      this.$store.dispatch('signIn', {email: this.email, password: this.password})
      this.dialogSignIn = false
    },
    userSignUp () {
      this.$store.dispatch('signUp', {email: this.email1, password: this.password2, name: this.Name, surname: this.Surname})
      this.dialogSignUp = false
    },
    forgotPassword () {
      const emailprompt = prompt('Introdu adresa de email', '')
      firebase.auth().sendPasswordResetEmail(emailprompt).then(function () {
        window.alert('A fost trimis un email de recuperare a parolei la adresa: ' + emailprompt)
      }).catch(function (error) {
        window.alert(error.message)
      })
    }
  },
  name: 'App',
  created () {
    this.$store.dispatch('AuthChange')
    this.$store.dispatch('getUserData')
    // ADD EMPLOYER
    // firebase.database().ref('Employer')
    // .push({
    //   Adress: 'Brasov street no.15, Bucharest',
    //   Industry: 'Retail',
    //   Jobs: {
    //     id: '-LRY73GIBoogXFEebMec'
    //   },
    //   Management: {
    //     1: {
    //       Name: 'Frans W. H. Muller',
    //       JobFunction: 'Chairman & CEO'
    //     },
    //     2: {
    //       Name: 'Ahold Delhaize',
    //       JobFunction: 'Chief Operating Officer'
    //     }
    //   },
    //   Description: 'AT DELHAIZE AMERICA, DIVERSITY AND INCLUSION IS IMPORTANT TO ALL ASPECTS OF OUR BUSINESS, INCLUDING WORKPLACE, MARKETPLACE, SUPPLIERS AND COMMUNITIES. A DIVERSE WORKFORCE MAKES US A BETTER COMPANY AND IS ESSENTIAL TO OUR CONTINUED GROWTH.',
    //   Name: 'Food Lion',
    //   Values: 'At Food Lion, Associates are the most important assets to our organization. We want associates to have meaningful careers full of variety and challenges. Each associate contributes to the overall success of Food Lion, and in return, we strive to provide all associates with a fulfilling work experience and reward performance and commitment.',
    //   Website: 'https://www.foodlion.com'
    // })
    // ADD JOBS
    // firebase.database().ref('Jobs')
    //   .push({
    //     Benefits: 'Flexible hours, Prestigious clients, Company retreats',
    //     Description: 'We are looking for an ambitious, innovative and flexible person who wants to become our colleague on the short or long term.',
    //     EmployerID: '-LRY73GIBoogXFEebMec',
    //     Name: 'Sales Assistant',
    //     Other: '',
    //     RecruitmentProcess: 'Verbal interview',
    //     Requirements: {
    //       Sales: 'true',
    //       CustomerSupport: 'true'
    //     },
    //     Salary: 700,
    //     ScheduleStart: 7,
    //     Domain: 'Retail',
    //     JobType: 'full-time',
    //     Location: 'Cluj Napoca',
    //     ScheduleEnd: 15,
    //     Tag: 'Retail',
    //     Team: {
    //       1: {
    //         Name: 'Andrei',
    //         JobFunction: 'Head of Retail'
    //       },
    //       2: {
    //         Name: 'Mircea',
    //         JobFunction: 'Supervisor Retail'
    //       }
    //     },
    //     Trainings: 'Training Retail',
    //     Responsabilities: 'Interact with the clients to find their needs and offer them the best solutions and alternatives to them.'
    //   })

    // ADD RATINGS
    // firebase.database().ref('Ratings/' + '-LRY7R2ae7mn0MzH06S8')
    //   .push({
    //       UserID: 'aLfaMJxyqGOtLq0cWv6wlMZWbNk2',
    //       Rating: '1',
    //       Comment: 'They refused to hire me, stating that i was overqualified for the job.'
    //   })
    //
    // ADD RATINGS
    firebase.database().ref('Ratings/' + '-LRXzNWrOhk8SFAjAAvK')
      .push({
          UserID: 'uB83DFQfw0cKp2dOghgesIOesMB3',
          Rating: '5',
          Comment: 'The best team i have ever met, they are my family and i love them all. Here i evolved not only education wise but also as a human!'
      })
   }
}
</script>