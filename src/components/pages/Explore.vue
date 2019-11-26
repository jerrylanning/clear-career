<template>
    <b-container>
        <div class="explore">
            <b-card>
                <div class="heading-block">
                    <h1 class="explore-heading">Explore</h1>
                    <div class="search-mentors"><router-link to="/search-mentors">Search Mentors</router-link></div>
                </div>
                <div class="search-explore-box outlineBox">
                    <div class="form-inline">
                        <input class="form-control search-explore-bar" placeholder="Search Keyword"/>
                        <button class="btn search-button">search</button>
                    </div>
                    <div class="form-inline explore-dropdown-container">
                        <div class="dropdown">
                            <button class="btn btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Field
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button class="dropdown-item" type="button">Computer Science</button>
                                <button class="dropdown-item" type="button">Psychology</button>
                                <button class="dropdown-item" type="button">Teaching</button>
                            </div>
                        </div>
                        <div class="dropdown explore-dropdown">
                            <button class="btn btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Location
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button class="dropdown-item" type="button">50 Miles</button>
                                <button class="dropdown-item" type="button">100 Miles</button>
                                <button class="dropdown-item" type="button">200 miles</button>
                            </div>
                        </div>
                        <div class="dropdown explore-dropdown">
                            <button class="btn btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Education
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button class="dropdown-item" type="button">High School</button>
                                <button class="dropdown-item" type="button">Bachelor's Degree</button>
                                <button class="dropdown-item" type="button">Masters/PhD</button>
                            </div>
                        </div>
                        <div class="dropdown explore-dropdown">
                            <button class="btn btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Experience
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button class="dropdown-item" type="button">0-1 Years</button>
                                <button class="dropdown-item" type="button">1-3 Years</button>
                                <button class="dropdown-item" type="button">3-5 Years</button>
                            </div>
                        </div>
                    </div>

                    <div class="btn-group">
                        <div class="left-sort-btn">
                            <button type="button" class="btn btn-sm d-lg-inline-flex">
                                Demand
                            </button>
                        </div>
                        <div class="sort-btn">
                            <button type="button" class="btn btn-sm d-lg-inline-flex">
                                Income
                            </button>
                        </div>
                        <div class="sort-btn">
                            <button type="button" class="btn btn-sm d-lg-inline-flex">
                                Popularity
                            </button>
                        </div>
                        <div class="sort-btn">
                            <button type="button" class="btn btn-sm d-lg-inline-flex">
                                Experience
                            </button>
                        </div>
                    </div>

                    <div class="slider-container">
                        <div>Salary</div>
                        <label for="customRange1" class="min-label">0</label>
                        <input type="range" class="custom-range salary-slider" id="customRange1" min="0" max="200,000"/>
                        <label for="customRange1" class="max-label">200,000</label>
                    </div>
                </div>
                <div class="explore-career-container">
                    <CareerCard career="Psychology" description="Lad de dah" salary="500,000" education="500,000" experience="2-4 years"/>
                    <CareerCard career="Front End" description="Lad de dah" salary="500,000" education="500,000" experience="2-4 years"/>
                    <CareerCard career="Back End" description="Lad de dah" salary="500,000" education="500,000" experience="2-4 years"/>
                    <CareerCard career="Full Stack" description="Lad de dah" salary="500,000" education="500,000" experience="2-4 years"/>
                </div>
                <b-pagination
                        v-model="currentPage"
                        :total-rows="rows"
                        :per-page="perPage"
                        first-text="First"
                        prev-text="Prev"
                        next-text="Next"
                        last-text="Last"
                        align="center"
                ></b-pagination>
            </b-card>
        </div>
    </b-container>
</template>

<script>
    import CareerCard from "../assets/CareerCard";

    export default {
        name: "Explore",
        components: {CareerCard},
        data() {
            return {
                rows: "100",
                perPage: "10",
                currentPage: 1
            }
        }
    }
</script>

<style scoped>
    .explore {
        text-align: center;
    }
    .heading-block {
        display: inline-grid;
        width: 100%;
        text-align: center;
    }
    .explore-heading {
    }
    .search-mentors {
        right: 0;
    }
    .search-explore-box {
        width: 90%;
        margin-left: 5%;
    }

    .search-explore-bar {
        width: 80%;
        margin-left: 2%;
        margin-top: 1%;
    }

    .search-button {
        margin-top: 1%;
        width: 15%;
        background-color: lightblue;
        color: dodgerblue;
        outline-color: lightblue;
    }

    .search-button:hover {
        background-color: cornflowerblue;
        color: white;
    }

    .explore-dropdown-container {
        margin-left: 10%;
        margin-top: 2%;
    }

    .dropdown {
        width: 20%;
    }

    .explore-dropdown {
        margin-left: 3%;
    }

    .dropdown-toggle:hover {
        background-color: cornflowerblue;
    }

    .btn-sm {
        width: 100%;
        height: 85%;
        background-color: cornflowerblue;
        color: white;
    }

    .btn-group {
        margin-top: 1%;
        width: 80%;
        margin-left: 0;
    }
    .left-sort-btn {
        width: 75%;
    }
    .sort-btn {
        margin-left: 3%;
        width: 75%;
    }
    .slider-container {
        width: 100%;
    }
    .salary-slider {
        width: 85%;
    }
    .min-label {
        margin-right: 2%;
    }
    .max-label {
        margin-left: 2%;
    }
    .explore-career-container {
        width: 90%;
        margin-bottom: 5%;
    }

</style>
