<template>
  <div class="home">
    <div class="content">
      <div class="sub-tab columns">
        <div class="column is-3">
          <div class="total-box" data-aos="fade-right" data-aos-delay="200">
            <div class="columns pb-15">
              <div class="right-line column">
                <p class="box-title">TOTAL</p>
                <div>
                  <label class="case-font" id="confirmed">0</label>
                  <p>Confirmed 🤕</p>
                </div>
                <div>
                  <label class="death-font" id="deaths">0</label>
                  <p>Deaths 💔</p>
                </div>
                <div>
                  <label class="recover-font" id="recovered">0</label>
                  <p>Recovered 🤩</p>
                </div>
              </div>
              <div class="column ml-20">
                <p class="box-title">TODAY</p>
                <div>
                  <span class="case-font">
                    <i class="fas fa-arrow-up fa-xs"></i>&nbsp;
                  </span>
                  <label class="case-font" id="confirmed">0</label>
                  <p>Confirmed 🤕</p>
                </div>
                <div>
                  <span class="death-font">
                    <i class="fas fa-arrow-up fa-xs"></i>&nbsp;
                  </span>
                  <label class="death-font" id="deaths">0</label>
                  <p>Deaths 💔</p>
                </div>
                <div>
                  <span class="recover-font">
                    <i class="fas fa-arrow-up fa-xs"></i>&nbsp;
                  </span>
                  <label class="recover-font" id="recovered">0</label>
                  <p>Recovered 🤩</p>
                </div>
              </div>
            </div>
            <div class="columns is-vcentered is-centered">
              <label class="recover-font is-size-4" id="active">0</label>
              <span class="none" id="mm-active">80</span>
              &nbsp;&nbsp;&nbsp;
              <p class="box-title">ACTIVE 😰</p>
            </div>
          </div>
          <div
            class="total-box"
            style="margin-top: 20px; padding:10px"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <ReportByDate></ReportByDate>
          </div>
        </div>
        <div class="column is-4" data-aos="fade-up" data-aos-delay="700">
          <Map></Map>
          <div class="description" style="text-align: left;"></div>
          <div class="status-div" data-aos="fade-up" data-aos-delay="1000">
            <div>
              <label class="status-label one_10"></label>
              <p>1 - 10</p>
            </div>
            <div>
              <label class="status-label ten_30"></label>
              <p>10 - 30</p>
            </div>
            <div>
              <label class="status-label thirty_99"></label>
              <p>30 - 99</p>
            </div>
            <div>
              <label class="status-label plus"></label>
              <p>100+</p>
            </div>
          </div>
        </div>
        <div class="column is-5" data-aos="fade-up" data-aos-delay="1400">
          <div class="total-box">
            <div class="table-container">
              <table class="table-background-color">
                <thead>
                  <tr>
                    <th>State</th>
                    <th>Confirmed</th>
                    <th>Deaths</th>
                    <th>Recovered</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- @foreach ($cases as $case) -->
                  <tr>
                    <td>Yangon</td>
                    <td>200</td>
                    <td>3</td>
                    <td>100</td>
                  </tr>
                  <!-- @endforeach -->
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import AOS from "@/assets/js/aos.js";
import Map from "@/components/Map.vue";
import ReportByDate from "@/components/ReportByDate.vue";
import Chart from "@/assets/js/chart.min.js";
AOS.init();
export default {
  name: "Home",
  components: {
    HelloWorld
  },
  name: "Home",
  components: {
    Map
  },
  name: "Home",
  components: {
    ReportByDate
  }
};
import { CountUp } from "@/assets/js/counterup.js";
const options = {
  duration: 5
};
window.onload = function() {
  var total = 200;
  var deaths = 6;
  var recovered = 180;
  var active = total - (deaths + recovered);
  var confirm = new CountUp("confirmed", total, options);
  confirm.start();
  var deaths = new CountUp("deaths", deaths, options);
  deaths.start();
  var recovered = new CountUp("recovered", recovered, options);
  recovered.start();
  var active = new CountUp("active", active, options);
  active.start();
};
var domain = "http://covid19burma.epizy.com/";
var urlState = domain + "reportByState";
var byStateTitle = "Confirmed cases by states";
var dailyTitle = "Daily Cases";
var confirmed = "Confirmed";
var deaths = "Deaths";
var recovered = "Recovered";
</script>
