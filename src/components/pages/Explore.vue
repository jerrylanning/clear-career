<template>
    <b-container fluid>
        <div class="explore shadow">
            <b-card>
            <template v-slot:header>
                <h1>E<span style="font-size:26px;font-weight:bold;">XPLORE</span>
                </h1>
            </template>
                <div class="heading-block">
                    <div class="search-mentors"><router-link to="/search-mentors">Want to search Mentors? Click here</router-link></div>
                </div>
                <b-card class="background-explore">
                    <div class="form-inline">
                        <input class="form-control search-explore-bar" placeholder="Search Keyword" @change="updateKeyword"/>
                         <b-button type="button" v-b-tooltip.hover title="Search Keyword" class="search-icon-div" @click="updateKeyword"><font-awesome-icon   class="fa-item search-icon" :icon="searchIcon" /></b-button>
                         <div v-b-tooltip.hover title="Show filters" class="filter-icon-div" v-b-toggle.collapse-2><font-awesome-icon class="fa-item filter-icon" :icon="filterIcon" /></div>
                    </div>
                    <br>
                    <b-collapse id="collapse-2">
                        <b-card>
                                <div class="form-inline explore-dropdown-container">
                        <div class="dropdown">
                            <button class="btn btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Field
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button class="dropdown-item" type="button" @click="filterByField('Computer Science')">Computer Science</button>
                                <button class="dropdown-item" type="button" @click="filterByField('Psychology')">Psychology</button>
                                <button class="dropdown-item" type="button" @click="filterByField('Teaching')">Teaching</button>
                                <button class="dropdown-item" type="button" @click="filterByField('Doctor')">Doctor</button>
                            </div>
                        </div>
                        <div class="dropdown explore-dropdown">
                            <button class="btn btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Location
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button class="dropdown-item" type="button" @click="filterByDistance(50)">50 Miles</button>
                                <button class="dropdown-item" type="button" @click="filterByDistance(100)">100 Miles</button>
                                <button class="dropdown-item" type="button" @click="filterByDistance(200)">200 miles</button>
                            </div>
                        </div>
                        <div class="dropdown explore-dropdown">
                            <button class="btn btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Education
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button class="dropdown-item" type="button" @click="filterByEduction('High School')">High School</button>
                                <button class="dropdown-item" type="button" @click="filterByEduction('Bachelors')">Bachelor's Degree</button>
                                <button class="dropdown-item" type="button" @click="filterByEduction('Masters')">Masters/PhD</button>
                            </div>
                        </div>
                        <div class="dropdown explore-dropdown">
                            <button class="btn btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Experience
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button class="dropdown-item" type="button" @click="filterByExperience('0-1')">0-1 Years</button>
                                <button class="dropdown-item" type="button" @click="filterByExperience('2-3')">2-3 Years</button>
                                <button class="dropdown-item" type="button" @click="filterByExperience('3-5')">3-5 Years</button>
                            </div>
                        </div>
                    </div>

                    <div class="btn-group">
                        <div class="left-sort-btn">
                            <button type="button" class="btn btn-sm" @click="sortDemand">
                                Demand
                                <font-awesome-icon v-if="demandSort === 'UN'" icon="sort"/>
                                <font-awesome-icon v-else-if="demandSort === 'D'" icon="sort-down"/>
                                <font-awesome-icon v-else-if="demandSort === 'UP'" icon="sort-up"/>
                            </button>
                        </div>
                        <div class="sort-btn">
                            <button type="button" class="btn btn-sm" @click="sortIncome">
                                Income
                                <font-awesome-icon v-if="incomeSort === 'UN'" icon="sort"/>
                                <font-awesome-icon v-else-if="incomeSort === 'D'" icon="sort-down"/>
                                <font-awesome-icon v-else-if="incomeSort === 'UP'" icon="sort-up"/>
                            </button>
                        </div>
                        <div class="sort-btn">
                            <button type="button" class="btn btn-sm" @click="sortPopularity">
                                Popularity
                                <font-awesome-icon v-if="popularitySort === 'UN'" icon="sort"/>
                                <font-awesome-icon v-else-if="popularitySort === 'D'" icon="sort-down"/>
                                <font-awesome-icon v-else-if="popularitySort === 'UP'" icon="sort-up"/>
                            </button>
                        </div>
                        <div class="sort-btn">
                            <button type="button" class="btn btn-sm" @click="sortExperience">
                                Experience
                                <font-awesome-icon v-if="experienceSort === 'UN'" icon="sort"/>
                                <font-awesome-icon v-else-if="experienceSort === 'D'" icon="sort-down"/>
                                <font-awesome-icon v-else-if="experienceSort === 'UP'" icon="sort-up"/>
                            </button>
                        </div>
                    </div>
                    <div class="slider-container">
                        <br>
                        <div>Salary</div>
                        <label for="customRange1" class="min-label">0</label>
                        <input @change="rangeFilter" type="range" class="custom-range salary-slider" id="customRange1" :min="0" :max="200000" :value="range"/>
                        <label for="customRange1" class="max-label">200,000</label>
                        <div>Max Salary: {{range}}</div>
                    </div>
                    <div class="clearFilters" @click="clearFilters">
                        Clear Filters
                    </div>
                        </b-card>
                    </b-collapse>
                
                </b-card>
                <div class="explore-career-container">
                    <CareerCard v-for="career in currentCareers" :key="career.career" :career="career.career"
                                :description="career.description" :salary="career.salary" :education="career.education" :experience="career.experience"/>
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
    import CareerCard from "../assets/CareerCard";
    import {mapGetters} from "vuex";
    import {faSearch, faFilter}  from '@fortawesome/free-solid-svg-icons'

    export default {
        name: "Explore",
        components: {CareerCard},
        data() {
            return {
                rows: "100",
                perPage: "10",
                currentPage: 1,
                range: 60000,
                currentCareers: [],
                allCareers: [],
                demandSort: "UN",
                incomeSort: "UN",
                popularitySort: "UN",
                experienceSort: "UN"
            }
        },
        methods: {
            rangeFilter(event) {
                this.range = event.target.value;
                this.currentCareers = this.allCareers.filter((career) => {
                    let careerSalary = parseInt(career.salary, 10);
                    return careerSalary <= event.target.value;
                })
            },
            sortExperience() {
                this.demandSort = "UN";
                this.incomeSort = "UN";
                this.popularitySort = "UN";
                if(this.experienceSort === 'UN' || this.experienceSort ==='D') {
                    this.experienceSort = "UP";
                    this.currentCareers.sort((a, b) => {
                        return parseInt(a.experienceSort, 10) - parseInt(b.experienceSort, 10)
                    })
                } else {
                    this.experienceSort = "D";
                    this.currentCareers.sort((a, b) => {
                        return parseInt(b.experienceSort, 10) - parseInt(a.experienceSort, 10)
                    })
                }
            },
            sortIncome() {
                this.demandSort = "UN";
                this.popularitySort = "UN";
                this.experienceSort = "UN";
                if(this.incomeSort === 'UN' || this.incomeSort ==='D') {
                    this.incomeSort = "UP";
                    this.currentCareers.sort((a, b) => {
                        return parseInt(a.salary, 10) - parseInt(b.salary, 10)
                    })
                } else {
                    this.currentCareers.sort((a, b) => {
                        return parseInt(b.salary, 10) - parseInt(a.salary, 10)
                    });
                    this.incomeSort = "D"
                }
            },
            sortDemand() {
                this.incomeSort = "UN";
                this.popularitySort = "UN";
                this.experienceSort = "UN";
                if(this.demandSort === 'UN' || this.demandSort ==='D') {
                    this.demandSort = "UP";
                    this.currentCareers.sort((a, b) => {
                        return parseInt(b.demand, 10) - parseInt(a.demand, 10)
                    });
                } else {
                    this.demandSort = "D";
                    this.currentCareers.sort((a, b) => {
                        return parseInt(a.demand, 10) - parseInt(b.demand, 10)
                    });
                }
            },
            sortPopularity() {
                this.demandSort = "UN";
                this.incomeSort = "UN";
                this.experienceSort = "UN";
                if(this.popularitySort === 'UN' || this.popularitySort ==='D') {
                    this.popularitySort = "UP"
                    this.currentCareers.sort((a, b) => {
                        return parseInt(b.popularity, 10) - parseInt(a.popularity, 10)
                    })
                } else {
                    this.popularitySort = "D"
                    this.currentCareers.sort((a, b) => {
                        return parseInt(a.popularity, 10) - parseInt(b.popularity, 10)
                    })
                }
            },
            updateKeyword(event) {
                let query = event.target.value.toLowerCase();
                this.currentCareers = this.allCareers.filter((career) => {
                    let careerName = career.career.toLocaleLowerCase();
                    return careerName.includes(query)
                });
            },
            filterByField(string) {
                let query = string.toLowerCase();
                this.currentCareers = this.currentCareers.filter((career) => {
                    let careerField = career.field.toLowerCase();
                    return careerField.includes(query)
                })
            },
            filterByDistance(num) {
                this.currentCareers = this.currentCareers.filter((career) => {
                    return career.proximity <= num
                })
            },
            filterByEduction(string) {
                let query = string.toLowerCase();
                this.currentCareers = this.currentCareers.filter((career) => {
                    let careerField = career.education.toLowerCase();
                    return careerField.includes(query)
                })
            },
            filterByExperience(string) {
                let query = string.toLowerCase();
                this.currentCareers = this.currentCareers.filter((career) => {
                    let careerField = career.experience.toLowerCase();
                    return careerField.includes(query)
                })
            },
            clearFilters() {
                this.currentCareers = this.allCareers
            },
        },
        computed:{
            ...mapGetters([
                'getAllCareers'
            ]),
            filterIcon(){
                return faFilter
            },
            searchIcon(){
                return faSearch
            }
        },
        mounted(){
            this.currentCareers = this.getAllCareers();
            this.allCareers = this.getAllCareers();

        }

    }
</script>

<style scoped>
    .shadow{
        box-shadow: 4px 4px 4px 4px darkgrey;
    }
    .explore {
        text-align: center;
    }

    .background-explore {
        background-color: whitesmoke;
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
        margin-left: 10%;
        margin-top: 1%;
        border: 2px solid darkgrey;
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
        text-align: center;
    }
    .slider-container {
        width: 80%;
        margin-left:10%;
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
        margin-top: 3%;
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
    .search-icon{
        font-size:26px;
        position:relative;
        color: whitesmoke;
    }
    .search-icon-div{
        width:65px;
        height:38px;
        position:relative;
        flex:1;
        top:7px;
        right:65px;
        background-color: dodgerblue;
    }
    .filter-icon{

        font-size:26px;
        color: dodgerblue;
    }
    .filter-icon-div{
        position:relative;
        right:40px;
        top: 8px;
        cursor: pointer;
    }
 </style>
