<template>
    <div class="mentor-card outlineBox">
        <div class="text-container">
            <div class="name-box"><router-link :to="`/mentor-profile/${routeToMentor}`" class="router-link">{{name}}</router-link></div>
            <div class="description-box">{{description}}</div>
            <div class="bottom-box">
                <div class="credential-box">
                    <div>Location: {{location}}</div>
                    <div class="credential">Years of Experience: {{yearsOfExperience}}</div>
                    <div class="credential">Workplace: {{workplace}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MentorCard",
        props: {
            name: String,
            routeToMentor: String,
            description: String,
            location: String,
            yearsOfExperience: String,
            workplace: String
        }
    }
</script>

<style scoped>
    .mentor-card {
        margin-top: 3%;
    }
    .text-container {
        padding-left: 5%;
        text-align: left;
    }
    .name-box {
        color: dodgerblue;
        border-bottom: solid lightblue;
        width: 25%;
    }
    .description-box {
        margin-bottom: 1%;
    }
    .bottom-box {
        width: 100%;
        display: inline-flex;
        margin-bottom: 1%;
        font-size: 85%;
    }
    .show-profile-button {
        height: 20%;
    }
    .credential-box {
        width: 80%;
        display: inline-flex;
    }
    .credential {
        margin-left: 10%;
    }

</style>
