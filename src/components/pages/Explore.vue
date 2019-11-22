<template>
    <div class="explore">
        <h1>Explore</h1>
        <div class="search-explore-box">
            <div class="form-inline">
                <input class="form-control search-explore-bar" placeholder="Search Keyword"/>
                <button class="btn search-button">search</button>
            </div>
            <div class="form-inline explore-dropdown-container">
                <div class="dropdown">
                    <button class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Field
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button class="dropdown-item" type="button">Computer Science</button>
                        <button class="dropdown-item" type="button">Psychology</button>
                        <button class="dropdown-item" type="button">Teaching</button>
                    </div>
                </div>
                <div class="dropdown explore-dropdown">
                    <button class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Location
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button class="dropdown-item" type="button">50 Miles</button>
                        <button class="dropdown-item" type="button">100 Miles</button>
                        <button class="dropdown-item" type="button">200 miles</button>
                    </div>
                </div>
                <div class="dropdown explore-dropdown">
                    <button class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Education
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button class="dropdown-item" type="button">High School</button>
                        <button class="dropdown-item" type="button">Bachelor's Degree</button>
                        <button class="dropdown-item" type="button">Masters/PhD</button>
                    </div>
                </div>
                <div class="dropdown explore-dropdown">
                    <button class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                    <button type="button" class="btn btn-lg d-lg-inline-flex">
                        <font-awesome-icon class="fa-item" :icon="rightArrow" />
                        Demand
                    </button>
                </div>
                <div class="sort-btn">
                    <button type="button" class="btn btn-lg d-lg-inline-flex">
                        <font-awesome-icon class="fa-item" :icon="rightArrow" />
                        Income
                    </button>
                </div>
                <div class="sort-btn">
                    <button type="button" class="btn btn-lg d-lg-inline-flex">
                        <font-awesome-icon class="fa-item" :icon="downArrow" />
                        Popularity
                    </button>
                </div>
                <div class="sort-btn">
                    <button type="button" class="btn btn-lg d-lg-inline-flex">
                        <font-awesome-icon class="fa-item" :icon="upArrow" />
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
    </div>
</template>

<script>
    import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
    import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
    import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'

    export default {
        name: "Explore",

        computed: {
            rightArrow () {
                return faArrowAltCircleRight
            },
            downArrow() {
                return faArrowAltCircleDown
            },
            upArrow() {
                return faArrowAltCircleUp
            }
         }
    }
</script>

<style scoped>
    .explore {
        text-align: center;
    }
    .search-explore-box {
        width: 80%;
        height: 200%;
        margin-left: 10%;
        position: absolute;
        outline-style: solid;
        outline-color: lightblue;
    }

    .search-explore-bar {
        width: 73%;
        margin-left: 10%;
        margin-top: 1%;
    }

    .search-button {
        margin-top: 1%;
        width: 7%;
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

    .dropdown-toggle {
        width: 100%;
        background-color: dodgerblue;
        color: white;
    }

    .dropdown-toggle:hover {
        background-color: cornflowerblue;
    }

    .btn-lg {
        width: 100%;
        height: 85%;
        background-color: cornflowerblue;
    }

    .btn-group {
        margin-top: 1%;
        width: 80%;
        margin-left: 0;
    }
    .fa-item {
        margin-right: 5%;
    }
    .left-sort-btn {
        width: 75%;
    }
    .sort-btn {
        margin-left: 3%;
        width: 75%;
    }
    .slider-container {
        width: 80%;
        margin-left: 10%;
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

</style>
