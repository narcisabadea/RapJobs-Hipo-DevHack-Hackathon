<template>
  <v-container>
    <v-stepper v-model="step" vertical>
      <div v-for="(category, index) in testData.questions" :key="index">
        <v-stepper-step :complete="step.includes(index)" :step="index">
          {{ index }}
        </v-stepper-step>

        <v-stepper-content :step="index">
          <v-card>
            <div
              v-for="(question, index2) in testData.questions[index]"
              :key="index2"
            >
              <v-radio-group v-model="question.answer">
                {{ question.text }}

                <v-radio
                  v-for="(answer, index3) in testData.answers[question.key]"
                  :key="index3"
                  :label="answer.text"
                  :value="answer.value"
                ></v-radio>
              </v-radio-group>
            </div>
          </v-card>
          <v-btn
            color="primary"
            :disabled="!areAllQuestionsAnswered(index)"
            @click="step.push(index)"
          >
            Continue
          </v-btn>
          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>
      </div>
    </v-stepper>
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
      step: Object.keys(data.questions)[0],
    };
  },
  computed: {
    user() {
      this.$store.getters.user.uid;
    },
  },
  methods: {
    areAllQuestionsAnswered(category) {
      let answered = 0;
      Object.values(this.testData.questions[category]).forEach((element) => {
        answered = element.answer ? answered + 1 : answered;
      });
      return answered === Object.keys(this.testData.questions[category]).length;
    },
  },
  created() {},
};
</script>
