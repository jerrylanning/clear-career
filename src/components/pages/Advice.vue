<template>
    <div class="advice-container">
        <b-card class="b-card-container">
            <h1 class="heading"> My Advice </h1>
            <div class="row">
                <b-card id="curate-column"
                     class="col-2">
                    <h2 class="curate">Curate</h2>
                    <button id="to-do-button"
                            class="btn btn-lg btn-primary"
                            type="button">
                        To-Do List
                    </button>
                    <button id="articles-button"
                            class="btn btn-lg btn-primary"
                            type="button">
                        Articles
                    </button>
                    <button id="tutorials-button"
                            class="btn btn-lg btn-primary"
                            type="button">
                        Tutorials
                    </button>
                </b-card>
                <b-card id="tasks-column"
                     class="col-6">
                    <h2 class="top-rated-tasks">Top-Rated Tasks</h2>
                    <ol>
                        <li>
                            <div class="task-item">
                                <font-awesome-icon class="fa-item icon" :icon="faEmptyThumbUp"/>
                                <font-awesome-icon class="fa-item icon" :icon="faEmptyThumbDown"/>
                                <div>Eat good food, go vegan</div>
                            </div>
                        </li>
                        <li>
                            <div class="task-item">
                                <font-awesome-icon class="fa-item icon" :icon="faEmptyThumbUp"/>
                                <font-awesome-icon class="fa-item icon" :icon="faEmptyThumbDown"/>
                                <div>Get good sleep</div>
                            </div>
                        </li>
                        <li>
                            <div class="task-item">
                                <font-awesome-icon class="fa-item icon" :icon="faEmptyThumbUp"/>
                                <font-awesome-icon class="fa-item icon" :icon="faEmptyThumbDown"/>
                                <div>Drink a lot of water</div>
                            </div>
                        </li>
                        <li>
                            <div class="task-item">
                                <font-awesome-icon class="fa-item icon" :icon="faEmptyThumbUp"/>
                                <font-awesome-icon class="fa-item icon" :icon="faEmptyThumbDown"/>
                                <div>Go outside</div>
                            </div>
                        </li>
                        <li>
                            <div class="task-item">
                                <font-awesome-icon class="fa-item icon" :icon="faEmptyThumbUp"/>
                                <font-awesome-icon class="fa-item icon" :icon="faEmptyThumbDown"/>
                                <div>Be social, talk to your crush</div>
                            </div>
                        </li>
                        <li>
                            <div class="task-item">
                                <font-awesome-icon class="fa-item icon" :icon="faEmptyThumbUp"/>
                                <font-awesome-icon class="fa-item icon" :icon="faEmptyThumbDown"/>
                                <div>Take your vitamins</div>
                            </div>
                        </li>
                        <li>
                            <div class="task-item">
                                <font-awesome-icon class="fa-item icon" :icon="faEmptyThumbUp"/>
                                <font-awesome-icon class="fa-item icon" :icon="faEmptyThumbDown"/>
                                <div>Brush your teeth and tongue</div>
                            </div>
                        </li>
                        <li>
                            <div class="task-item">
                                <font-awesome-icon class="fa-item icon" :icon="faEmptyThumbUp"/>
                                <font-awesome-icon class="fa-item icon" :icon="faEmptyThumbDown"/>
                                <div>Get good health insurance</div>
                            </div>
                        </li>
                        <li>
                            <div class="task-item">
                                <font-awesome-icon class="fa-item icon" :icon="faEmptyThumbUp"/>
                                <font-awesome-icon class="fa-item icon" :icon="faEmptyThumbDown"/>
                                <div>Put the max into your 401k</div>
                            </div>
                        </li>
                        <li>
                            <div class="task-item">
                                <font-awesome-icon class="fa-item icon" :icon="faEmptyThumbUp"/>
                                <font-awesome-icon class="fa-item icon" :icon="faEmptyThumbDown"/>
                                <div>Stretch every morning</div>
                            </div>
                        </li>
                    </ol>
                </b-card>
                <b-card id="add-task-column"
                     class="col-4">
                    <h2 class="add-task">Add Task</h2>
                    <input class="add-task-title" type="text" placeholder="Task Name">
                    <input class="add-task-body" type="text" placeholder="Task Description" >
                    <div class="attach-file">
                        <div>Attach File</div>
                    </div>
                    <div class="link">
                        <div>Link</div>
                    </div>
                </b-card>
            </div>
        </b-card>
    </div>
</template>

<script>
    import {faThumbsUp} from '@fortawesome/free-regular-svg-icons';
    import {faThumbsDown} from '@fortawesome/free-regular-svg-icons';

    export default {
        name: "Advice",

        computed: {
            faEmptyThumbUp() {
                return faThumbsUp;
            },
            faEmptyThumbDown() {
                return faThumbsDown;
            }
        },
    }
</script>


<style scoped>
    .advice-container {
        width: 100vw;
    }

    .heading {
        margin: 2% 0;
    }

    .task-item {
        justify-content: flex-start;
        display: flex;
        float: left;
        width: 100%;
    }

    .icon {
        flex: 1;
    }

    #curate-column {
        width: 20%;
        height: 72vh;
        text-align: center;
        border: 3px solid lightgray;
    }

    #tasks-column {
        width: 45%;
        border: 3px solid lightgray;
    }

    #add-task-column {
        width: 35%;
        border: 4px solid lightgray;
    }

    .curate{
        margin-bottom: 32px;
    }
    .top-rated-tasks{
        margin-bottom: 32px;
    }
    .add-task{
        margin-bottom: 32px;
    }

    #to-do-button{
        width: 128px;
        height: 64px;
        padding: 2px;
        margin: 5vh 0;
    }
    #articles-button{
        width: 128px;
        height: 64px;
        padding: 2px;
        margin: 5vh 0;
    }
    #tutorials-button{
        width: 128px;
        height: 64px;
        padding: 2px;
        margin: 5vh 0;
    }

    .add-task-title{
        width: 100%;
        border: 2px solid lightgray;
        margin-bottom: 6px;
    }

    .add-task-body{
        width: 100%;
        height: 40%;
        border: 2px solid lightgray;
    }

    .attach-file{
        text-align: left;
        margin: 6px 0 2px;
        display: flex;
    }
    .link{
        text-align: left;
        display: flex;
    }

    li {
        float: left;
        margin-bottom: 8px;
        margin-right: 51%;
    }
    li > div > div{
        margin-left: 6px;
    }

    col-6{
        margin-bottom: 16px;
    }

    /*@media screen and (min-width: 1250px) {*/
    /*    #curate-column > button {*/
    /*        width: 112px;*/
    /*        height: 56px;*/
    /*        padding: 8px;*/
    /*        display: block;*/
    /*        text-align: center;*/
    /*        margin-left: 20%;*/
    /*        margin-top: 10%*/
    /*    }*/
    /*}*/

    /*@media screen and (max-width: 1250px) {*/
    /*    #curate-column > button {*/
    /*        width: 1000px;*/
    /*        height: 56px;*/
    /*        padding: 8px;*/
    /*        display: block;*/
    /*        text-align: center;*/
    /*        margin-top: 10%*/
    /*    }*/
    /*}*/

</style>