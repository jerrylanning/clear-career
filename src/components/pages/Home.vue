
<template>
    <div>
        <h1>Home</h1>
        <h4> Hello, {{user.firstName}} </h4>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data(){
            return {
                 user: {
                    username: "",
                    password: "",
                    firstName: "",
                    lastName: "",
                    email: "",
                }
            }
        }
        
    }
</script>

<style scoped>

</style>
