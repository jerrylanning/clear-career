<template>
    <b-container fluid>
        <b-card>
        <template v-slot:header>
            <h1>C<span style="font-size:26px;font-weight:bold;">areer Page</span>
            </h1>
        </template>
        <br>
        <b-modal ref="error-modal" hide-footer title="Error! User Not Logged In">
            <div class="d-block text-center">
                <h5>Please Log In to add {{career.career}} to your path</h5>
            </div>
            <b-button class="mt-3" variant="outline-danger" block @click="hideModal">I Understand!</b-button>
        </b-modal>
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
                <button v-if="!containsCareer()" @click="addToMyPaths" class="btn btn-primary" style="background-color: green">Add to My Paths</button>
                <button v-else-if="containsCareer()" @click="removeFromMyPaths" class="btn btn-primary" style="background-color: red">Remove from My Paths</button>

            </div>
        </div>
        </b-card>



    </b-container>
</template>

<script>
    import CareerNameCard from "../assets/CareerNameCard";
    import CareerDescriptionCard from "../assets/CareerDescriptionCard";
    import JobsPerYearChart from "../assets/JobsPerYearChart";
    import SalaryPerYearChart from "../assets/SalaryPerYearChart";
    import CareerRequirementsCard from "../assets/CareerRequirementsCard";
    import TopMentorsCard from "../assets/TopMentorsCard";
    import {mapActions, mapGetters} from "vuex";
    export default {
        name: "CareerPage",
        components: {
            TopMentorsCard,
            CareerRequirementsCard, SalaryPerYearChart, JobsPerYearChart, CareerDescriptionCard, CareerNameCard
        },
        data() {
            return {
                career: {},
                userLoggedIn: false
            }
        },
        computed: {
            ...mapGetters([
                'getCareerByName',
                'loggedInUser'
            ])
        },
        methods: {
            ...mapActions([
                'addMyPath',
                'removeMyPath'

            ]),
            containsCareer() {
                if(this.loggedInUser.username) {
                    for (let i = 0; i < this.loggedInUser.paths.length; i++) {
                        console.log(this.loggedInUser.paths[i].career);
                        console.log(this.career.career);
                        if (this.loggedInUser.paths[i].career === this.career.career) {
                            console.log("HELO");
                            return true
                        }
                    }
                    return false
                } else {
                    return false;
                }

            },
            addToMyPaths(){
                if(!this.userLoggedIn){
                    this.showModal()
                }

                console.log("the user's paths are " + this.curUserPaths.toString())

                if(!this.followed) {
                    this.followed = true;
                    this.addMyPath({userName: this.loggedInUser.username, path: this.career.career})
                    alert("added")
                }
            },
            removeFromMyPaths(){
                if(!this.userLoggedIn){
                    this.showModal()
                }

                if(this.followed) {
                    this.followed = false;
                    this.removeMyPath({userName: this.loggedInUser.username, path: this.careerName})
                    alert("GONZO")
                }
            },
            showModal() {
                    this.$refs['error-modal'].show()
            },
            hideModal() {
                    this.$refs['error-modal'].hide()
            },
        },
        mounted() {
            if(this.loggedInUser.username!="" && this.loggedInUser.username!=null && this.loggedInUser.username!=undefined ){
                    this.userLoggedIn = true
            }
            this.career = this.getCareerByName(this.$route.params.name);
            if(this.loggedInUser.username) {
                this.curUserPaths = this.loggedInUser.paths;
                if (this.curUserPaths.length !== 0) {
                    this.followed = this.curUserPaths.includes(this.careerName)
                } else {
                    this.followed = false;
                }
            }
            console.log("my length of paths is " + this.curUserPaths.length)
            console.log("this is the answer: " + this.followed)
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
