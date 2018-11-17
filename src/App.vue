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
      <v-btn flat @click="(dialogSignUp = true)"> Sign up
      </v-btn>
      <v-btn flat @click="(dialogSignIn = true)"> Sign in
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
                  hint="At least 8 characters"
                  v-model="password"
                  min="8"
                  :append-icon-cb="() => (e1 = !e1)"
                  :type="e1 ? 'password' : 'text'"
                  :rules="[rules.required]"
                  counter
                >
                </v-text-field>
                <v-text-field
                  name="input-10-1"
                  label="Confirm password"
                  hint="At least 8 characters"
                  v-model="confirmPassword"
                  min="8"
                  :type="e1 ? 'password' : 'text'"
                  :rules="[comparePasswords]"
                >
                </v-text-field>
              </v-form>
            </v-card-text>
              <v-btn color="primary" type="submit" @click="(dialogSignUp = false)">Sign Up</v-btn>
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
              <v-btn type="submit" color="indigo darken-1 white--text" @click="(userSignin) && (dialogSignIn = false)"> Log in
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-dialog>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
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
      passwordConfirm: '',
      confirmPassword: '',
      dialogSignIn: false,
      dialogSignUp: false,
      e1: true,
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
      return this.password !== this.confirmPassword ? 'Passwords do not match' : ''
    }
  },
  methods: {
    userSignin () {
      console.log(this.email)
      this.$store.dispatch('signIn', {email: this.email, password: this.password})
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
  name: 'App'
}
</script>
