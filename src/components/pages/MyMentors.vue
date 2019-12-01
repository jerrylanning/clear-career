<template>
    <div>
        <b-container>
            <h1>My Mentors</h1>
            <div class="search-mentors"><router-link to="/search-mentors">Search Mentors</router-link></div>
            <div class="mentor">
                <h3>Dr. Mind Reader</h3>
                <hr>
                <div class="lesson-container">
                    <div class="thumb"></div>
                    <div class="description">
                    </div>
                </div>
                <div class="lesson-container">
                    <div class="thumb"></div>
                    <div class="description">
                    </div>
                </div>
                <div class="lesson-container">
                    <div class="thumb"></div>
                    <div class="description">
                    </div>
                </div>
                <div class="lesson-container">
                    <div class="thumb"></div>
                    <div class="description">
                    </div>
                </div>

            </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: "MyMentors"
    }
</script>

<style scoped>

    .thumb{
        position: relative;
        outline: 1px solid black;
        margin: 25px;
        height: 150px;
        width: 20%;
        display: inline-block;
        background-color: aqua;
    }

    .description{
        width: 60%;
        height: 150px;
        margin: 25px;
        margin-left: 0px;
        outline: 1px solid chartreuse;
        background-color: gray;
        display: inline-block;
    }

    .mentor{
        outline: 1px solid gray;
        margin-top: 25px;
    }

    h3{
        padding-top: 20px;
    }

    .lesson-container{
        height: 200px;
        width: 50%;
        background-color: red;
        display: inline-block;
    }

</style>