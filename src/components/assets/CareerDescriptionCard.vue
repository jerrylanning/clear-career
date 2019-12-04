<template>
    <b-card class="description">
        <h2>{{careerName}} Job Description / Information</h2>
        <br>
        <p>{{description}}</p>
    </b-card>
</template>

<script>
    export default {
        name: "CareerDescriptionCard",
        props: {
            careerName: String,
            description: String
        }
    }
</script>

<style scoped>

    h2{
        color: dodgerblue;
    }

    .description{
        text-align: left;
        max-height: 400px;
        overflow-y: auto;
        margin: 15px;
    }

</style>