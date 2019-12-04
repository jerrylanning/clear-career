<template>
    <b-card no-body class="article overflow-hidden" style="max-width: 540px;">
        <template class="header-slot" v-slot:header>
            <h6 class="mb-0" style="flex:auto">{{title}}</h6>
            <div class="item-link"><a v-if="link" :href="link" v-b-tooltip.hover title="Goto link"><font-awesome-icon  class="fa-item" :icon="linkIcon" /></a></div>
        </template>
        <b-row no-gutters>
            <b-col md="6">
                <b-card-img :src="img" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
                <b-card-body >
                    <b-card-text>
                        {{summary}}
                    </b-card-text>
                </b-card-body>
            </b-col>
        </b-row>
    </b-card>
</template>

<script>

    import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
    export default {
        name: "ArticleCard",
        props: {
            title: String,
            img: String,
            summary: String,
            description: String,
            link: String
        },
        computed: {
            linkIcon(){
                return faExternalLinkAlt;
            }
        }
    }
</script>

<style scoped>
    .article {
        margin-top: 2%;
    }

    .card-header{
        background-color: #fcfcfc;
        display:flex;
    }
    .item-link {
        float:right; 
        flex:auto;
        width:32px;
        margin-top:-2px;
    }

</style>
