<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <!--This is an example of bootstrap. In the class name of this button we add 'btn' which specifies this is
        a bootstrap button, and we add a second class called btn-primary to add the blue styling so we don't have to
  do this manually-->
  <!--When this button is clicked it will call the function help-->
  <!-- <button v-on:click="help" class="btn btn-primary">Bootstrap</button> -->
  <div>
    <b-navbar toggleable="lg" class="topnav" fixed="top">
      <b-navbar-brand>
        <router-link to="/" class="router-link" v-if="!loggedInUser.username">{{comp1}}</router-link>
        <h3 style="margin-top:5%;" class="router-link" @click="showUserHome" v-if="loggedInUser.username">{{comp1}}</h3>
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
          <b-navbar-nav class="nav-contents">
            <b-nav-item v-if="loggedInUser.type !== 'mentor'">
              <router-link to="/explore" class="router-link">Explore</router-link>
            </b-nav-item>
            <b-nav-item v-if="loggedInUser.username">
              <router-link to="/search-mentors" class="router-link">Mentors</router-link>
            </b-nav-item>
            <b-nav-item v-if="loggedInUser.type === 'mentor'">
              <router-link to="/advice" class="router-link">Advice</router-link>
            </b-nav-item>
            <b-nav-item v-if="loggedInUser.type === 'mentee'">
              <router-link to="/my-path" class="router-link">My Paths</router-link>
            </b-nav-item >
            <b-nav-item v-if="!loggedInUser.username">
              <router-link to="/register" class="router-link">Register</router-link>
            </b-nav-item>
            <b-nav-item v-if="!loggedInUser.username">
              <router-link to="/login" class="router-link">Login</router-link>
            </b-nav-item >
              <b-nav-item-dropdown v-if="loggedInUser.username" right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                  <font-awesome-icon  class="fa-item" :icon="userCircle" />
                </template>
                <b-dropdown-item @click="showProfilePage">Profile</b-dropdown-item>
                <b-dropdown-item @click="logOut">Sign Out</b-dropdown-item>
              </b-nav-item-dropdown>

          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
export default {
  name: "NavBar",
  data(){
    return {
      user: {}
    }
  },
  // Props are handed down from a parent element.
  props: {
    comp1: String
  },
          computed:{
            ...mapGetters([
            'loggedInUser'
            ]),
            userCircle(){
              return faUserCircle
            }

        },
  // This is where you put method calls to manipulate the data
  methods: {
    ...mapActions([
                'doLogOutUser'
    ]),
    help: function() {
      alert("This is button click!");
    },
    showProfilePage(){
      this.$router.push({ path: '/profile/'+this.loggedInUser.username})
    },
    logOut(){
      this.doLogOutUser()
      this.$router.push({ path: '/'})
    },
    showUserHome(){
      this.$router.push({ path: '/home/'+this.loggedInUser.username})
    }
  },
  mounted(){
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
    font-size: 18px;
}
.router-link:hover,
.router-link.router-link-exact-active{
    text-decoration: none;
    color:white;
    border-bottom: 3px solid whitesmoke;
}
.nav-contents{
  padding-top:5px;
}
.fa-item{
font-size: 26px;
color: whitesmoke;
}
</style>
