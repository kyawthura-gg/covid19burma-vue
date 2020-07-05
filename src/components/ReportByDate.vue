<template>
  <canvas id="reportDate" width="400" height="400"></canvas>
</template>
<script>
var DateConfirm = new Array();
var DateLabels = new Array();
var DateDeaths = new Array();
var DateRecovered = new Array();
var urlDate = "http://covid19burma.epizy.com/reportByDate";
$(document).ready(function() {
  $.get(urlDate, function(response) {
    response.forEach(function(data) {
      const d = new Date(data.date_confirm);
      const dtf = new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      });
      const [
        { value: mo },
        ,
        { value: da },
        ,
        { value: ye },
      ] = dtf.formatToParts(d);
      var confirm_date = `${da} ${mo}`;
      DateConfirm.push(data.confirm_case);
      DateLabels.push(confirm_date);
      DateDeaths.push(data.deaths);
      DateRecovered.push(data.recovered);
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
</script>
