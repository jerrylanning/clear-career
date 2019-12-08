<template>
    <div class="graph">
        <graph-line
                :width="450"
                :height="300"
                :shape="'normal'"
                :axis-min="0"
                :axis-max="90000"
                :axis-full-mode="true"
                :labels="[ '1980', '1990', '2000', '2010', '2020' ]"
                :names="names"
                :colors="['dodgerblue']"
                :values="values">
            <note :text="careerName+ ' Annual Average Salary by Year'"></note>
        </graph-line>
    </div>
</template>

<script>
    export default {
        name: "SalaryPerYearChart",
        props: {
            careerName: String
        },
        data: function () {
            return {
                values: [
                    [65387, 68456, 72540, 75768, 81265]
                ]
            }
        }
    }
</script>

<style scoped>

    .graph{
        margin: 0px;
        display: inline-block;
        float: left;
    }

</style>