<template>
    <b-container>
        <h4>My Mentors</h4>
        <div class="search-mentors"><router-link to="/search-mentors">Search Mentors</router-link></div>
        <b-card-group deck class="mentor-card-container">
            <div class="mentor-card">
                <b-card class="mt-3" >
                    <b-card-text>
                        <h1>My Mentor</h1>
                        <div class="mentor-populate">
                            <div class="mentor-container">
                                <div class="mentor-articles">
                                    <ArticleCard/>
                                    <ArticleCard/>

                                </div>
                                <div class="mentor-tutorials">
                                    <TutorialCard/>
                                    <TutorialCard/>
                                </div>
                            </div>
                        </div>
                    </b-card-text>
                </b-card>
            </div>
            <div class="mentor-card">
                <b-card class="mt-3" >
                    <b-card-text>
                        <h1>My Mentor</h1>
                        <div class="mentor-populate">
                            <div class="mentor-container">
                                <div class="mentor-articles">
                                    <ArticleCard/>
                                    <ArticleCard/>

                                </div>
                                <div class="mentor-tutorials">
                                    <TutorialCard/>
                                    <TutorialCard/>
                                </div>
                            </div>
                        </div>
                    </b-card-text>
                </b-card>
            </div>
        </b-card-group>
        <CareerNameCard/>
        <CareerDescriptionCard/>
        <CareerInsightsCard/>
        <SalaryPerYearChart/>
        <JobsPerYearChart/>
    </b-container>
</template>

<script>
    import ArticleCard from "../assets/ArticleCard";
    import TutorialCard from "../assets/TutorialCard";
    import CareerNameCard from "../assets/CareerNameCard";
    import CareerDescriptionCard from "../assets/CareerDescriptionCard";
    import CareerInsightsCard from "../assets/CareerInsightsCard";
    import JobsPerYearChart from "../assets/JobsPerYearChart";
    import SalaryPerYearChart from "../assets/SalaryPerYearChart";
    export default {
        name: "MyMentors",
        components: {
            SalaryPerYearChart,
            JobsPerYearChart,
            CareerInsightsCard, CareerDescriptionCard, CareerNameCard, TutorialCard, ArticleCard}
    }
</script>

<style scoped>
    .mentor-container {
        display: inline-flex;
    }
    .mentor-articles {
        height: 50%;
    }

    .mentor-tutorials {
        width: 50%;
    }
    .mentor-card-container {
        text-align: center;
    }

    .mentor-card {
        width: 80%;
        margin-left: 10%;
        height: 50%;
    }

</style>
