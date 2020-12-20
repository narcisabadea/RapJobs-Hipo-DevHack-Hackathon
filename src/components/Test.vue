<template>
  <v-container>
    <v-stepper v-model="stepNumber" vertical>
      <div v-for="(category, index) in testData.questions" :key="index">
        <v-stepper-step
          :complete="stepNumber > findIndexOfCategory(index)"
          :step="findIndexOfCategory(index)"
        >
          {{ index }}
        </v-stepper-step>
        <v-stepper-content :step="findIndexOfCategory(index)">
          <v-card>
            <table>
              <tr>
                <th></th>
                <th>Very Inaccurate</th>
                <th>Moderately Inaccurate</th>
                <th>Neither Inaccurate nor Accurate</th>
                <th>Moderately Accurate</th>
                <th>Very Accurate</th>
              </tr>
              <tr
                v-for="(question, index2) in testData.questions[index]"
                :key="index2"
              >
                <td>
                  {{ question.text }}
                </td>
                <!-- <v-radio-group v-model="question.answer"> -->
                <td
                  v-for="(answer, index3) in testData.answers[question.key]"
                  :key="index3"
                >
                  <input
                    type="radio"
                    :value="answer.value"
                    :name="index + index2"
                    @change="setAnswerForQestion(index, index2, index3)"
                  />
                </td>
                <!-- </v-radio-group> -->
              </tr>
            </table>
          </v-card>
          <v-btn
            color="primary"
            :disabled="!areAllQuestionsAnswered(index)"
            @click="nextStep()"
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
      stepNumber: 0,
      step: "",
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
    findIndexOfCategory(category) {
      return Object.keys(this.testData.questions).indexOf(category);
    },
    nextStep() {
      this.stepNumber = this.stepNumber + 1;
      this.step = Object.keys(this.testData.questions)[this.stepNumber];
    },
    setAnswerForQestion(category, question, answerPoints) {
      this.testData.questions[category][question].answer = answerPoints;
    },
  },
  created() {
    this.step = Object.keys(this.testData.questions)[this.stepNumber];
  },
};
</script>

<style scoped>
td {
  place-content: center;
  text-align: -webkit-center;
}
tr td:first-child {
  text-align: left;
}
</style>
