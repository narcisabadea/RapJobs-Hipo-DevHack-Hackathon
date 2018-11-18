import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '@/firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fb: {
      db: firebase.database()
    },
    user: '',
    error: null,
    userdetails: {},
    jobs: null,
    employers: null,
    ratings: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    gotUser: (state, payload) => {
      state.userdetails = payload
    },
    emptyJobs: (state) => {
      state.jobs = []
    },
    gotJobs: (state, payload) => {
      state.jobs = payload
    },
    emptyEmployer: (state) => {
      state.employers = []
    },
    gotEmployer: (state, payload) => {
      state.employers = payload
    },
    emptyRating: (state) => {
      state.ratings = []
    },
    gotRating: (state, payload) => {
      state.ratings = payload
    }
  },
  actions: {
    signIn ({commit}, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: firebase.auth().currentUser.uid
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setError', error)
          }
        )
    },
    signUp ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: firebase.auth().currentUser.uid
            }
            commit('setUser', newUser)
            firebase.database().ref('Employee/' + newUser.id).set({
              Name: payload.name,
              Surname: payload.surname,
              Email: payload.email,
              Test: false
            })
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    signOut ({commit}) {
      firebase.auth().signOut().then(function () {
        commit('setUser', null)
      }).catch(
        error => {
          console.log(error)
        })
    },
    AuthChange ({commit}) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          commit('setUser', user.uid)
        } else {
          commit('setUser', null)
        }
      })
    },
    getUserData ({commit}) {
      firebase.database().ref('Employee/')
        .on('value', snap => {
          const myObj = snap.val()
          commit('gotUser', myObj)
        })
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
    readJobs ({commit}) {
      return firebase.database().ref('Jobs')
        .on('value', snap => {
          commit('emptyJobs')
          const myObj = snap.val()
          commit('gotJobs', myObj)
        }, function (error) {
          console.log('Error: ' + error.message)
        })
    },
    readEmployer ({commit}) {
      return firebase.database().ref('Employer')
        .on('value', snap => {
          commit('emptyEmployer')
          const myObj = snap.val()
          commit('gotEmployer', myObj)
        }, function (error) {
          console.log('Error: ' + error.message)
        })
    },
    readRatings ({commit}) {
      return firebase.database().ref('Ratings')
        .on('value', snap => {
          commit('emptyRating')
          const myObj = snap.val()
          commit('gotRating', myObj)
        }, function (error) {
          console.log('Error: ' + error.message)
        })
    }
  },
  getters: {
    user: state => state.user,
    userdetails: state => state.userdetails,
    jobs: state => state.jobs,
    employers: state => state.employers,
    ratings: state => state.ratings
  }
})
