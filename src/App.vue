<template>
  <v-app>
    <v-app-bar app :clipped-left="true" dark color="light-blue lighten-1">
      <router-link :to="'/'">
        <v-toolbar-title class="white--text">Rapjobs</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
        <v-btn text to="/Profile" v-show='userIsAuthenticated'>
          <v-icon rounded left>mdi-account</v-icon> Profile
        </v-btn>
          <v-btn
        text
        rounded
        @click="dialogTest = true"
        v-if="ifTest === false && userIsAuthenticated === true"
      >
       <v-icon rounded left>mdi-file</v-icon> 
        Take the test

      </v-btn>
         <v-btn text to="/" @click="onSignOut" v-show='userIsAuthenticated'>
          <v-icon rounded left>mdi-power</v-icon>Log out
        </v-btn>
    
      <v-btn
        text
        rounded
        @click="dialogSignUp = true"
        v-if="userIsAuthenticated === false"
      >
        Sign up
      </v-btn>
      <v-btn
        text
        rounded
        @click="dialogSignIn = true"
        v-if="userIsAuthenticated === false"
      >
        Sign in
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>

    <v-dialog v-model="dialogSignUp" max-width="50%">
      <v-card class="elevation-0">
        <v-row class="container-style">
          <v-col cols="12" sm="6" align="center" justify="space-between">
            <img src="./assets/signup.png" style="width: 100%;" />
            <v-btn
              text
              color="indigo darken-1"
              type="submit"
              @click="openSignInDialog"
            >
              Already have an account? Login
            </v-btn>
          </v-col>

          <v-col cols="12" sm="6">
            <div class="signup-text">
              Create your account
            </div>
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
            <v-card-actions>
              <v-btn color="indigo darken-1 white--text" type="submit" @click="userSignUp"
                >Sign Up</v-btn
              >
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogSignIn" max-width="50%">
      <v-card class="elevation-0">
        <v-row class="container-style">
          <v-col cols="12" sm="6" align="center" justify="space-around">
            <img src="./assets/login.png" style="width: 100%" />
            <v-btn
              text
              color="indigo darken-1"
              type="submit"
              @click="openSignUpDialog"
            >
              Create an account
            </v-btn>
          </v-col>
          <v-col cols="12" sm="6">
            <div class="login-text">
              Login
            </div>
            <v-card-text>
              <v-text-field v-model="email" label="Email"> </v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                :append-icon="show ? 'mdi-eye-off' : 'mdi-eye'"
                :type="show ? 'text' : 'password'"
                @click:append="show = !show"
              >
              </v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn color="indigo darken-1 white--text" @click="userSignin">
                Login
              </v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>

    <v-dialog rounded v-model="dialogTest" max-width="50%" persistent>
      <v-layout align-center justify-center>
        <v-flex>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Personality Test</v-toolbar-title> </v-toolbar
            ><br />
            <v-card-text>
              <v-alert :value="true" type="success">
                <h3>
                  Relax, get in a quiet place, and read the entire text before
                  making any markings.
                </h3>
              </v-alert>
            </v-card-text>
            <v-btn color="primary" type="submit" @click="dialogTest = false"
              >Exit</v-btn
            >
            <v-btn
              color="primary"
              to="/Test"
              type="submit"
              @click="dialogTest = false"
              >Next</v-btn
            >
          </v-card>
        </v-flex>
      </v-layout>
    </v-dialog>
  </v-app>
</template>

<script>
/* eslint-disable */
import firebase from "firebase";
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: "bubble_chart",
          title: "Inspire",
        },
      ],
      miniVariant: false,
      right: true,
      title: "Vuetify.js",
      show: false,
      Name: "",
      email: "",
      email1: "",
      Surname: "",
      password: "",
      password2: "",
      passwordConfirm: "",
      confirmPassword: "",
      dialogSignIn: false,
      dialogSignUp: false,
      dialogTest: false,
      e1: true,
      number: "",
      rules: {
        required: (value) => !!value || "Required.",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    userdetails() {
      return this.$store.getters.userdetails;
    },
    error() {
      return this.$store.getters.error;
    },
    comparePasswords() {
      return this.password2 !== this.confirmPassword
        ? "Passwords do not match"
        : "";
    },
    onLoad() {
      if (this.userIsAuthenticated) {
        this.$router.push("/");
      }
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },
    ifTest() {
      return this.$store.getters.test;
    },
  },
  methods: {
    userSignin() {
      this.$store.dispatch("signIn", {
        email: this.email,
        password: this.password,
      });
      this.dialogSignIn = false;
    },
    onSignOut() {
      this.$store.dispatch("signOut");
    },
    userSignUp() {
      this.$store.dispatch("signUp", {
        email: this.email1,
        password: this.password2,
        name: this.Name,
        surname: this.Surname,
      });
      this.dialogSignUp = false;
    },
    openSignUpDialog() {
      this.dialogSignUp = true;
      this.dialogSignIn = false;
    },
    openSignInDialog() {
      this.dialogSignIn = true;
      this.dialogSignUp = false;
    },
  },
  name: "App",
  created() {
    this.$store.dispatch("AuthChange");
    this.$store.dispatch("getUserData");
    this.$store.dispatch("readJobs");
    this.$store.dispatch("readEmployer");
    this.$store.dispatch("readRatings");
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
  },
};
</script>

<style>
a {
  text-decoration: none;
}
html {
  color: #444444;
}
.login-text {
  font-weight: bold;
  font-size: 28px;
  margin-left: 15px;
  margin-bottom: 40px;
}
.container-style {
  padding: 20px 10px 20px 10px;
}
.signup-text {
  font-weight: bold;
  font-size: 28px;
  margin-left: 15px;
  margin-bottom: 25px;
}
.v-application {
      background-color: rgb(232 240 254 / 50%);
}
</style>
