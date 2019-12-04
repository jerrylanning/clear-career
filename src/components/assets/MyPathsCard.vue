<template>
    <b-card>
            <h3>Your next five tasks.</h3>
            <b-form-checkbox class="check">lesson 1</b-form-checkbox>
            <b-form-checkbox class="check">lesson 2</b-form-checkbox>
            <b-form-checkbox class="check">lesson 3</b-form-checkbox>
            <b-form-checkbox class="check">lesson 4</b-form-checkbox>
            <b-form-checkbox class="check">lesson 5</b-form-checkbox>
    </b-card>
</template>

<script>
    export default {
        name: "MyPathsCard"
    }
</script>

<style scoped>

    .check{
        display: block;
    }

    h3{
        color: dodgerblue;
    }

</style>