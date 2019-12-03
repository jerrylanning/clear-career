<template>
  <!--This is an example of bootstrap. In the class name of this button we add 'btn' which specifies this is
        a bootstrap button, and we add a second class called btn-primary to add the blue styling so we don't have to
  do this manually-->
  <!--When this button is clicked it will call the function help-->
  <!-- <button v-on:click="help" class="btn btn-primary">Bootstrap</button> -->
  <div>
    <b-navbar toggleable="lg" class="topnav">
      <b-navbar-brand href="#">
        <router-link to="/" class="router-link">{{comp1}}</router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- <b-navbar-nav>
          <b-nav-item>
            <router-link to="/profile">Profile</router-link>
          </b-nav-item>
        </b-navbar-nav> -->

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item>
              <router-link to="/explore" class="router-link">Explore</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/register" class="router-link">Register</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/login" class="router-link">Login</router-link>
            </b-nav-item>
                 <b-nav-item>
              <router-link to="/profile" class="router-link">Profile</router-link>
            </b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  // Props are handed down from a parent element.
  props: {
    comp1: String
  },
  // This is where you put method calls to manipulate the data
  methods: {
    help: function() {
      alert("This is button click!");
    }
  }
};
</script>

<style scoped>
/* Add a blue background color to the top navigation while fixing it*/
.topnav {
  background-color: cornflowerblue;
}

/* Style the links inside the navigation bar */

/* Change the color of links on hover */

/* Add a color to the active/current link */
.router-link{
    color:whitesmoke;
    text-decoration: none;
}
.router-link:hover,
.router-link.router-link-exact-active{
    text-decoration: none;
    color:white;
    border-bottom: 3px solid whitesmoke;
}
</style>
