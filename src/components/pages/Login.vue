<template>
    <b-container>
        <div class="shadow">
            <b-card>
                <template v-slot:header>
                    <h1>L<span style="font-size:26px;font-weight:bold;">OGIN</span>
                    </h1>
                </template>
                <br>
                <div class="login-container">
                    <div>
                        <b-alert show variant="danger" v-if="wrongPassword">
                            You've entered a wrong username or password. Please retry with the right crendentials!
                        </b-alert>
                        <b-alert show variant="danger" v-if="wrongUsername">
                            Username does not exist. Please create an account before logging in!
                        </b-alert>
                        <div @keydown="clearError()">
                            <StandardForm heading="Username" type="email" placeHolder="username" :val="username"
                                :parentMethod="changeUsername" />
                            <StandardForm heading="Password" type="password" placeHolder="password" :val="password"
                                :parentMethod="changePass" />
                        </div>
                    </div>
                    <br><br>
                    <div class="login-button">
                        <button id="login-button" class="btn btn-lg btn-primary" @click="loginUser()" type="button">
                            Login
                        </button>
                        <div class="login-redirect">Don't have an account yet? <router-link to="/register" class="router-link">Register here</router-link></div>
                    </div>
                </div>
            </b-card>
        </div>
    </b-container>
</template>

<script>
    import StandardForm from "../assets/StandardForm";
    import {
        mapGetters,
        mapActions
    } from 'vuex';
    export default {
        name: "Login",
        components: {
            StandardForm
        },
        data() {
            return {
                username: "",
                password: "",
                wrongUsername: false,
                wrongPassword: false,
                user: {}
            }
        },
        computed: {
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
            loginUser() {
                this.user = this.getUserWithUsername(this.username)[0]
                if (this.user != undefined) {
                    if (this.user.password === this.password) {
                        this.setLogInUser(this.user)
                        this.$router.push({
                            path: '/home/' + this.user.username
                        })
                    } else
                        this.wrongPassword = true
                } else
                    this.wrongUsername = true
            },
            clearError() {
                this.wrongPassword = false;
                this.wrongUsername = false;
            }
        }
    }
</script>

<style scoped>
    .shadow {
        box-shadow: 4px 4px 4px 4px darkgrey;
    }

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
    .login-redirect{
        margin: 10px;
        font-size: 14px;
    }
    .btn{
        width: 30%;
    }
</style>