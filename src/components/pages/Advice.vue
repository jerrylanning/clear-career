<template>
<b-container fluid>
        <b-card>
            <template v-slot:header>
                <h1>M<span style="font-size:26px;font-weight:bold;">Y</span> A<span style="font-size:26px;font-weight:bold;">DVICE</span>
                </h1>
            </template>
            <b-card title="Curate">
                    <button id="articles-button"
                            class="btn btn-lg btn-primary"
                            type="button"
                            style="margin:1%"
                             @click="showArticleModal">
                        Articles
                           
                    </button>
                    <button id="tutorials-button"
                            class="btn btn-lg btn-primary"
                            type="button"
                            style="margin:1%"
                             @click="showTutorialModal">
                        Tutorials
                    </button>
            </b-card>
            <div style="align-self:center;display:flex;">
                <b-card id="tasks-column">
                    <h4 class="top-rated-tasks">Top-Rated Tasks</h4>
                    <hr>
                    <ol>
                        <li v-for="task in tasks" :key="task.name">
                            <div class="task-item">
                                <font-awesome-icon class="fa-item" :icon="faEmptyThumbUp"/>
                                <font-awesome-icon class="fa-item " :icon="faEmptyThumbDown"/>
                                <div style="margin-left:5px;">{{task.name}}</div>
                            </div>
                        </li>
                        <br/>
                    </ol>
                </b-card>
                <b-modal id="modal-add-task" ref="modal-add-task" centered size="sm" header-bg-variant="success" title="Success">Successfully added {{messagetype}}</b-modal>
                <b-card id="tasks-column">
                    <h4 class="top-rated-tasks">Add Tasks</h4>
                    <hr>
                    <b-form-input class="input-text" v-model="taskName" placeholder="Task Name"></b-form-input>
                    <b-form-textarea
                            id="textarea"
                            v-model="taskDesc"
                            placeholder="Task Description..."
                            rows="5"
                            style="margin-top:2%"
                            ></b-form-textarea>
                    <b-form-input class="input-text" v-model="taskLink" placeholder="Link"></b-form-input>
                    <b-button class="input-text" variant="outline-success" @click="addTaskToList">Add task</b-button>
                </b-card>
                 <b-modal id="modal-article" ref="modal-article" hide-footer centered size="lg" title="Add Article" >
                     <b-form-input class="input-text" v-model="articleName" placeholder="Article Title"></b-form-input>
                     <b-form-input class="input-text" v-model="articleImage" placeholder="Article Image Link"></b-form-input>
                    <b-form-textarea
                        id="textarea"
                        v-model="articleDesc"
                        placeholder="Article Description..."
                        rows="5"
                        style="margin-top:2%"
                        ></b-form-textarea>
                    <b-form-input class="input-text" v-model="articleLink" placeholder="Link to article"></b-form-input>
                    <b-button class="input-text" variant="outline-success" style="text-align:center;float:right;" @click="addArticleToList">Add Article</b-button>
                 </b-modal>
                <b-modal id="modal-tutorial" ref="modal-tutorial" hide-footer centered size="lg" title="Add tutorial">
                    <b-form-input class="input-text" v-model="tutorialName" placeholder="Tutorial Name"></b-form-input>
                    <b-form-input class="input-text" v-model="tutorialLink" placeholder="Link to tutorial. Please add embed link only "></b-form-input>
                    <b-button class="input-text" variant="outline-success" style="text-align:center;float:right;" @click="addTutorialToList">Add tutorial</b-button>
                 </b-modal>
            </div>
        </b-card>
</b-container>
</template>

<script>
    import {faThumbsUp} from '@fortawesome/free-regular-svg-icons';
    import {faThumbsDown} from '@fortawesome/free-regular-svg-icons';
    import { mapGetters,mapActions } from 'vuex'

    export default {
        name: "Advice",
        data(){
            return{
                taskName:"",
                taskDesc: "",
                taskLink: "",
                tasks: [],
                mentor: {},
                messagetype: "",
                articleName: "",
                articleImage: "",
                articleDesc: "",
                articleLink:"",
                tutorialName: "",
                tutorialLink: ""

            }
        },

        computed: {
            ...mapGetters([
            'getMentorProfileWithUsername',
            'loggedInUser'
            ]),
            faEmptyThumbUp() {
                return faThumbsUp;
            },
            faEmptyThumbDown() {
                return faThumbsDown;
            }
        },
        methods:{
            ...mapActions([
                'addTasks',
                'addTutorials',
                'addArticles'
            ]),
            addTaskToList(){
                let payload={
                    name: this.taskName,
                    description: this.taskDesc,
                    link: this.taskLink
                }
                let data = {
                    username: this.loggedInUser.username,
                    task: payload
                }
                console.log(data)
                this.addTasks(data)
                this.messagetype="tasks"
                this.showMessageModal()

            },
            addArticleToList(){
                let payload={
                    title: this.articleName,
                    image: this.articleImage,
                    description: this.articleDesc,
                    link: this.articleLink
                }
                let data = {
                    username: this.loggedInUser.username,
                    article: payload
                }
                console.log(data)
                this.addArticles(data)
                this.messagetype="article"
                this.hideArticleModal()
                
                this.showMessageModal()
            },
            addTutorialToList(){
                let payload={
                    title: this.tutorialName,
                    link: this.tutorialLink
                }
                let data = {
                    username: this.loggedInUser.username,
                    tutorial: payload
                }
                console.log(data)
                this.addTutorials(data)
                this.messagetype="tutorial"
                this.hideTutorialModal()
                
                this.showMessageModal()
            },
            showMessageModal() {
                    this.$refs['modal-add-task'].show()
            },
            hideMessageModal() {
                    this.$refs['modal-add-task'].hide()
            },
            showArticleModal() {
                    this.$refs['modal-article'].show()
            },
            hideArticleModal() {
                    this.$refs['modal-article'].hide()
            },
            showTutorialModal() {
                    this.$refs['modal-tutorial'].show()
            },
            hideTutorialModal() {
                    this.$refs['modal-tutorial'].hide()
            },
        },
        mounted(){
            this.mentor = this.getMentorProfileWithUsername(this.loggedInUser.username)[0]
            this.tasks = this.mentor.tasks
        }

    }
</script>


<style scoped>

    .task-item {
        display: flex;
        margin: 10px;
    }

    #tasks-column {
        width: 60%;
        border: 1px solid lightgray;
        margin: 1%;
    }

    li {
        margin-bottom: 8px;
    }

    .input-text{
        margin-top: 2%;
    }

</style>