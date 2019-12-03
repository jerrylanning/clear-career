<template>
    <b-container>
        <div>
            <b-card>
                <h1>Mentors</h1>
                <div class="search-mentor-box outlineBox">
                    <div class="form-inline">
                        <input class="form-control search-mentor-bar" placeholder="Search by mentors name" @change="updateKeyword"/>
                    </div>
                    <div class="form-inline search-mentor-dropdown-container">
                        <div class="dropdown">
                            <button class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Workplace
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button class="dropdown-item" type="button" @click="filterByWorlkplace('Northeastern')">Northeastern</button>
                                <button class="dropdown-item" type="button" @click="filterByWorlkplace('Home')">Home</button>
                            </div>
                        </div>
                        <div class="dropdown search-mentor-dropdown">
                            <button class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Location
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button class="dropdown-item" @click="filterByLocation('MA')">MA</button>
                                <button class="dropdown-item" @click="filterByLocation('NY')" type="button">NY</button>
                                <button class="dropdown-item" @click="filterByLocation('NH')" type="button">NH</button>
                            </div>
                        </div>
                        <div class="dropdown search-mentor-dropdown">
                            <button class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Education
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button class="dropdown-item" type="button" @click="filterByEducation('High School')">High School</button>
                                <button class="dropdown-item" type="button" @click="filterByEducation('Bachelor')">Bachelor</button>
                                <button class="dropdown-item" type="button" @click="filterByEducation('Masters/PhD')">Masters/PhD</button>
                            </div>
                        </div>
                        <div class="dropdown search-mentor-dropdown">
                            <button class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Experience
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button class="dropdown-item" type="button" @click="filterByExperience('0-1 Years')">0-1 Years</button>
                                <button class="dropdown-item" type="button" @click="filterByExperience('1-3 Years')">1-3 Years</button>
                                <button class="dropdown-item" type="button" @click="filterByExperience('3-5 Years')">3-5 Years</button>
                                <button class="dropdown-item" type="button" @click="filterByExperience('5+ Years')">5+ Years</button>

                            </div>
                        </div>
                    </div>
                    <div class="clearFilters" @click="clearFilters">
                        Clear Filters
                    </div>
                </div>
                <div class="mentor-card-container">
                    <MentorCard  v-for="mentor in currentMentors" :key="mentor.title" :name="mentor.title" :description="mentor.bio"
                        :location="mentor.location" :yearsOfExperience="mentor.yearsOfExperience" :workplace="mentor.workplace"/>
                </div>
                <!--<b-pagination-->
                        <!--v-model="currentPage"-->
                        <!--:total-rows="rows"-->
                        <!--:per-page="perPage"-->
                        <!--first-text="First"-->
                        <!--prev-text="Prev"-->
                        <!--next-text="Next"-->
                        <!--last-text="Last"-->
                        <!--align="center"-->
                <!--&gt;</b-pagination>-->
            </b-card>
        </div>
    </b-container>
</template>

<script>
    import MentorCard from "../assets/MentorCard";
    import {mapGetters} from "vuex";

    export default {
        name: "SearchMentors",
        components: {MentorCard},
        methods: {
            updateKeyword(event) {
                let query = event.target.value.toLowerCase();
                this.currentMentors = this.allMentors.filter((mentor) => {
                    let mentorTitle = mentor.title.toLocaleLowerCase();
                    return mentorTitle.includes(query)
                });
            },
            filterByWorlkplace(string) {
                let query = string.toLowerCase();
                this.currentMentors = this.currentMentors.filter((mentor) => {
                    let mentorField = mentor.workplace.toLowerCase();
                    return mentorField.includes(query)
                })
            },
            filterByLocation(string) {
                let query = string.toLowerCase();
                this.currentMentors = this.currentMentors.filter((mentor) => {
                    let mentorField = mentor.location.toLowerCase();
                    return mentorField.includes(query)
                })
            },
            filterByEducation(string) {
                let query = string.toLowerCase();
                this.currentMentors = this.currentMentors.filter((mentor) => {
                    let mentorField = mentor.education.toLowerCase();
                    return mentorField.includes(query)
                })
            },
            filterByExperience(string) {
                let query = string.toLowerCase();
                this.currentMentors = this.currentMentors.filter((mentor) => {
                    let mentorField = mentor.yearsOfExperience.toLowerCase();
                    return mentorField.includes(query)
                })
             },
            clearFilters() {
                this.currentMentors = this.allMentors
            },
        },
        data() {
            return {
                perPage: 10,
                rows: 100,
                currentPage: 1,
                allMentors: [],
                currentMentors: [],
                location: "",
                field: "",
                education: "",
                experienceSort: "",

            }
        },
        computed:{
            ...mapGetters([
                'getAllMentors'
            ])
        },
        mounted(){
            this.currentMentors = this.getAllMentors();
            this.allMentors = this.getAllMentors();
        }
    }
</script>

<style scoped>
    .search-mentor-box {
        width: 80%;
        margin-left: 10%;
    }

    .search-mentor-bar {
        width: 90%;
        margin-left: 5%;
        margin-top: 1%;
    }

    .search-mentor-dropdown-container {
        margin-left: 10%;
        margin-top: 2%;
    }

    .dropdown {
        width: 20%;
    }

    .search-mentor-dropdown {
        margin-left: 3%;
    }

    .dropdown-toggle {
        width: 100%;
        background-color: dodgerblue;
        color: white;
        margin-bottom: 5%;
    }

    .dropdown-toggle:hover {
        background-color: cornflowerblue;
    }

    .mentor-card-container {
        margin-left: 15%;
        width: 70%;
        text-align: center;
        margin-bottom: 3%;
    }
    .clearFilters {
        text-align: right;
        margin-right: 1%;
        color: blue;
    }
    .clearFilters:hover {
        cursor: pointer;
        text-decoration: underline;
    }

</style>
