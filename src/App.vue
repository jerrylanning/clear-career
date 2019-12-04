<template >
  <div id="app">
    <!--Declaring we want to use the NavBar Component we built-->
    <NavBar comp1="ClearCareer" />

    <!--We would change what is displayed in the body depending on our App's route-->
    <b-container fluid>
      <div id="body">
        <router-view />
      </div>
    </b-container>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  name: "app",
  components: {
    NavBar
  }
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

#body {
  top: 0;
  position: relative;
  padding-top: 7%;
}

.outlineBox {
  outline-style: solid;
  outline-color: lightblue;
}

h1 {
  color: dodgerblue;
}
</style>
