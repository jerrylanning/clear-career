<template>
    <b-container>
        <b-card class="shadow">
            <template v-slot:header>
                    <h1>M<span style="font-size:26px;font-weight:bold;">Y</span> I<span style="font-size:26px;font-weight:bold;">NFORMATION</span>
                    </h1>
            </template>
            <br>
            <b-alert variant="success" :show="saveSuccess" dismissible>Changes saved successfully</b-alert>
            <b-card-text>
                
                <StandardForm heading="Username" type="email" placeHolder="aliceWonder" :val="username" :parentMethod="changeUsername"/>
                <StandardForm heading="Password" type="password" placeHolder="Password" :val="password" :parentMethod="changePass"/>
                <StandardForm heading="First Name" type="email" placeHolder="Alice" :val="firstName" :parentMethod="changeFirst"/>
                <StandardForm heading="Last Name" type="email" placeHolder="Wonderland" :val="lastName" :parentMethod="changeLast"/>
                <StandardForm heading="Email" type="email" placeHolder="alice@wonderland.com" :val="email" :parentMethod="changeEmail"/>
                <StandardForm heading="City" type="email" placeHolder="Boston" :val="city" :parentMethod="changeCity"/>
                <StandardForm heading="Career Interest" type="email" placeHolder="Psychology" :val="career" :parentMethod="changeCareer"/>
            </b-card-text>
            <br><br>
            <div class="btn-group-lg">
                <button class="btn btn-primary save" @click="updateInformation">Save</button>
                <button class="btn btn-primary cancel" @click="redirectToHome">Cancel</button>
            </div>
            <br>
        </b-card>
    </b-container>
</template>

<script>
    import StandardForm from "../assets/StandardForm";
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: "Profile",
        components: {StandardForm},
        data() {
            return {
                username: "",
                password: "",
                firstName: "",
                lastName: "",
                email: "",
                city: "",
                career: "",
                loggedInUser:{},
                saveSuccess: false
            }
        },
        computed:{
            ...mapGetters([
            'getUserWithUsername'
            ])
        },
        methods: {
             ...mapActions([
                'editUserContent'
            ]),
            changeUsername(event) {
                this.username = event.target.value;
            },
            changePass(event) {
                this.password = event.target.value;
            },
            changeFirst(event) {
                this.firstName = event.target.value;
            },
            changeLast(event) {
                this.lastName = event.target.value;
            },
            changeEmail(event) {
                this.email = event.target.value;
            },
            changeCity(event) {
                this.city = event.target.value;
            },
            changeCareer(event) {
                this.career = event.target.value;
            },
            updateInformation(){

                this.loggedInUser.username = this.username;
                this.loggedInUser.password = this.password;
                this.loggedInUser.firstName = this.firstName;
                this.loggedInUser.lastName = this.lastName;
                this.loggedInUser.email = this.email;
                this.loggedInUser.city = this.city;
                this.loggedInUser.careerInterest = this.career;
                this.editUserContent(this.loggedInUser);
                this.saveSuccess = true;
            },
            redirectToHome(){
                console.log("hello there")
                this.$router.push({path: '/home/'+this.loggedInUser.username})
            }
        },
        mounted(){
            this.loggedInUser = this.getUserWithUsername(this.$route.params.name)[0]
            this.username = this.loggedInUser.username;
            this.password = this.loggedInUser.password;
            this.firstName = this.loggedInUser.firstName;
            this.lastName= this.loggedInUser.lastName;
            this.email = this.loggedInUser.email;
            this.city = this.loggedInUser.city;
            this.career = this.loggedInUser.careerInterest;
        }
    }
</script>

<style scoped>
    .shadow {
        box-shadow: 4px 4px 4px 4px darkgrey;
    }
    .btn-group-lg {
        margin-top: 2%;
    }
    .cancel {
        margin-left: 1%;
        background-color: white;
        color: dodgerblue;
    }
    .cancel:hover {
        background-color: lightgrey;
    }
    .heading {
        color: dodgerblue;
        text-align: center;
    }
    .save {
        width: 20%;
    }
    .cancel{
        width: 20%;
    }
</style>
