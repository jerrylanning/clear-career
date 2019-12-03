<template>
    <div>
        <div class="card">
            <div class="card-image">
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe width="560" height="315" :src="embedLink" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

            </div><!-- card image -->

            <div class="card-content">
                <span class="card-title">{{title}}</span>

            </div><!-- card content -->
        </div>
    </div>
</template>

<script>
    export default {
        name: "TutorialCard",
        props: {
            title: String,
            embedLink: String,
            author: String
        }
    }
</script>

<style scoped>
    .card .card-image{
        overflow: hidden;
        transform-style: preserve-3d;
    }


    .card{
        width: 100%;
        position: relative;
        margin-top: 2%;
    }

    .card .card-content {
        padding: 10px;
    }

    .card .card-content .card-title, .card-reveal .card-title{
        font-size: 20px;
        font-weight: 200;
    }

    .card .card-action a{
        font-size: 15px;
        color: #ffab40;
        text-transform:uppercase;
        margin-right: 20px;
        transition: color 0.3s ease;
    }
    .card .card-action a:hover{
        color:#ffd8a6;
        text-decoration:none;
    }

    .card .card-reveal p{
        color: rgba(0, 0, 0, 0.71);
        margin:20px ;
    }
</style>
