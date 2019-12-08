<template>
<b-container>
  <div class="shadow">
    
    <b-card>
        <template v-slot:header>
            <h1>S<span style="font-size:26px;font-weight:bold;">IGN UP</span>
            </h1>
        </template>
        <b-alert variant="danger" :show="showError" dismissible>{{errorMsg}}</b-alert>
        <br>
        <span class="required-class"> * = required </span>
        <br>
        <b-card-text>
            <StandardForm heading="First Name" type="text" placeHolder="Jane" :val="user.firstName" :parentMethod="changeFirst" :required="'required'"/>
            <StandardForm heading="Last Name" type="text" placeHolder="Doe" :val="user.lastName" :parentMethod="changeLast" />
            <StandardForm heading="Email" type="email" placeHolder="jdoe@wonderland.com" :val="user.email" :parentMethod="changeEmail" :required="'required'"/>
            <StandardForm heading="Password" type="password" placeHolder="*******" :val="user.password" :parentMethod="changePass" :required="'required'"/>
            <StandardForm heading="Username" type="text" placeHolder="jDoe" :val="user.username" :parentMethod="changeUsername" :required="'required'"/>
            <div style="margin-top:1%;">
                  <b-form-radio-group
                        id="btn-radios-2"
                        v-model="user.type"
                        :options="options"
                        buttons
                        button-variant="outline-primary"
                        name="radio-btn-outline"
                        
                    ></b-form-radio-group>
            </div>
        </b-card-text>
        <br>
        <div class="btn-group-lg">
            <button class="btn btn-primary save" @click="createAccount()">Create Account</button>
        </div>
        <div class="login-redirect">Already have an account? <router-link to="/login" class="router-link">Login here</router-link></div>
    </b-card>
  </div>
</b-container>
</template>

<script>
    import StandardForm from "../assets/StandardForm";
    import { mapActions } from 'vuex'
    export default {
        name: "Register",
        components: {StandardForm},
        data() {
            return {
                user: {
                    username: "",
                    password: "",
                    firstName: "",
                    lastName: "",
                    email: "",
                    paths: [],
                    mentors: [],
                    careerInterest: "",
                    city: "",
                    type: "",
                    title: "",
                    bio: "",
                    location: "",
                    yearsOfExperience: "",
                    workplace: "",
                    jobTitle: "",
                    education: ""
                },
                options: [
                    { text: 'Mentor', value: 'mentor'},
                    { text: 'Mentee', value: 'mentee'},
                ],
                            
                showError: false,
                errorMsg: "",
                required: "required",
            }
        },
        methods: {
            ...mapActions([
                'addUser',
                'setLogInUser',
                'addNewMentorProfile'
            ]),
            changeUsername(event) {
                this.user.username = event.target.value;
            },
            changePass(event) {
                this.user.password = event.target.value;
            },
            changeFirst(event) {
                this.user.firstName = event.target.value;
            },
            changeLast(event) {
                this.user.lastName = event.target.value;
            },
            changeEmail(event) {
                this.user.email = event.target.value;
            },
            createAccount(){
                let res= this.validate()
                if(res){
                    this.addUser(this.user)
                    
                    if(this.user.type==="mentor"){
                        let payload = {
                            username: this.user.username,
                            profilePicture: 'https://i0.wp.com/acaweb.org/wp-content/uploads/2018/12/profile-placeholder.png?fit=300%2C300&ssl=1',
                            bio: this.user.bio,
                            title: this.user.title,
                            career: this.user.career,
                            yoe: this.user.yearsOfExperience,
                            education: this.user.education,
                            articles: [],
                            videos: [],
                            tasks: []
                        }
                        this.addNewMentorProfile(payload)

                    }
                    this.setLogInUser(this.user)
                    this.$router.push({ path: '/home/'+this.user.username})
                }
            },
            validate(){
                if(this.user.username==null || this.user.username=="" || this.user.username== undefined){
                    this.showError = true
                    this.errorMsg = "Username cannot be empty"
                    return false;
                }else if(this.user.password==null || this.user.password=="" || this.user.password== undefined){
                    this.showError = true
                    this.errorMsg = "Password cannot be empty"
                    return false;
                }else if(this.user.email==null || this.user.email=="" || this.user.email== undefined){
                    this.showError = true
                    this.errorMsg = "Email cannot be empty"
                    return false;
                }else if(this.user.firstName==null || this.user.firstName=="" || this.user.firstName== undefined){
                    this.showError = true
                    this.errorMsg = "First Name cannot be empty"
                    return false;
                }else{
                    return true;
                }

            }
        }
    }
</script>

<style scoped>
    .shadow{
        box-shadow: 4px 4px 4px 4px darkgrey;
    }
    .heading{
        color: dodgerblue;
        font-size: 32px;
    }
    .btn-group-lg {
        margin-top: 2%;
    }
    .login-redirect{
        margin: 10px;
        font-size: 14px;
    }
    .btn{
        width: 30%;
    }
    .label {
        padding-top:1%;
        color:dodgerblue;
    }
    .required-class{
        font-size:16px;
        float:right;
        color:red;
    }
</style>
