<template>
    <b-container class="career-card-container">
            <b-card class="career-card">
                <h4 class="career">
                    <router-link :to="`/career-page/${career}`" class="router-link">{{career}}</router-link>
                </h4>
                <b-card-text>
                    {{description.substring(0,100)}}...
                </b-card-text>
                <b-card-text>
                    <span  style="font-weight: bold;">Income: </span>{{salary}}
                </b-card-text>
                <b-card-text>
                    <span style="font-weight: bold;">Education: </span>{{education}}
                </b-card-text>
                <b-card-text>
                    <span style="font-weight: bold;">Experience: </span> {{experience}}
                </b-card-text>
            </b-card>
    </b-container>
</template>

<script>
    export default {
        name: "CareerCard",
        props: {
            career: String,
            description: String,
            education: String,
            salary: String,
            experience: String
        }
    }
</script>


<style scoped>
    .career-card-container {
        width: 45%;
        display: inline-block;
        margin-left: 5%;
        margin-top: 2%;
    }

    .career-card {
        background-color: #A8D0E6;
    }

    .career {
        position: relative;
        top: 0;
        font-weight:bold;
    }

</style>
