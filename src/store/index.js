import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '@/firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    fb: {
      db: firebase.database()
    },
    user: null,
    error: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setError (state, payload) {
      state.error = payload
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
            console.log(payload.email)
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setError', error)
          }
        )
    }
  },
  getters: {
    user: state => state.user
  }
})
