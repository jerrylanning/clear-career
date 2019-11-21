<template>
    <div>
        <h1 class="heading">My Information</h1>
        <StandardForm heading="Username" type="email" placeHolder="aliceWonder" :val="username" :parentMethod="changeUsername"/>
        <StandardForm heading="Password" type="password" placeHolder="Password" :val="password" :parentMethod="changePass"/>
        <StandardForm heading="First Name" type="email" placeHolder="Alice" :val="firstName" :parentMethod="changeFirst"/>
        <StandardForm heading="Last Name" type="email" placeHolder="Wonderland" :val="lastName" :parentMethod="changeLast"/>
        <StandardForm heading="Email" type="email" placeHolder="alice@wonderland.com" :val="email" :parentMethod="changeEmail"/>
        <StandardForm heading="City" type="email" placeHolder="Boston" :val="city" :parentMethod="changeCity"/>
        <StandardForm heading="Career Interest" type="email" placeHolder="Psychology" :val="career" :parentMethod="changeCareer"/>
        <div class="btn-group-lg">
            <button class="btn btn-primary save">Save</button>
            <button class="btn btn-primary cancel">Cancel</button>
        </div>
    </div>
</template>

<script>
    import StandardForm from "./StandardForm";
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
                career: ""
            }
        },
        methods: {
            changeUsername(event) {
                this.username = event.target.value;
                window.console.log("Child Username: ", event.target.value)
            },
            changePass(event) {
                this.password = event.target.value;
                window.console.log("Child Password: ", event.target.value)
            },
            changeFirst(event) {
                this.firstName = event.target.value;
                window.console.log("Child First: ", event.target.value)
            },
            changeLast(event) {
                this.lastName = event.target.value;
                window.console.log("Child Last: ", event.target.value)
            },
            changeEmail(event) {
                this.email = event.target.value;
                window.console.log("Child Email: ", event.target.value)
            },
            changeCity(event) {
                this.city = event.target.value;
                window.console.log("Child City: ", event.target.value)
            },
            changeCareer(event) {
                this.career = event.target.value;
                window.console.log("Child career: ", event.target.value)
            }
        }
    }
</script>

<style scoped>
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
</style>
