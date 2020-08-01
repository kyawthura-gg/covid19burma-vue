<template>
  <ve-line :data="chartData" :settings="chartSettings"></ve-line>
</template>

<script>
export default {
  data() {
    this.chartSettings = {
      // area: true,
      labelMap: {
        totalrecovered: "Recovered",
        active: "Active",
        totaldeceased: "Deaths",
        totalconfirmed: "Confirmed"
      }
    };
    return {
      chartData: {
        columns: [
          "date",
          "totalrecovered",
          "active",
          "totaldeceased",
          "totalconfirmed"
        ],
        rows: [],
        textStyle: {
          color: "#fff",
          fontSize: 12
        }
      }
    };
  },
  mounted() {
    this.fetchMapCases();
  },
  methods: {
    async fetchMapCases() {
      this.axios
        .get(`https://thantthet.github.io/covid19-api/data.json`)
        .then(response => {
          var caseTime = response.data.cases_time_series;
          this.chartData.rows = caseTime;
        });
    }
  }
};
</script>
