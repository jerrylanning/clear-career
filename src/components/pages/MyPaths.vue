<template>
    <b-container fluid>
        <b-card v-if="loggedInUser.type === 'mentee'">
        <template v-slot:header>
            <h1>{{loggedInUser.firstName}}'s Paths
            </h1>
        </template>
            <div>
                <b-tabs content-class="mt-3">
                    <b-tab v-for="career in careers" :key="career.career" @click="changeCareer(career)" :title="career.career" active>
                        <div class="to-do-container">
                            <div class="to-do-list-container">
                                <to-do-list :complete-task="completeTask" :toDo="incompleteTasks" :checked="false"/>
                                <to-do-list :incomplete-task="incompleteTask" :toDo="completeTasks" :checked="true"/>
                            </div>
                            <div class="graph-container">
                                <to-do-graph/>
                            </div>
                        </div>
                        <div class="articles-and-tutorials">
                            <div class="articles" >
                                <ArticleCard v-for="article in career.articles" :key="article.title"
                                             :title="article.title"
                                             :img="article.img" :summary="article.summary"/>
                            </div>
                            <div class="tutorials">
                                <TutorialCard v-for="video in career.videos" :key="video.embedLink"
                                    :author="video.author"
                                    :embedLink="video.embedLink"
                                    :title="video.title"/>
                            </div>
                        </div>
                    </b-tab>
                </b-tabs>
            </div>
        </b-card>
        <b-card v-else-if="loggedInUser.type === 'mentor'">
            Please <router-link to="/login" class="router-link">Login</router-link> or
            <router-link to="/register" class="router-link">Register</router-link> as a mentee to create paths.
        </b-card>
        <b-card v-else>
            Please <router-link to="/login" class="router-link">Login</router-link> or
            <router-link to="/register" class="router-link">Register</router-link> to setup paths.
        </b-card>
    </b-container>
</template>

<script>
    import ToDoList from "../assets/toDoList";
    import ToDoGraph from "../assets/toDoGraph";
    import ArticleCard from "../assets/ArticleCard";
    import TutorialCard from "../assets/TutorialCard";
    import {mapGetters} from "vuex";
    export default {
        name: "MyPaths",
        components: {TutorialCard, ArticleCard, ToDoGraph, ToDoList},
        computed:{
            ...mapGetters([
                'getAllCareers', 'loggedInUser', 'getCareerByName'
            ])
        },
        methods: {
            changeCareer(career) {
                let careerTasks = career.requirements;
                let incompleteTasks = [];
                let completeTasks = [];
                for (let i = 0; i < this.paths.length; i++) {
                    if(this.paths[i].career === career.career) {
                        for (let j = 0; j< careerTasks.length; j++) {
                            for(let k = 0; k < this.paths[i].finishedRequirements.length; k++) {
                                completeTasks = this.paths[i].finishedRequirements;
                                if (careerTasks[j].requirement !== this.paths[i].finishedRequirements[k]){
                                    incompleteTasks.push(careerTasks[j].requirement)
                                }
                            }
                        }
                    }
                }
                this.incompleteTasks = incompleteTasks;
                this.completeTasks = completeTasks;
                    console.log(typeof incompleteTasks);
                console.log(this.incompleteTasks[0]);
                return incompleteTasks
            },
            completeTask(task) {
                console.log("HELO")
                for(let i = 0; i < this.incompleteTasks.length; i++) {
                    console.log(this.incompleteTasks);
                    if(this.incompleteTasks[i] === task) {
                        this.incompleteTasks.splice(i, 1);
                        this.completeTasks.push(task)
                    }
                }
            },
            incompleteTask(task) {
                for(let i = 0; i < this.incompleteTasks.length; i++) {
                    if(this.incompleteTasks[i] === task) {
                        this.completeTasks.splice(i, 1);
                        this.incompleteTasks.push(task)
                    }
                }
            }
        },
        mounted(){
            this.user = this.loggedInUser;
            this.paths = this.loggedInUser.paths;
            for (let i = 0; i < this.loggedInUser.paths.length; i++) {
                this.careers.push(this.getCareerByName(this.user.paths[i].career))
            }
            let career = this.getAllCareers()[2];
            let careerTasks = career.requirements;
            let incompleteTasks = [];
            let completeTasks = [];
            for (let i = 0; i < this.paths.length; i++) {
                if(this.paths[i].career === career.career) {
                    for (let j = 0; j< careerTasks.length; j++) {
                        for(let k = 0; k < this.paths[i].finishedRequirements.length; k++) {
                            completeTasks = this.paths[i].finishedRequirements;
                            if (careerTasks[j].requirement !== this.paths[i].finishedRequirements[k]){
                                incompleteTasks.push(careerTasks[j].requirement)
                            }
                        }
                    }
                }
            }
            this.incompleteTasks = incompleteTasks;
            this.completeTasks = completeTasks;
        },
        data(){
            return {
                false: false,
                true: true,
                user: {},
                articles: [],
                completeTasks: [],
                incompleteTasks: [],
                careers: [],
                doneTasks: [],
                uncheckedToDo: [
                    { text: 'uncheck', value: 'uncheck'},
                    { text: 'banana', value: 'banana'}
                ],
                checkedToDo: [
                    { text: 'ap', value: 'orange'},
                    { text: 'Apple', value: 'apple'},
                    { text: 'Pineapple', value: 'pineapple'},
                    { text: 'Grape', value: 'grape'}
                ]
            }
        }
    }
</script>

<style scoped>
    .to-do-container {
        text-align: left;
        display: inline-flex;
        border-bottom: solid lightblue;
        width: 100%;
        margin-left: 2%;
    }
    .to-do-list-container {
        margin-top: 5%;
    }

    .graph-container {
        width: 100%;
        margin-left: 10%;
    }
    .articles-and-tutorials {
        width: 100%;
        display: inline-flex;
        margin-left: 2%;
    }
    .articles {
        width: 50%;
        padding-top: 2%;
    }
    .tutorials {
        width: 45%;
        padding-left: 5%;
        padding-top: 2%;
    }
</style>
