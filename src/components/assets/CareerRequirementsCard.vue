<template>
    <b-card>
        <h2>{{this.career.career}}</h2>
        <div class="requirements" v-for="requirement in this.career.requirements" :key="requirement">{{requirement.requirement}}</div>
    </b-card>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "CareerRequirementsCard",
        methods: {
        },
        data() {
            return {
                career: {}
            }
        },
        computed: {
            ...mapGetters([
                'getCareerByName'
            ])
        },
        mounted() {
            this.career = this.getCareerByName(this.$route.params.name);
            console.log(this.career)
        }
    }
</script>

<style scoped>
    .requirements {
        color: dodgerblue;
    }
</style>