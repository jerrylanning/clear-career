<template>
<b-container>
  <div>
    <b-card>
    <div class="login-container">
        <h1 class="heading"> Login </h1>
        <div>
            <b-alert show variant="danger" v-if="wrongPassword">
                You've entered a wrong username or password. Please retry with the right crendentials!
            </b-alert>
            <b-alert show variant="danger" v-if="wrongUsername">
                Username does not exist. Please create an account before logging in!
            </b-alert>
            <div @keydown="clearError()">
            <StandardForm
                    heading="Username"
                    type="email"
                    placeHolder="username"
                    :val="username"
                    :parentMethod="changeUsername"
                    />
            <StandardForm
                    heading="Password"
                    type="password"
                    placeHolder="password"
                    :val="password"
                    :parentMethod="changePass"
                     />
            </div>
        </div>
        <div class="login-button">
            <button id="login-button"
                    class="btn btn-lg btn-primary"
                    @click="loginUser()"
                    type="button">
                Login
            </button>
        </div>
    </div>
    </b-card>
  </div>
</b-container>
</template>

<script>
    import StandardForm from "../assets/StandardForm";
    import { mapGetters, mapActions } from 'vuex';
    export default {
        name: "Login",
        components: {StandardForm},
        data() {
            return {
                username: "",
                password: "",
                wrongUsername: false,
                wrongPassword: false,
                user: {}
            }
        },
        computed:{
            ...mapGetters([
            'getUserWithUsername'
            ])
        },
        methods: {
            ...mapActions([
                'setLogInUser'
            ]),
            changeUsername(event) {
                this.username = event.target.value;
            },
            changePass(event) {
                this.password = event.target.value;
            },
            loginUser(){
                this.user = this.getUserWithUsername(this.username)[0]
                if(this.user != undefined){
                    if(this.user.password === this.password){
                        this.setLogInUser(this.user)
                        this.$router.push({ path: '/home/'+this.user.username})
                    }
                    else
                        this.wrongPassword = true
                }
                else
                    this.wrongUsername = true
            },
            clearError(){
                this.wrongPassword = false;
                this.wrongUsername = false;
            }
        }
    }

</script>

<style scoped>
    .login-container {
        width: 100%;
    }

    .heading {
        margin-top: 2%;
        margin-bottom: 2%;
    }

    #login-button {
        margin-top: 2%;
    }

</style>
