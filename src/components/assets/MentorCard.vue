<template>
    <b-container>
        <b-card class="career-card">
            <h4 class="career">
                <router-link :to="`/mentor-profile/${username}`" class="router-link">{{name}}</router-link>
            </h4>
            <b-card-text>
                {{description.substring(0,100)}}...
            </b-card-text>
            <b-card-text>
                <div class="credential-box">
                    <div><span style="font-weight:bold;">Location: </span> {{location}}</div>
                    <div class="credential"><span style="font-weight:bold;">Experience: </span>{{yearsOfExperience}}</div>
                    <div class="credential"><span style="font-weight:bold;">Workplace: </span>{{workplace}}</div>
                </div>
            </b-card-text>
        </b-card>
    </b-container>
</template>

<script>
    export default {
        name: "MentorCard",
        props: {
            name: String,
            description: String,
            location: String,
            yearsOfExperience: String,
            workplace: String,
            username: String,
        }
    }
</script>

<style scoped>
    .credential-box {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        display: inline-flex;
    }
    .career-card {
        margin-top: 2%;
        background-color: #A8D0E6;
    }
    .credential {
        margin-left: 10%;
    }

</style>
