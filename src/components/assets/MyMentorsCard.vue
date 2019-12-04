<template>
    <b-container>
        <div class="mentor-card">
            <b-card class="mt-3" >
                <b-card-text>
                    <h2>Dr. Mind Reader</h2>
                    <hr>
                </b-card-text>
                    <b-card no-body class="overflow-hidden" style="max-height: 100px">
                        <b-row no-gutters>
                            <b-col md="2">
                                <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
                            </b-col>
                            <b-col>
                                <b-card-body title="Horizontal Card">
                                    <b-card-text>
                                        This is a wider card with supporting text as a natural lead-in to additional content.
                                        This content is a little bit longer.
                                    </b-card-text>
                                </b-card-body>
                            </b-col>
                        </b-row>
                    </b-card>

            </b-card>
        </div>
    </b-container>
</template>

<script>
    export default {
        name: "MyMentorsCard"
    }
</script>

<style scoped>
    h2{
        color: dodgerblue;
    }

    .mentor{
        text-align: left;
    }

    .mentor-card{
        text-align: left;
    }

</style>
