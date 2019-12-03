<template>
    <b-card>
        <h2>Top Mentors</h2>
        <div class="mentors" v-for="mentor in this.mentors" :key="mentor"><router-link :to="`/mentor-profile/${mentor.username}`" class="router-link">{{mentor.title}}</router-link></div>
    </b-card>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "TopMentorsCard",
        methods: {
        },
        data() {
            return {
                mentors: {},
            }
        },
        computed: {
            ...mapGetters([
                'getMentorByCareer'
            ])
        },
        mounted() {
            this.mentors = this.getMentorByCareer("Psychologist");
            //console.log(this.career)
        }
    }
</script>

<style scoped>
    .mentors {
        color: dodgerblue;
    }
</style>