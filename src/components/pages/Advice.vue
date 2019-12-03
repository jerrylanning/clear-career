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
                        <div>

                        </div>
                        Eat good food</li>
                    <li>Get good sleep</li>
                    <li>Drink a lot of water</li>
                    <li>Go outside</li>
                    <li>Be social</li>
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
    export default {
        name: "Advice"
    }
</script>


<style scoped>
    .advice-container {
        width: 100vw;
    }

    .heading {
        margin-top: 2%;
        margin-bottom: 2%;
    }

    #curate-column {
        width: 20%;
        height: 100%;
    }
    #tasks-column {
        width: 45%;
    }
    #add-task-column {
        width: 35%;
    }

    #curate-column > button {
        width: 112px;
        height: 56px;
        padding: 8px;
        margin: 30% 0px;
    }

</style>