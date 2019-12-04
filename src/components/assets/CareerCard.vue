<template>
    <div class="career-container outlineBox">
        <div class="career outlineBox">
            <router-link :to="`/career-page/${career}`" class="router-link">{{career}}</router-link>
        </div>
        <div class="description">
            {{description}}
        </div>
        <div class="quick-facts">
            <div class="salary">
                {{salary}}
            </div>
            <div class="education">
                {{education}}
            </div>
            <div class="experience">
                {{experience}}
            </div>
        </div>
    </div>
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
    .career-container {
        margin-top: 2%;
        width: 42%;
        display: inline-block;
        margin-left: 8%;
    }

    .career {
        position: relative;
        top: 0;
    }

    .description {
        display: inline-block;
        position: relative;
        height: 90%;
        width: 50%;
    }

    .quick-facts {
        display: inline-block;
        width: 50%;
        height: 90%;
        float: right;
        border-left-style: solid;
        border-left-color: lightblue;
    }

    .salary {

    }

    .experience {

    }

    .education {

    }
</style>
