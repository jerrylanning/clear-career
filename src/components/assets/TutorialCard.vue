<template>
    <div>
        <div class="card">
            <div class="card-image">
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/SC1XE85BC9o" frameborder="0" allowfullscreen></iframe>
                </div>

            </div><!-- card image -->

            <div class="card-content">
                <span class="card-title">Will my credits transfer?</span>

            </div><!-- card content -->
        </div>
    </div>
</template>

<script>
    export default {
        name: "TutorialCard"
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
