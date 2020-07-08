<template>
  <canvas id="reportDate" width="400" height="400"></canvas>
</template>
<script>
var byStateTitle = "Confirmed cases by states";
var dailyTitle = "Daily Cases";
var confirmed = "Confirmed";
var deaths = "Deaths";
var recovered = "Recovered";
var DateConfirm = new Array();
var DateLabels = new Array();
var DateDeaths = new Array();
var DateRecovered = new Array();
var urlDate = "https://thantthet.github.io/covid19-api/data.json";
$(document).ready(function() {
  $.get(urlDate, function(response) {
    var caseTime = response.cases_time_series;
    caseTime.forEach(function(data) {
      DateConfirm.push(data.totalconfirmed);
      DateLabels.push(data.date);
      DateDeaths.push(data.totaldeceased);
      DateRecovered.push(data.totalrecovered);
    });
    var ctx = document.getElementById("reportDate").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: DateLabels,
        datasets: [
          {
            label: confirmed,
            fill: true,
            backgroundColor: "hsl(348, 100%, 61%)",
            data: DateConfirm,
          },
          {
            label: deaths,
            fill: true,
            backgroundColor: "hsl(0, 0%, 86%)",
            data: DateDeaths,
          },
          {
            label: recovered,
            fill: true,
            backgroundColor: "hsl(171, 100%, 41%)",
            data: DateRecovered,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: dailyTitle,
          fontColor: "white",
          fontSize: 17,
        },
        legend: {
          display: true,
          labels: {
            fontColor: "white",
          },
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              stacked: true,
              ticks: {
                fontColor: "white",
                fontSize: 14,
                // stepSize: 1,
                // beginAtZero: true
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    });
  });
});
export default {};
</script>
