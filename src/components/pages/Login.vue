<template>
    <div class="login-container">
        <h1 class="heading"> Login </h1>
        <div>
            <StandardForm
                    heading="Username"
                    type="email"
                    placeHolder="username"
                    :val="username"
                    :parentMethod="changeUsername"/>
            <StandardForm
                    heading="Password"
                    type="password"
                    placeHolder="password"
                    :val="password"
                    :parentMethod="changePass"/>
        </div>
        <div class="login-button">
            <button id="login-button"
                    class="btn btn-lg btn-primary"
                    type="button">
                Login
            </button>
        </div>
    </div>
</template>

<script>
    import StandardForm from "../assets/StandardForm";

    export default {
        name: "Login",
        components: {StandardForm},
        data() {
            return {
                username: "",
                password: ""
            }
        },
        methods: {
            changeUsername(event) {
                this.username = event.target.value;
            },
            changePass(event) {
                this.password = event.target.value;
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
