<template>
    <b-container>
        <h2>My Mentors</h2>
        <div class="search-mentors"><router-link to="/search-mentors">Search Mentors</router-link></div>
        <b-card-group deck class="mentor-card-container">
            <div class="mentor-card" v-for="mentor in mentors" :key="mentor.username">
                <b-card class="mt-3">
                    <b-card-text>
                        <h4>{{mentor.title}}</h4>
                        <br>
                        <div class="mentor-populate">
                            <div class="mentor-container">
                                <b-card title="Articles">
                                <div class="mentor-articles">
                                    <ArticleCard v-for="article in mentor.articles" :key="article.title"
                                             :title="article.title" :link="article.link"
                                             :img="article.image" :summary="article.description"/>
                                </div>
                                </b-card>
                                <b-card title="Tutorials">
                                <div class="mentor-tutorials">
                                    <TutorialCard v-for="video in mentor.videos" :key="video.link"
                                    :embedLink="video.link"
                                    :title="video.title"/><TutorialCard/>
                                </div>
                                </b-card>
                            </div>
                        </div>
                    </b-card-text>
                </b-card>
            </div>

        </b-card-group>
    </b-container>
</template>

<script>
    import {mapGetters} from 'vuex';
    import TutorialCard from "../assets/TutorialCard";
    import ArticleCard from "../assets/ArticleCard";
    export default {
        name: "MyMentors",
        components: {ArticleCard,TutorialCard},
        data(){
            return{
                mentors: [],
                user: {}
            }
        },
        computed:{
            ...mapGetters([
                'loggedInUser',
                'getMentorProfileWithUsername',
                'getUserWithUsername'
            ]),
        },
        methods:{

        },
        mounted(){
            this.user = this.getUserWithUsername(this.loggedInUser.username)[0]
            this.user.mentors.forEach(mentor => {
                let mentorData = this.getMentorProfileWithUsername(mentor)[0]
                this.mentors.push(mentorData);
            });
        }
    }
</script>

<style scoped>
    .mentor-container {
        display: inline-flex;
    }
    .mentor-articles {
        height: 50%;
    }

    .mentor-tutorials {
        width: 50%;
    }
    .mentor-card-container {
        text-align: center;
    }

    .mentor-card {
        width: 80%;
        margin-left: 10%;
        height: 50%;
    }

</style>
