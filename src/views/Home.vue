<template>
  <div id="home">
    <div class="content">
      <div class="message is-warning">
        <div class="message-body">
          <strong
            >Due to high number of cases, following data might not correct.
            Please check to offical website
            <a href="https://www.mohs.gov.mm" target="_blank"> mohs.gov.mm </a>
          </strong>
        </div>
      </div>
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
                  <label class="case-font" id="confirmed">{{
                    this.cases.td_confirmed
                  }}</label>
                  <p>Confirmed 🤕</p>
                </div>
                <div>
                  <span class="death-font">
                    <i class="fas fa-arrow-up fa-xs"></i>&nbsp;
                  </span>
                  <label class="death-font" id="deaths">{{
                    this.cases.td_deaths
                  }}</label>
                  <p>Deaths 💔</p>
                </div>
                <div>
                  <span class="recover-font">
                    <i class="fas fa-arrow-up fa-xs"></i>&nbsp;
                  </span>
                  <label class="recover-font" id="recovered">
                    {{ this.cases.td_recovered }}
                  </label>
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
          <div class="total-box" style="margin-top: 20px; padding: 10px">
            <ReportByDate></ReportByDate>
          </div>
        </div>
        <div class="column is-4" data-aos="fade-up" data-aos-delay="700">
          <div class="map-container">
            <MyanmarMap></MyanmarMap>
            <div class="description" style="text-align: left"></div>
            <div class="status-div">
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
        </div>
        <div class="column is-5" data-aos="fade-up" data-aos-delay="1000">
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
                  <tr v-for="state in statesOrder" :key="state.statecode">
                    <td>{{ state.state }}</td>
                    <td>{{ state.confirmed }}</td>
                    <td>{{ state.deaths }}</td>
                    <td>{{ state.recovered }}</td>
                  </tr>
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
import * as MainJs from "@/assets/js/main.js";
import ReportByDate from "@/components/ReportByDate.vue";
import Chart from "@/assets/js/chart.min.js";
import { CountUp } from "@/assets/js/counterup.js";
import _ from "lodash";
AOS.init();

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  name: "Home",
  components: {
    ReportByDate,
  },
  data() {
    return {
      cases: {
        confirmed: 0,
        deaths: 0,
        recovered: 0,
        td_confirmed: 0,
        td_deaths: 0,
        td_recovered: 0,
      },
      fullscreenLoading: false,
      states: "",
    };
  },
  mounted() {
    this.fetchCases();
  },
  computed: {
    statesOrder: function () {
      return _.orderBy(this.states, "confirmed", "desc");
    },
  },
  methods: {
    async fetchCases() {
      this.axios
        .get(`https://thantthet.github.io/covid19-api/data.json`)
        .then((response) => {
          var total = response.data.statewise[0];
          this.states = response.data.statewise;
          this.states.order;
          this.cases.confirmed = total.confirmed;
          this.cases.deaths = total.deaths;
          this.cases.recovered = total.recovered;
          this.cases.td_confirmed = total.deltaconfirmed;
          this.cases.td_deaths = total.deltadeaths;
          this.cases.td_recovered = total.deltarecovered;
          const options = {
            duration: 5,
          };
          var total = this.cases.confirmed;
          var deaths = this.cases.deaths;
          var recovered = this.cases.recovered;
          var active = total - (deaths + recovered);
          var confirm = new CountUp("confirmed", total, options);
          confirm.start();
          var deaths = new CountUp("deaths", deaths, options);
          deaths.start();
          var recovered = new CountUp("recovered", recovered, options);
          recovered.start();
          var active = new CountUp("active", active, options);
          active.start();
        });
    },
  },
};
</script>
<style>
@media only screen and (min-width: 1400px) {
  .map-container {
    width: 400px;
    margin: 0 auto;
  }
}
</style>