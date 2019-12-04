
<template>
    <div>
        <h1>Home</h1>
        <h4> Hello, {{user.firstName}} </h4>
            <div class="col">
                <br>
                <b-card>
                    <h2>My Paths</h2>
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
            <div class="col">
                <b-card>
                <h2>My Mentors</h2>
                <hr>
                <MyMentorsCard/>
                <MyMentorsCard/>
                <br>
                <router-link to="/my-mentors" tag="button" class="btn btn-primary">Go to My Mentors</router-link>
                </b-card>
            </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MyMentorsCard from "../assets/MyMentorsCard";
import MyPathsCard from "../assets/MyPathsCard";
import 'easy-circular-progress'
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
