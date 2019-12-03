<template>
<b-container>
  <div>
    <b-card>
        <h1>Sign Up</h1>
        <br>
        <b-card-text>
            <StandardForm heading="First Name" type="text" placeHolder="Jane" :val="user.firstName" :parentMethod="changeFirst"/>
            <StandardForm heading="Last Name" type="text" placeHolder="Doe" :val="user.lastName" :parentMethod="changeLast"/>
            <StandardForm heading="Email" type="email" placeHolder="jdoe@wonderland.com" :val="user.email" :parentMethod="changeEmail"/>
            <StandardForm heading="Password" type="password" placeHolder="*******" :val="user.password" :parentMethod="changePass"/>
            <StandardForm heading="Username" type="text" placeHolder="jDoe" :val="user.username" :parentMethod="changeUsername"/>
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
                    type: "mentee"
                },
                options: [
                    { text: 'Mentor', value: 'mentor'},
                    { text: 'Mentee', value: 'mentee'},
                ]
            }
        },
        methods: {
            ...mapActions([
                'addUser',
                'setLogInUser'
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
                console.log("First Name: ", this.user.firstName);
                console.log("Last Name: ", this.user.lastName);
                console.log("Username: ", this.user.username!="");
                console.log("Email: ", this.user.email);
                if(this.user.username!=null && this.user.username!="" && this.user.username!= undefined){
                    this.addUser(this.user)
                    this.setLogInUser(this.user)
                    this.$router.push({ path: '/home/'+this.user.username})
                }
            }
        }
    }
</script>

<style scoped>
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
        width: 40%;
    }
    .label {
        padding-top:1%;
        color:dodgerblue;
    }
</style>
