<template>
    <div class="small">
        <line-chart :chart-data="datacollection" :style="graphStyles"></line-chart>
    </div>
</template>

<script>
    import LineChart from './LineChart'

    export default {
        components: {
            LineChart
        },
        data () {
            return {
                datacollection: null
            }
        },
        mounted () {
            this.fillData()
        },
        methods: {
            fillData () {
                this.datacollection = {
                    labels: [this.getRandomInt(), this.getRandomInt()],
                    datasets: [
                        {
                            label: 'Data One',
                            backgroundColor: '#1e90ff',
                            data: [0,1, 2, 3]
                        }
                    ]
                }
            },
            getRandomInt () {
                return Math.floor(Math.random() * (50 - 5 + 1)) + 5
            }
        },
        computed: {
            graphStyles () {
                return {
                    height: '100%',
                    width:  '80%',
                    position: 'relative'
                }
            }
        }
    }
</script>

<style>
    .small {
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }
</style>
