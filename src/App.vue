<template>
  <div id="app">
    <NavBar comp1="ClearCareer"/>
    <div id="body">
      <Article/>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Article from "./components/Article";

export default {
  name: 'app',
  components: {
    Article,
    NavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#body {
  top: 0;
  position: relative;
  height: 200px;
  padding-top: 5%;
}
</style>
