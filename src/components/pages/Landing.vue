
<template>
    <div>
        <div class="splash">
            <img src="https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" class="image-class">
            <h1>ClearCareer<br>Reach new heights!</h1>
            <div class="bottom_buttons">
                <div class="card-block"> 
                    <div class="card" @click="gotoExplore">Explore</div>
                    <div class="card" @click="gotoLogin">Log In</div>
                    <div class="card" @click="gotoSignup">Register</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Landing",
        methods :{
            gotoExplore(){
                this.$router.push({ path: '/explore'})
            },
            gotoLogin(){
                this.$router.push({ path: '/login'})
            },
            gotoSignup(){
                this.$router.push({ path: '/register'})
            }
        }
    }
</script>

<style scoped>
    .splash{
        width: 100%;
        text-align: center;
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
        top: 67%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .btn-primary{
        margin: 30px;
    }
    .image-class{
        opacity: 0.7;
        width: 102%;
        margin-left: -15px;
        margin-top: -35px;
        height: 90vh;
    }
    .card{
        color: whitesmoke;
        font-size: 24px;
        font-weight:bold;
        text-align: center;
        line-height: 4;
        background-color: royalblue;
        width: 200px;
        height:100px;
        margin: 5px;
        flex:1;
        -webkit-transition: margin-top 1s, height 1s, width 1s; /* For Safari 3.1 to 6.0 */
        transition: margin-top 1s, height 1s, width 1s;
        cursor: pointer;

    }
    .card-block{
        display: flex;
    }

    .card:hover{
        background-color: whitesmoke;
        color: dodgerblue;
        width: 210px;
        height:110px;
        margin-top: -3px;
        box-shadow: 2px 2px 2px 2px darkgrey;
    }
</style>
