import {
    CountUp
} from "./counterup.js";
const options = {
    duration: 5
};
window.onload = function () {
    var mm_total = $('#mm-confrim').text();
    var mm_deaths = $('#mm-deaths').text();
    var mm_recovered = $('#mm-recovered').text();
    var mm_active = $('#mm-active').text();
    var confirm = new CountUp("confirmed", mm_total, options);
    confirm.start();
    var deaths = new CountUp("deaths", mm_deaths, options);
    deaths.start();
    var recovered = new CountUp("recovered", mm_recovered, options);
    recovered.start();
    var active = new CountUp("active", mm_active, options);
    active.start();
    // const apiUrl = "https://covidapi.info/api/v1/global";
    // var gConfirmed = 0;
    // var gDeaths = 0;
    // var gRecovered = 0;
    // fetch(apiUrl).then(res => res.json()).then(data => data.result).then(function (covidData) {
    //     gConfirmed = covidData.confirmed;
    //     gDeaths = covidData.deaths;
    //     gRecovered = covidData.recovered;
    //     var gActive = gConfirmed - (gDeaths + gRecovered);
    //     console.log(gConfirmed);
    //     var confirm = new CountUp("golobal-confirmed", gConfirmed, options);
    //     confirm.start();
    //     var deaths = new CountUp("golobal-deaths", gDeaths, options);
    //     deaths.start();
    //     var recovered = new CountUp("golobal-recovered", gRecovered, options);
    //     recovered.start();
    //     var g_active = new CountUp("golobal-active", gActive, options);
    //     g_active.start();
    // })
};