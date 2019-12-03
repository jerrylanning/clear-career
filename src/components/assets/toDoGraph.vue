<template>
    <div class="graph">
        <graph-line
                :width="600"
                :height="400"
                :shape="'normal'"
                :axis-min="0"
                :axis-max="50"
                :axis-full-mode="true"
                :labels="[ '1Q', '2Q', '3Q', '4Q' ]"
                :names="names"
                :colors="['cornflowerBlue']"
                :values="values">
            <note :text="'Line Chart'"></note>
        </graph-line>
    </div>
</template>

<script>
    export default {
        name: "toDoGraph",
        data: function () {
            return {
                values: [
                    [10, 5, 5, 5]
                ]
            }
        }
    }
</script>

<style scoped>
    .graph {
    }
</style>
