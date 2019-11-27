
<template>
    <div>
        <h1>Home</h1>
        <h4> Hello, {{user.firstName}} </h4>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        name: "Home",
        data(){
            return {
                 user: {}
            }
        },
        computed:{
            ...mapGetters([
            'getUserWithUsername'
            ])
        },
        mounted(){
            this.user = this.getUserWithUsername(this.$route.params.name)[0]
            console.log(this.user)
        }
        
    }
</script>

<style scoped>

</style>
