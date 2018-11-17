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
      <v-btn flat @click="(dialog = true)"> Sign up
      </v-btn>
      <v-btn flat> Sign in
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>

    <v-dialog v-model="dialog">
    <v-layout align-center justify-space-around row>
      <v-flex xs12 md3>
        <v-card class="elevation-0 transparent">
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
            <v-btn flat color="indigo darken-1" type="submit"> Forgot password
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn type="submit" color="indigo darken-1 white--text"> Log in
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
      Surname: '',
      password: '',
      passwordConfirm: '',
      dialog: false
    }
  },
  name: 'App'
}
</script>
