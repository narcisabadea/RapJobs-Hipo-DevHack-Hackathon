 <template>
   <v-container>
      <v-layout justify-center>
          <v-flex xs6>
          <v-layout>
            <v-flex>
              <v-card>
                <img height="200">
                <input type="file" accept="image/*" style="display:none" ref="pictureInput" @change="pictureSelect">
                <v-btn
                  :loading="loading"
                  @click.native="loader = 'loading'"
                  @click="addPicture"
                  >
                    Incarca poza
                    <v-icon right dark>cloud_upload</v-icon>
                </v-btn>
                <v-card-text>
                  <v-text-field
                    name="nume"
                    label="Last name"
                    id="nume"
                    v-model="name">
                    </v-text-field>
                  <v-spacer></v-spacer>
                  <v-text-field
                    name="prenume"
                    label="First name"
                    id="prenume"
                    v-model="surname">
                    </v-text-field>
                  <v-btn color="primary" flat @click="dialogEmail = true">Change email</v-btn>
                  <v-btn color="primary" flat @click="dialogPassword = true">Change password</v-btn>
                  <v-flex>
                  <v-btn color="primary">Save</v-btn>
                  <v-btn flat color="primary" router to = "/">Back</v-btn>
                  </v-flex>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-dialog v-model="dialogEmail" width="400">
          <v-card>
            <v-card-title class="headline grey lighten-2">
              Add a new email adress
            </v-card-title>
            <v-card-text>
              <v-text-field
                prepend-icon="email"
                v-model="email2"
                id="email"
                label="New email adress">
                  New email adress
              </v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                flat
                @click="updateEmail"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        
        <v-dialog v-model="dialogPassword" width="400">
          <v-card>
            <v-card-title class="headline grey lighten-2">
              Add a new password
            </v-card-title>
            <v-card-text>
              <v-text-field
                prepend-icon="lock"
                v-model="password2"
                id="pass"
                :append-icon="show1 ? 'visibility_off' : 'visibility'"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1"
                label="Repeat the password">
                  Add a new password
              </v-text-field>
              <v-text-field
                prepend-icon="lock"
                v-model="passwordConfirm"
                :append-icon="show2 ? 'visibility_off' : 'visibility'"
                :type="show2 ? 'text' : 'password'"
                @click:append="show2 = !show2"
                :rules="[comparePasswords]"
                label="Repeat the password">
                Repeat the password
              </v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                flat
                @click="updatePassword"
              >
                Salveaza
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

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
      email2: '',
      show1: '',
      show2: '',
      name: '',
      surname: '',
      e1: true,
      oldpass: '',
      password2: '',
      confirmPassword: '',
      passwordConfirm: '',
      changeDetails: false,
      user1: null,
      ImageUrl: '',
      Image: null,
      selectedFile: null,
      downloadURL: null,
      loading3: false,
      dialogEmail: false,
      dialogPassword: false,
      loading: false,
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
      return this.$store.getters.userdetails
    },
    comparePasswords () {
      return this.password2 !== this.passwordConfirm ? 'Parolele nu coincid' : ''
    },
    getuserdetails () {
      console.log("1231",this.keysUsers.indexOf(this.user))
      const x = this.keysUsers.indexOf(this.user.uid)
      
      const userdet = this.userdetails[x]
      return userdet
    }
  },
  created () {
    return this.$store.getters.userdetails
  },
  methods: {
    user () {
      firebase.database().ref('Employee/')
        .on('value', snap => {
          console.log(snap.val())
          const myObj = snap.val()
          const x= firebase.auth().currentUser
          console.log(myObj[x.uid])
          console.log(myObj[x.uid].Name)
          console.log(myObj[x.uid].Surname)
         this.name = myObj[x.uid].Name
         this.surname = myObj[x.uid].Surname
          console.log(this.name)
        })
    },
    updateEmail () {
      this.dialogEmail = false
      var email = document.getElementById('email').value
      firebase.auth().currentUser.updateEmail(email).then(function () {
        firebase.auth().currentUser.sendEmailVerification().then(function () {
          console.log('email sent')
        }).catch(function (error) {
          console.log('error', error)
        })
      }).catch(function (error) {
        console.log('error', error)
      })
    },
    updatePassword () {
      this.dialog = false
      var pass = document.getElementById('pass').value
      firebase.auth().currentUser.updatePassword(pass).then(function () {
        console.log('succes')
      }).catch(function (error) {
        console.log(error)
      })
    },
    addPicture () {
      this.$refs.pictureInput.click()
    },
    pictureSelect (payload) {
      const selectedFile = payload.target.files[0]
      const filesName = this.user.uid
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.ImageUrl = fileReader.result
      })
      fileReader.readAsDataURL(selectedFile)
      this.ImageUrl = selectedFile
      const storageRef = firebase.storage().ref('ProfilePictures/' + filesName)
      console.log(storageRef)
      const uploadTask = storageRef.put(selectedFile)
      uploadTask.on('state_changed', snapshot => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log('Upload is ' + progress + '% done')
      }, error => {
        console.log(error)
      }, () => {
        console.log('succes')
        var downloadURL = uploadTask.snapshot.downloadURL
        console.log('Done. Enjoy', downloadURL)
        this.Image = downloadURL
        firebase.database().ref('ProfilePictures/' + this.user.uid).update({
          Image: downloadURL
        })
      })
    }
  },
  created () {
    this.user()
    console.log( this.user())
    this.$store.dispatch('getUserData')
    
}}
</script>