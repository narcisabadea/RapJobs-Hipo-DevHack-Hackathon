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
    userdetails: {}
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
      console.log(this.state.user)
      console.log(firebase.auth().currentUser.uid)
      firebase.database().ref('Employee/')
        .on('value', snap => {
          console.log(snap)
          console.log('wefw' + this.$state.user)
          const myObj = snap.val()
          console.log(myObj)
          commit('gotUser', myObj)
        })
    }
  },
  getters: {
    user: state => state.user,
    userdetails: state => state.userdetails
  }
})
