<template>
    <b-container>
        <h1>Career Page</h1>
        <br>
        <div class="row">
            <div class="col-8">
                <CareerNameCard :careerName="career.career" :pic-path="career.pic"/>
                <CareerDescriptionCard :careerName="career.career" :description="career.description"/>
                <div class="chart-container">
                    <JobsPerYearChart class="chart" :career-name="career.career"/>
                    <SalaryPerYearChart class="chart" :career-name="career.career"/>
                </div>
            </div>
            <div class="col-4">
                <CareerRequirementsCard class="card"/>
                <TopMentorsCard class="card"/>
                <button class="btn btn-primary">Add to My Paths</button>
            </div>
        </div>



    </b-container>
</template>

<script>
    import CareerNameCard from "../assets/CareerNameCard";
    import CareerDescriptionCard from "../assets/CareerDescriptionCard";
    import JobsPerYearChart from "../assets/JobsPerYearChart";
    import SalaryPerYearChart from "../assets/SalaryPerYearChart";
    import CareerRequirementsCard from "../assets/CareerRequirementsCard";
    import TopMentorsCard from "../assets/TopMentorsCard";
    import {mapGetters} from "vuex";
    export default {
        name: "CareerPage",
        components: {
            TopMentorsCard,
            CareerRequirementsCard, SalaryPerYearChart, JobsPerYearChart, CareerDescriptionCard, CareerNameCard
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

    .card{
        margin: 10px;
    }

</style>