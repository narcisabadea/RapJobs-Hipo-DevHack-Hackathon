<template>
  <v-container>
    <v-card-text>
      <div
        v-for="(category, index) in testData.questions"
        :key="index"
      >{{category}} ----------------------------------
        <!-- <div
          v-for="(question, index) in getDataFromObjectByKey(testData.questions, category)"
          :key="index"
        >
          {{ question }}
          <v-radio-group v-model="question.answer">
            <v-radio
              v-for="n in testData.answers[question.key]"
              :key="n"
              :label="question.text"
              :value="n"
            ></v-radio>
          </v-radio-group>
        </div> -->
      </div>
    </v-card-text>
  </v-container>
</template>

<script>
/* eslint-disable */
import firebase from "firebase";
import data from "./../assets/test";
export default {
  name: "Test",
  data() {
    return {
      testData: data,
    };
  },
  computed: {
    user() {
      this.$store.getters.user.uid;
    },
  },
  methods: {
      getDataFromObjectByKey (object, key) {
          console.log(object, key)
          return Object.values(object[key]);
      }
  },
  created() {
    console.warn(this.testData);
  },
};
</script>
