<template>
  <v-container grid-list-sm>
    <v-card>
      <v-row>
        <v-col cols="12" sm="3">
          <img
            src="https://btclub.ro/uploads/media/default/0001/01/3f98b71e128942ac69e33371d7b85ded7d21ee02.jpeg"
            width="80%"
            style="display: block; margin-left: auto; margin-right: auto"
          />
        </v-col>
        <v-col cols="12" sm="9">
          <div class="title-style">{{ detailsEmployer.Name }}</div>
          <div class="col-style">
            <div>
              {{ detailsEmployer.Adress }}
            </div>
            <div>{{ detailsEmployer.Industry }}</div>
            <div>
              <a :href="detailsEmployer.Website" target="_blank">
                {{ detailsEmployer.Website }}
              </a>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="12">
          <div class="description-style">Description</div>
          <div class="description-col-style">
            <div>
              {{ detailsEmployer.Description }}
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="12">
          <div class="description-style">Values</div>
          <div class="description-col-style">
            <div>
              {{ detailsEmployer.Values }}
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="12">
          <div class="description-style">Management</div>
          <div class="description-col-style">
            <div>
              <v-list dense>
                <v-list-item
                  v-for="(item, index) in detailsEmployer.Management"
                  :key="index"
                >
                  <v-list-item-content v-if="item != null">
                    {{ item.Name }}, {{ item.JobFunction }}
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12">
          <div class="description-style">Jobs</div>
          <div class="description-col-style">
            <div>
              {{ detailsEmployer.Jobs }}
            </div>
          </div>
        </v-col>
      </v-row>

      <v-btn color="indigo darken-1 white--text" router to="/" class="back-btn">
        Back
      </v-btn>
    </v-card>
  </v-container>
</template>

<script>
import firebase from "firebase";
export default {
  name: "app",
  data() {
    return {
      id: this.$route.params.id,
      idFaculties: [],
      detailsEmployer: [],
    };
  },
  computed: {
    employers() {
      return this.$store.getters.employers;
    },
    jobs() {
      var details = [];
      var keysJobs = [];
      var jobs = Object.keys(this.detailsEmployer.Jobs);
      jobs.forEach((key) => {
        keysJobs.push(this.detailsEmployer.Jobs[key]);
      });
      var keys = Object.keys(this.$store.getters.jobs);
      keys.forEach((job) => {
        if (keysJobs.indexOf(job) !== -1) {
          details.push(this.$store.getters.jobs[job]);
        }
      });
      return details;
    },
  },
  methods: {},
  created() {
    this.$store.dispatch("readRatings", this.id);
    firebase
      .database()
      .ref("Employer")
      .once(
        "value",
        (snap) => {
          const myObj = snap.val();
          var details = [];
          var employersDetails = myObj;
          var employerKeys = Object.keys(employersDetails);
          var x = employerKeys[this.id];
          var y = employerKeys.indexOf(x);
          employerKeys.forEach((employer) => {
            details.push(employersDetails[employer]);
          });
          this.detailsEmployer = details[y];
        },
        function(error) {
          console.log("Error: " + error.message);
        }
      );
  },
  filters: {},
};
</script>

<style>
#imgLogo {
  max-height: 100px;
}
#input {
  display: none;
}
.col-style {
  border-left: 4px solid #006400;
  padding-left: 30px;
  margin-left: 30px;
  margin-top: 15px;
  line-height: 2;
}
.title-style {
  font-size: 28px;
  font-weight: bold;
  margin-top: 20px;
  color: #006400;
}
.description-style {
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 30px;
  color: #006400;
}
.description-col-style {
  border-left: 4px solid #006400;
  padding-left: 30px;
  padding-right: 30px;
  margin-left: 50px;
  margin-top: 15px;
  line-height: 2;
  text-align: justify;
}
.back-btn {
  margin: 30px auto 20px 30px;
}
</style>
