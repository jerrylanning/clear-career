<template>
    <b-container>
        <div class="row">
            <div class="col-8">
                <CareerNameCard/>
                <CareerDescriptionCard/>
                <div>
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
    export default {
        name: "CareerPage",
        components: {
            TopMentorsCard,
            CareerRequirementsCard,
            CareerInsightsCard, SalaryPerYearChart, JobsPerYearChart, CareerDescriptionCard, CareerNameCard}
    }
</script>

<style scoped>

    .chart{
        width: 50%;
    }

</style>