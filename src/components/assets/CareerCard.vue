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
                Average Salary: {{salary}}
            </div>
            <div class="education">
                Education: {{education}}
            </div>
            <div class="experience">
                Experience: {{experience}}
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
        margin-top: 3%
    }

    .experience {
        margin-top: 3%
    }

    .education {
        margin-top: 3%
    }
</style>
