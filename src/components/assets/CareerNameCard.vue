<template>
    <b-card :img-src="picPath" img-alt="Card image" img-left class="mb-3">
        <b-card-text class="text">
            {{careerName}}
        </b-card-text>
        <b-progress :max="50">
            <b-progress-bar :value="25" variant="success"></b-progress-bar>
        </b-progress>
    </b-card>
</template>

<script>
    export default {
        name: "CareerNameCard",
        props: {
            careerName: String,
            picPath: String
        }
    }
</script>

<style scoped>



    img{
        border-radius: 50%;
        margin: 10px;
        height: 100px;
        width: 100px;
    }

    .text{
        font-size: 30px;
        color: dodgerblue;
    }

</style>