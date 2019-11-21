<template>
  <div id="app">
    <!--Declaring we want to use the NavBar Component we built-->
    <NavBar comp1="ClearCareer"/>
    <div id="body">
      <!--We would change what is displayed in the body depending on our App's route-->
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: 'app',
  components: {
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
  padding-top: 6%;
}
</style>
