
<template>
<b-container fluid>
  <div class="shadow">
    <b-card>
        <template v-slot:header>
            <h1>H<span style="font-size:26px;font-weight:bold;">OME</span>
            </h1>
        </template>
            <h3>Hello, {{user.firstName}}</h3>
            <br>
            <div style="display:flex;">
            <div style="flex:1;margin:5px;">
                <b-card>
                    <h4>My Paths</h4>
                    <hr>
                    <div class="inside-col">
                        <p>Progress: somthing%</p>
                        <Progress value="16.88">
                        </Progress></div>
                    <div class="inside-col">
                        <img src="https://cdn.pixabay.com/photo/2015/12/08/18/19/clock-1083479_960_720.png" height="30px">
                        Avg. time: 90 hrs
                    </div>

                    <MyPathsCard/>
                    <br>
                    <router-link to="/my-path" tag="button" class="btn btn-primary">Go to My Path</router-link>
                </b-card>
            </div>
            <div style="flex:1;margin:5px;">
                <b-card>
                <h4>My Mentors</h4>
                <hr>
                <MyMentorsCard/>
                <MyMentorsCard/>
                <br>
                <router-link to="/my-mentors" tag="button" class="btn btn-primary">Go to My Mentors</router-link>
                </b-card>
            </div>
            </div>
        <router-link to="/mentor-profile/mindRead" class="router-link">Mentor profile</router-link>
    </b-card>
    </div>
</b-container>
       
</template>

<script>
import { mapGetters } from 'vuex'
import MyMentorsCard from "../assets/MyMentorsCard";
import MyPathsCard from "../assets/MyPathsCard";

    export default {
        name: "Home",
        components: {MyPathsCard, MyMentorsCard},
        data(){
            return {
                 user: {}
            }
        },
        computed:{
            ...mapGetters([
            'getUserWithUsername'
            ])
        },
        mounted(){
            this.user = this.getUserWithUsername(this.$route.params.name)[0]
            console.log(this.user)
        }
        
    }
</script>

<style scoped>
    .shadow{
        box-shadow: 4px 4px 4px 4px darkgrey;
    }
    .col{
        width: 40%;
        display: inline-block;
    }

    .inside-col{
        width: 50%;
        display: inline-block;
        text-align: center;
        vertical-align: top;
    }

    h2{
        color: dodgerblue;
    }

</style>
