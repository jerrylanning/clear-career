<template>
    <b-container>
        <div class="mentor-card">
            <b-card class="mt-3" >
                <b-card-text>
                    <h5>{{name}}</h5>
                    <hr>
                </b-card-text>
                    <b-card no-body class="overflow-hidden" style="max-height: 100px">
                        <b-row no-gutters>
                            <b-col md="2">
                                <b-card-img :src="profilePicture" class="rounded-0"></b-card-img>
                            </b-col>
                            <b-col>
                                <b-card-body>
                                    <b-card-text>
                                        {{bio}}
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
        name: "MyMentorsCard",
        props: {
            name: String,
            bio: String,
            profilePicture: String
        }
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
