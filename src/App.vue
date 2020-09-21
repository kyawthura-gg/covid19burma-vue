<template>
  <div id="app">
    <nav class="navbar is-black is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="./assets/img/virus.png" class="mr-10" alt />
          Covid-19 | Myanmar
        </a>
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="is-black navbar-menu">
        <div class="navbar-start hover-anmiated">
          <router-link class="navbar-item" to="/">Home</router-link>
          <router-link class="navbar-item" to="/cluster">Cluster</router-link>
          <!-- <router-link class="navbar-item" to="/graphs">Graphs</router-link> -->
          <router-link class="navbar-item" to="/about">About Us</router-link>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
require("./assets/js/load/header.js");
</script>
