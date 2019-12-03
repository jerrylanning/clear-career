<template>
    <b-container>
        <h1>Career Page</h1>
        <br>
        <div class="row">
            <div class="col-8">
                <CareerNameCard :careerName="career.career" :pic-path="career.pic"/>
                <CareerDescriptionCard/>
                <div class="chart-container">
                    <JobsPerYearChart class="chart"/>
                    <SalaryPerYearChart class="chart"/>
                </div>
                <CareerInsightsCard/>
            </div>
            <div class="col-4">
                <CareerRequirementsCard/>
                <TopMentorsCard/>
            </div>
        </div>



    </b-container>
</template>

<script>
    import CareerNameCard from "../assets/CareerNameCard";
    import CareerDescriptionCard from "../assets/CareerDescriptionCard";
    import JobsPerYearChart from "../assets/JobsPerYearChart";
    import SalaryPerYearChart from "../assets/SalaryPerYearChart";
    import CareerInsightsCard from "../assets/CareerInsightsCard";
    import CareerRequirementsCard from "../assets/CareerRequirementsCard";
    import TopMentorsCard from "../assets/TopMentorsCard";
    import {mapGetters} from "vuex";
    export default {
        name: "CareerPage",
        components: {
            TopMentorsCard,
            CareerRequirementsCard,
            CareerInsightsCard, SalaryPerYearChart, JobsPerYearChart, CareerDescriptionCard, CareerNameCard
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
        }
    }
</script>

<style scoped>

    .chart{
        width: 50%;
        margin: 10px;
    }

    .chart-container{
    }

</style>