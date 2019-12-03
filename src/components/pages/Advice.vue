<template>
    <div class="advice-container">
        <h1 class="heading"> My Advice </h1>
        <div class="row">
            <div id="curate-column"
                 class="col-2">
                <h2>Curate</h2>
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
            </div>
            <div id="tasks-column"
                 class="col-6">
                <h2>Top-Rated Tasks</h2>
                <ol>
                    <li>
                        <div class="task-item">
                            <font-awesome-icon  class="fa-item icon" :icon="faEmptyThumbUp" />
                            <font-awesome-icon  class="fa-item icon" :icon="faEmptyThumbDown" />
                            <div>Eat good food</div>
                        </div>
                    </li>
                    <li>
                        <div class="task-item">
                            <font-awesome-icon  class="fa-item icon" :icon="faEmptyThumbUp" />
                            <font-awesome-icon  class="fa-item icon" :icon="faEmptyThumbDown" />
                            <div>Get good sleep</div>
                        </div>
                    </li>
                    <li>
                        <div class="task-item">
                            <font-awesome-icon  class="fa-item icon" :icon="faEmptyThumbUp" />
                            <font-awesome-icon  class="fa-item icon" :icon="faEmptyThumbDown" />
                            <div>Drink a lot of water</div>
                        </div>
                    </li>
                    <li>
                        <div class="task-item">
                            <font-awesome-icon  class="fa-item icon" :icon="faEmptyThumbUp" />
                            <font-awesome-icon  class="fa-item icon" :icon="faEmptyThumbDown" />
                            <div>Go outside</div>
                        </div>
                    </li>
                    <li>
                        <div class="task-item">
                            <font-awesome-icon  class="fa-item icon" :icon="faEmptyThumbUp" />
                            <font-awesome-icon  class="fa-item icon" :icon="faEmptyThumbDown" />
                            <div>Be social</div>
                        </div>
                    </li>
                </ol>
            </div>
            <div id="add-task-column"
                 class="col-4">
                <h2>Add Task</h2>
            </div>
        </div>
    </div>
</template>

<script>
    import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
    import { faThumbsDown } from '@fortawesome/free-regular-svg-icons';
    export default {
        name: "Advice",

        computed:{
            faEmptyThumbUp(){
                return faThumbsUp;
            },
            faEmptyThumbDown(){
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

    .task-item{
        justify-content: flex-start;
        display: flex;
        float: left;
        width: 100%;
    }

    .icon{
        flex: 1;
    }

    #curate-column {
        width: 20%;
        height: 100%;
        border-right: ;
        text-align: center;
    }
    #tasks-column {
        width: 45%;
    }
    #add-task-column {
        width: 35%;
    }

    li{
        float: left;
        margin: 2px;
        margin-right: 51%;
    }

    @media screen and (min-width: 1250px) {
        #curate-column > button {
            width: 60%;
            height: 56px;
            padding: 8px;
            display: block;
            text-align: center;
            margin-left: 20%;
            margin-top: 10%
        }
    }
    @media screen and (max-width: 1250px) {
        #curate-column > button {
            width: 100%;
            height: 56px;
            padding: 8px;
            display: block;
            text-align: center;
            margin-top: 10%
        }
    }


</style>