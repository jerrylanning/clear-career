<template>
    <div>
        <graph-bar class="graph"
                :width="450"
                :height="300"
                :axis-min="0"
                :axis-max="3300000"
                :labels="[ '1980', '1990', '2000', '2010', '2020' ]"
                :values="values"
                :colors="['dodgerblue']">
        <note :text="'Number of ' + careerName + ' jobs by year'"></note>
        </graph-bar>
    </div>
</template>

<script>
    export default {
        name: "JobsPerYearChart",
        props: {
          careerName: String
        },
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

    .graph{
        display: inline-block;
        float: left;
    }

</style>