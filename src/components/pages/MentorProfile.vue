<template>
    <div>
        <div v-if="loggedInUser.type=='mentee'">
            <b-card style="margin-right:15px;margin-left:15px;">
                 <template v-slot:header>
                                <h1>M<span style="font-size:26px;font-weight:bold;">ENTOR</span> P<span style="font-size:26px;font-weight:bold;">ROFILE</span></h1>
                            </template>
                
                <br>
                <div class="flex">
                    <div class="image-div">
                        <img :src="mentor.profilePicture" 
                        width="200" height="200" img-alt="Card image" img-left/>
                        <div style="margin-top:1px;"><b-button  variant="primary" style="width:200px;">Follow Mentor</b-button></div>
                    </div>
                    <div style="flex:4;margin:20px;">
                        <div class="title">{{mentor.title}}</div>
                        <div class="bio">{{mentor.bio}}</div>
                    </div>

                </div>

            </b-card>
            <div class="container-row flex">
                        <b-card header-tag="header" footer-tag="footer" class="work-card">
                            <template v-slot:header>
                                <h6 class="mb-0">Education and Work</h6>
                            </template>
                            <b-card-text>
                                <p style="font-weight:bold;">Work</p>
                                 <hr>
                                <p>Years of Experience: {{mentor.yoe}}</p>
                                <div v-for="experience in experiences" :key="experience.company">
                                    
                                    <p style="font-style:italic">{{experience.position}}</p> 
                                    <p>{{experience.company}}</p>
                                    <br>
                                </div>
                                <br>
                                <p style="font-weight:bold;">Education</p>
                                 <hr>     
                                <div v-for="edu in mentor.education" :key="edu.school">
                                    
                                    <p style="font-style:italic">{{edu.degree}}</p> 
                                    <p>{{edu.school}}</p>
                                    <br>
                                </div>
                            </b-card-text>
                        </b-card>
                        <b-card header-tag="header" footer-tag="footer" class="article-card">
                            <template v-slot:header>
                                <h6 class="mb-0">Articles</h6>
                            </template>
                            <b-card-text>
                                
                            </b-card-text>
                        </b-card>
                        <b-card header-tag="header" footer-tag="footer" class="article-card">
                            <template v-slot:header>
                                <h6 class="mb-0">Tutorials</h6>
                            </template>
                            <b-card-text>

                            </b-card-text>
                        </b-card>
            </div>

        </div>
        <div v-if="loggedInUser.type=='mentor'">
            <b-card>

            </b-card>
        </div>
    </div>
</template>

<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex'
    export default {
        name: "MentorProfile",
        data() {
            return {
                user: {},
                mentor: {},
                experiences:[]
            }
        },
        computed: {
            ...mapGetters([
                'loggedInUser',
                'getMentorProfileWithUsername'
            ])
        },
        methods: {
            ...mapActions([]),
        },
        mounted() {
            this.mentor = this.getMentorProfileWithUsername(this.$route.params.name)[0]
            this.experiences = this.mentor.workEx;
        }
    }
</script>

<style scoped>
    .mb-0 {
        color: dodgerblue;
        font-weight: bold;
        font-size: 16px;
    }

    .work-card {
        width: 300px;
        margin-top: 10px;
        margin-right:10px;
        flex: 2;
    }
    .article-card {
        margin-top: 10px;
        margin-right:10px;
        flex: 3
    }
    .container-row{
        margin: 15px 0px 15px 15px;
        padding:0px;
        
        
    }
    .flex{
        display: flex;
    }
    .title{
        text-align: left;
        margin-bottom:10px;
        font-size: 24px;
        font-weight: bold;
    }
    .bio{
        text-align: left;
    }
    .image-div{
        flex:1;
        width:fit-content;
    }
</style>