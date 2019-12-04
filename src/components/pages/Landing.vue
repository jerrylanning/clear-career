
<template>
    <div>
        <div class="splash">
            <img src="https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260">
            <h1>Clear Career<br>Reach new heights!</h1>
            <div class="bottom_buttons">
                <router-link to="/login" tag="button" class="btn btn-primary">Login</router-link>
                <router-link to="/register" tag="button" class="btn btn-primary">Sign Up</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Landing"
    }
</script>

<style scoped>
    .splash{
        width: 100%;
        text-align: center;
    }
    .splash img{
        height: auto%;
        width: 100%;
    }

    h1{
        position: absolute;
        color: dodgerblue;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .bottom_buttons{
        position: absolute;
        top: 90%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .btn-primary{
        margin: 30px;
    }
</style>
