<template>
    <div>
        <graph-bar
                :width="600"
                :height="400"
                :axis-min="0"
                :axis-max="3100000"
                :labels="[ '1980', '1990', '2000', '2010', '2020' ]"
                :values="values"
                :colors="['dodgerblue']"></graph-bar>
    </div>
</template>

<script>
    export default {
        name: "JobsPerYearChart",
        data: function() {
            return{
            values: [
                [ 2006345,
                    2840600,
                    2980478,
                    3001678,
                    3059374 ]
            ]}
        }
    }
</script>

<style scoped>

</style>