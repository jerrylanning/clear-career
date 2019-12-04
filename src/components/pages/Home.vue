
<template>
    <div>
        <h1>Home</h1>
        <h4> Hello, {{user.firstName}} </h4>
            <div class="col">
                <br>
                <b-card>
                    <h2>My Paths</h2>
                    <hr>
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

    h2{
        color: dodgerblue;
    }

</style>
