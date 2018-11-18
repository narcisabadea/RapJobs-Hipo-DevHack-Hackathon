 <template>
   <v-container>
      <v-layout justify-center>
          <v-flex xs6>
          <v-layout>
            <v-flex>
              <v-card>
                <v-card-text>
                  <v-text-field
                    name="nume"
                    label="Last name"
                    id="nume"
                    v-model="userdet.Name"
                  ></v-text-field>
                  <v-spacer></v-spacer>
                  <v-text-field
                    name="prenume"
                    label="First name"
                    id="prenume"
                    v-model="userdet.Surname"
                  ></v-text-field>
                  <v-btn color="primary">Save</v-btn>
                  <v-btn flat color="primary" router to = "/">Back</v-btn>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
   </v-container>
 </template>

<style>
img {
  margin: 0;
  padding: 0;
}
#imagine {
  display: block;
}
</style>

<script>
/* eslint-disable */
import firebase from '@/firebase'
export default {
  name: 'Profile',
  data () {
    return {
      password: '',
      email: '',
      e1: true,
      oldpass: '',
      confirmPassword: '',
      user1: null,
      imageUrl: '',
      image: null,
      selectedFile: null,
      downloadURL: null,
      loading3: false,
      rules: {
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Email invalid.'
        }
      },
      userdet: {
        Name: '',
        Surname: ''
      }
    }
  },
  computed: {
    userdetails () {

    }
  },
  methods: {
  },
  mounted () {
    console.log('nuuuuuu')
    console.log(this.$store.getters.user)
    return firebase.database().ref('Employee/' + this.$store.getters.user)
      .on('value', snap => {
        console.log(snap)
        console.log('wefw')
        const myObj = snap.val()
        this.userdet = {
          Name: myObj.Name,
          Surname: myObj.Surname
        }
        console.log(myObj)
      })
  }
}
</script>