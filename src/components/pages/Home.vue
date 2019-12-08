
<template>
<b-container fluid>
  <div class="shadow">
    <b-card>
        <template v-slot:header>
            <h1>H<span style="font-size:26px;font-weight:bold;">OME</span>
            </h1>
        </template>
            <h3>Hello, {{user.firstName}}!</h3>
            <br>
            <div style="display:flex;" v-if="loggedInUser.type=='mentee'">
            <div style="flex:1;margin:5px;">
                <b-card>
                    <h4>Your Paths</h4>
                    <hr>
                    <div class="inside-col">
                        <p>Progress: {{progress}}%</p>
                        <b-progress :value="completedTasks.length" :max="myTasks.length" show-progress animated 
                        class="progress-bar-class"></b-progress>
                        </div>
                    <div class="inside-col">
                        <font-awesome-icon  class="fa-item" :icon="clockIcon" style="width:30px;" />
                        Avg. time: {{completedTasks.length*85}} hrs
                    </div>
                    <br>
                    <b-card>
                        <h5>Your next five tasks:</h5>
                        <div style="text-align:left;margin-left:30%;">
                            <b-form-checkbox v-for="task in fiveTasks" :key="task.requirement">{{task.requirement}}</b-form-checkbox>
                        </div>
                </b-card>
                    <br>
                    <router-link to="/my-path" tag="button" class="btn btn-primary">Go to My Path</router-link>
                </b-card>
            </div>
            <div style="flex:1;margin:5px;">

                <b-card>
                <h4>Your Mentors</h4>
                <hr>
                <br>
                <br>
                <MyMentorsCard v-for="mentor in myMentors" :key="mentor.title" :name="mentor.title" :bio="mentor.bio" :profilePicture="'https://www.pngfind.com/pngs/m/110-1102775_download-empty-profile-hd-png-download.png'"/>
                <br>
                <router-link to="/my-mentors" tag="button" class="btn btn-primary">Go to My Mentors</router-link>
                </b-card>
            </div>
            </div>
            <div  v-if="loggedInUser.type=='mentor'">

                    <h5 style="text-align:center; align-self:center;" >Thank You for your contributions</h5>
                    <div style="display:flex;">
                        <b-card style="width:30%;margin:10%;"> 
                            <b-button variant="primary" @click="redirectToAdvice">Go to My advice</b-button>
                        </b-card>
                         <b-card style="width:30%;margin:10%;"> 
                            <b-button variant="primary"  @click="redirectToProfile">Go to My Mentor Profile</b-button>
                        </b-card>
                    </div>
            </div>
    </b-card>
    </div>
</b-container>
       
</template>

<script>
import { mapGetters } from 'vuex'
import MyMentorsCard from "../assets/MyMentorsCard";
import {faClock} from '@fortawesome/free-solid-svg-icons'
    export default {
        name: "Home",
        components: { MyMentorsCard},
        data(){
            return {
                 user: {},
                 myMentors: [],
                 myCareers: [],
                 myTasks: [],
                 completedTasks: [],
                 fiveTasks:[],
                 progress: 0
            }
        },
        computed:{
            ...mapGetters([
            'getUserWithUsername',
            'getCareerByName',
            'loggedInUser'
            ]),
            clockIcon(){
                return faClock
            }
        },
        methods:{
            addReqAsDone(ev){
                console.log(ev)
            },
            redirectToAdvice(){
                this.$router.push({path: "/advice"})
            },
            redirectToProfile(){
                this.$router.push({path: '/mentor-profile/'+this.loggedInUser.username})
            }

        },
        mounted(){
            this.user = this.getUserWithUsername(this.$route.params.name)[0]
            console.log(this.user)
            this.user.mentors.forEach(mentor => {
                let mentorData = this.getUserWithUsername(mentor)[0]
                this.myMentors.push(mentorData)
            });      
            this.user.paths.forEach(path =>{
                let careerData = this.getCareerByName(path.career);
                this.myCareers.push(careerData) 
                path.finishedRequirements.forEach(req =>{
                    this.completedTasks.push(req);
                })
            });
            this.myCareers.forEach(myCareer => {
                myCareer.requirements.forEach(req =>{
                    this.myTasks.push(req);
                })
            })
            for(let i=0;i<5;i++){
                this.fiveTasks.push(this.myTasks[i])
            }

            this.progress = Math.floor(this.completedTasks.length / this.myTasks.length *100);
            console.log(this.progress)

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

    .progress-bar-class{
        width:80%;
        margin-bottom:10px;
        margin-left:10px;
    }
</style>
