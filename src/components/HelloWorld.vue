<template>
  <v-container>
    <v-layout align-center justify-space-around row>
      <v-btn to="/search">Search</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import firebase from "firebase";
export default {
  name: "app",
  data() {
    return {};
  },
  computed: {},
  methods: {
    piechart1() {
      var test3yes = 0;
      var test3no = 0;
      firebase
        .database()
        .ref("Employer")
        .on(
          "value",
          (snap) => {
            var myObj = snap.val();
            Object.keys(myObj).forEach((key) => {
              if (myObj[key].Jobs.length > 2) {
                test3yes = parseInt(test3yes) + parseInt(1);
              } else {
                test3no = parseInt(test3no) + parseInt(1);
              }
            });
          },
          function(error) {
            console.log("Error: " + error.message);
          }
        );
      var colors = [
        "#9c5463",
        "#7b4c67",
        "#c86060",
        "#5e4469",
        "#7f4c66",
        "#b25a62",
      ];
      window.google.charts.load("visualization", "1.0", {
        packages: ["corechart", "bar", "table"],
        callback: () => {
          var chart = new window.google.visualization.PieChart(
            document.getElementById("piechart1")
          );
          chart.draw(
            window.google.visualization.arrayToDataTable([
              ["Tip", "Numar"],
              ["+3 jobs", test3yes],
              ["-3 jobs", test3no],
            ]),
            {
              is3D: false,
              colors: [
                "#f86c5c",
                colors[Math.floor(Math.random() * colors.length)],
              ],
            }
          );
        },
      });
    },
  },
};
</script>

<style scoped></style>
