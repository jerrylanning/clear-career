<template>
    <div>
        <div v-if="$getOtherMentorProfile">
            <b-card style="margin-right:15px;margin-left:15px;">
                 <template v-slot:header>
                                <h1>M<span style="font-size:26px;font-weight:bold;">ENTOR</span> P<span style="font-size:26px;font-weight:bold;">ROFILE</span></h1>
                            </template>
                
                <br>
                <b-modal ref="my-modal" hide-footer title="Error! User Not Logged In">
                    <div class="d-block text-center">
                        <h5>Please Log In to follow {{mentor.title}}</h5>
                    </div>
                    <b-button class="mt-3" variant="outline-danger" block @click="hideModal">I Understand!</b-button>
                </b-modal>
                <div class="flex">
                    <div class="image-div">
                        <img :src="mentor.profilePicture" 
                        width="200" height="200" img-alt="Card image" img-left/>
                        <div>
                            <div v-if="!isfollowingMentor" style="margin-top:1px;"><b-button @click="followMentor" variant="primary" style="width:200px;">Follow Mentor</b-button></div>
                            <div v-if="isfollowingMentor" style="margin-top:1px;"><b-button @click="unfollowMentor" variant="outline-primary" style="width:200px;">Unfollow Mentor</b-button></div>
                        </div>
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
                                <ArticleCard v-for="article in mentor.articles" :key="article.title"
                                             :title="article.title" :link="article.link"
                                             :img="article.image" :summary="article.description"/>
                            </b-card-text>
                        </b-card>
                        <b-card header-tag="header" footer-tag="footer" class="article-card">
                            <template v-slot:header>
                                <h6 class="mb-0">Tutorials</h6>
                            </template>
                            <b-card-text>
                                <TutorialCard v-for="video in mentor.videos" :key="video.link"
                                    :embedLink="video.link"
                                    :title="video.title"/>
                            </b-card-text>
                        </b-card>
            </div>

        </div>
        <div v-if="$getMyMentorProfile">
             <b-card style="margin-right:15px;margin-left:15px;">
                 <template v-slot:header>
                                <h1>M<span style="font-size:26px;font-weight:bold;">Y</span> P<span style="font-size:26px;font-weight:bold;">ROFILE</span></h1>
                            </template>
                
                <br>
                <div class="flex">
                    <div class="image-div">
                        <div v-b-tooltip.hover title="Edit picture" class="edit-icon" @click="editPicture"><font-awesome-icon  class="fa-item" :icon="editIcon" /></div>
                        <img :src="mentor.profilePicture" 
                        width="200" height="200" img-alt="Card image" img-left/>
                         
                        </div>
                    <div style="flex:4;margin:20px;">
                        <div v-if="!showtitleInput" v-b-tooltip.hover title="Edit title" style="margin-right: 2%;" class="edit-icon"><font-awesome-icon  class="fa-item" :icon="editIcon"  @click="editTitle"/></div>
                        <div v-if="showtitleInput">
                            <b-form-input v-model="newTitle" placeholder="Enter new title"></b-form-input>
                            <div v-b-tooltip.hover title="Save new title" class="save" @click="saveTitle">
                                <font-awesome-icon   class="fa-item " :icon="saveIcon" />
                            </div>
                        </div>
                        <div v-if="!showtitleInput" class="title">{{mentor.title}}</div>
                        <div v-if="!showtitleInput" class="bio">{{mentor.bio}}</div>
                         <b-form-textarea
                            v-if="showtitleInput"
                            id="textarea"
                            v-model="newBio"
                            placeholder="Enter bio..."
                            rows="3"
                            max-rows="6"
                            ></b-form-textarea>
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
                                <ArticleCard v-for="article in mentor.articles" :key="article.title"
                                             :title="article.title" :link="article.link"
                                             :img="article.image" :summary="article.description"/>
                            </b-card-text>
                        </b-card>
                        <b-card header-tag="header" footer-tag="footer" class="article-card">
                            <template v-slot:header>
                                <h6 class="mb-0">Tutorials</h6>
                            </template>
                            <b-card-text>
                                <TutorialCard v-for="video in mentor.videos" :key="video.link"
                                    :embedLink="video.link"
                                    :title="video.title"/>
                            </b-card-text>
                        </b-card>
            </div>

        </div>
    </div>
</template>

<script>
    import {mapGetters,mapActions} from 'vuex';
    import ArticleCard from "../assets/ArticleCard";
    import TutorialCard from "../assets/TutorialCard";
    import {faEdit, faSave}  from '@fortawesome/free-solid-svg-icons'
    export default {
        name: "MentorProfile",
        components: {ArticleCard, TutorialCard},
        data() {
            return {
                user: {},
                mentor: {},
                experiences:[],
                isfollowingMentor: false,
                newTitle: "",
                showtitleInput: false,
                newBio: "",
                userLoggedIn: false,
                showLoggedInUserError: false
            }
        },
        computed: {
            ...mapGetters([
                'loggedInUser',
                'getMentorProfileWithUsername',
                'getUserWithUsername'
            ]),
            $getOtherMentorProfile: function () {
                return this.loggedInUser.type=='mentee' || this.loggedInUser.username!=this.mentor.username
            },
            $getMyMentorProfile: function() {
                return this.loggedInUser.type=='mentor' && this.loggedInUser.username==this.mentor.username
            },
            editIcon(){
                return faEdit
            },
            saveIcon(){
                return faSave
            }
        },
        methods: {
            ...mapActions([
                'addMyMentor',
                'removeMyMentor',
                'editMentorProfileContent'
            ]),
            changeStatus(){
                if(!this.isfollowingMentor) { 
                    this.user.mentors.forEach(mentor => {
                        if(mentor === this.mentor.username){
                            this.isfollowingMentor=true;
                            console.log(this.isfollowingMentor)
                        }
                    });
                }
                else
                    this.isfollowingMentor=false;
            },
            followMentor(){
                if(this.userLoggedIn){
                    let payload = {
                        username: this.loggedInUser.username,
                        mentor: this.mentor.username
                    }
                    this.addMyMentor(payload)
                    this.changeStatus()
                }
                else{
                    this.showModal()
                }
            },
            unfollowMentor(){
                let payload = {
                    username: this.loggedInUser.username,
                    mentor: this.mentor.username
                }
                this.removeMyMentor(payload)
                this.changeStatus()
                
            },
            editPicture(){
                this.mentor.profilePicture = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf_Bf0-x44hsGqqcQwrTcNeLUSnYjlDuoql-hQHydDdBwxeCT2&s"
                this.editMentorProfileContent(this.mentor)
            },
            editTitle(){
                this.showtitleInput = true
            },
            saveTitle(){
                this.mentor.title = this.newTitle;
                this.mentor.bio = this.newBio
                this.editMentorProfileContent(this.mentor)
                this.showtitleInput = false
            },
            showModal() {
                    this.$refs['my-modal'].show()
            },
            hideModal() {
                    this.$refs['my-modal'].hide()
            },
        },
        mounted() {
            if(this.loggedInUser.username!="" && this.loggedInUser.username!=null && this.loggedInUser.username!=undefined ){
                this.userLoggedIn = true
            }
            this.user = this.getUserWithUsername(this.loggedInUser.username)[0]
            this.mentor = this.getMentorProfileWithUsername(this.$route.params.name)[0]
            this.experiences = this.mentor.workEx;
            this.newTitle = this.mentor.title;
            this.newBio = this.mentor.bio;
            this.changeStatus()
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
        height: fit-content;
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
    .edit-icon{
         width:fit-content; 
         height:fit-content;
         float:right;
         position:relative;
         font-size:24px;
         margin-bottom:-35px;
         margin-right: 18%;

    }
    .save{
        font-size: 32px;
        float:right;
        position: relative;
        margin-top: -40px;
        margin-right: 5px;
    }
</style>