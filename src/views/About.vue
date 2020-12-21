<template>
  <div class="content">
    <div class="center-div">
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title has-text-white">About Us</h1>
            <p>
              Inititative by
              <a href="mailto:kanaiyaaryal@gmail.com">Kyaw Thura</a> and his
              friends.
            </p>
            <p>
              We developed "covid19burma.org" to keep track of the latest news
              development about the COVID-19 in Myanmar and prevent for the fake
              news. We aim to use technology and make information more
              accessible to win the fight!
            </p>
          </div>
        </div>
      </section>
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title has-text-white">Tech Stack</h1>
            <br />
            <p>
              Following technology stacks are using in
              <a href="/">covid19burma.org</a>.
            </p>
            <div class="columns tech-stack">
              <div class="column">
                <a href="https://vuejs.org/">
                  <img src="../assets/tech-logo/vuejs.jpeg" alt />
                  <span>Vue.js</span>
                </a>
              </div>
              <div class="column">
                <a href="https://bulma.io/">
                  <img src="../assets/tech-logo/bulma.jpeg" alt />
                  <span>BULMA</span>
                </a>
              </div>
              <div class="column">
                <a href="https://github.com/thantthet/covid19-api">
                  <img src="../assets/tech-logo/github.jpeg" alt />
                  <span>API</span>
                </a>
              </div>
              <div class="column">
                <a href="http://netlify.com/">
                  <img src="../assets/tech-logo/netlify.jpeg" alt />
                  <span>Netlify</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<style>
.tech-stack a {
  display: inline-block;
  font-size: 1.5em;
  line-height: 40px;
  color: #fff;
  border: solid 2px #fff;
  border-radius: 20px;
  padding: 10px;
  width: 200px;
}
.tech-stack a:hover {
  background: hsl(0, 0%, 7%);
}
.tech-stack a img {
  vertical-align: middle;
  margin-right: 6px;
  width: 40px;
  height: 40px;
}
</style>