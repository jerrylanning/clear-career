<template>
    <b-card no-body class="article overflow-hidden" style="max-width: 540px;">
        <b-row no-gutters>
            <b-col md="6">
                <b-card-img :src="img" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
                <b-card-body :title="title">
                    <b-card-text>
                        {{summary}}
                    </b-card-text>
                </b-card-body>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>
    export default {
        name: "ArticleCard",
        props: {
            title: String,
            img: String,
            summary: String,
            description: String
        }
    }
</script>

<style scoped>
    .article {
        margin-top: 2%;
    }

</style>
