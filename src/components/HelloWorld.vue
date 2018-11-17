<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
        <blockquote>
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
/* eslint-disable */
  import firebase from '@/firebase'
  export default {
    data () {
      return {
      }
    },
    // created () {
    //   firebase.database().ref('Angajator')
    //     .push({
    //       titlu: 'this.title',
    //       avatar: 'http://lorempixel.com/100/100/'
    //     })
    //   }
  }
</script>