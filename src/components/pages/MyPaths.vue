<template>
    <b-container>
        <b-card v-if="loggedInUser.type === 'mentee'">
            <h1>{{loggedInUser.username}} Paths</h1>
            <div>
                <b-tabs content-class="mt-3">
                    <b-tab v-for="career in careers" :key="career.career" :title="career.career" active>
                        <div class="to-do-container">
                            <div class="to-do-list-container">
                                <to-do-list :toDo="uncheckedToDo" :checked="false"/>
                                <to-do-list :toDo="checkedToDo" :checked="true"/>
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

        },
        mounted(){
            console.log("HELLO");
            this.user = this.loggedInUser;
            console.log(this.loggedInUser);
            for (let i = 0; i < this.loggedInUser.paths.length; i++) {
                console.log("HELLLLLLLLLLO");
                this.careers.push(this.getCareerByName(this.user.paths[i]))
            }
        },
        data(){
            return {
                false: false,
                true: true,
                user: {},
                articles: [],
                careers: [],
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
        background-color: red;
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
