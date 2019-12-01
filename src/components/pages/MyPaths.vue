<template>
    <b-container>
        <b-card>
            <h1>My Paths</h1>
            <div>
                <b-tabs content-class="mt-3">
                    <b-tab title="First" active>
                        <div class="to-do-container">
                            <div class="to-do-list-container">
                                <to-do-list :toDo="uncheckedToDo" checked="false"/>
                                <to-do-list :toDo="checkedToDo" checked="true"/>
                            </div>
                            <div class="graph-container">
                                <to-do-graph/>
                            </div>
                        </div>
                        <div class="articles-and-tutorials">
                            <div class="articles">
                                <ArticleCard/>
                            </div>
                            <div class="tutorials">
                                <TutorialCard/>
                            </div>
                        </div>
                    </b-tab>
                    <b-tab title="Second">
                        <p>I'm second</p>
                    </b-tab>
                    <b-tab title="Third">
                        <p>I'm third</p>
                    </b-tab>
                </b-tabs>
            </div>
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
                'getAllCareers'
            ])
        },
        methods: {

        },
        data(){
            return {
                false: false,
                true: true,
                user: {
                    username: "",
                    password: "",
                    firstName: "",
                    lastName: "",
                    email: "",
                },
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
