<template>
    <div class="topnav">
        <a class="active" href="/">{{comp1}}</a>
        <a href="#news">Example 1</a>
        <a href="#contact">Example 2</a>
        <a href="#about">Example 3</a>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        props: {
            comp1: String
        }
    }
</script>

<style scoped>
    /* Add a black background color to the top navigation */
    .topnav {
        background-color: cornflowerblue;
        overflow: hidden;
    }

    /* Style the links inside the navigation bar */
    .topnav a {
        float: left;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
    }

    /* Change the color of links on hover */
    .topnav a:hover {
        background-color: #ddd;
        color: blue;
    }

    /* Add a color to the active/current link */
    .topnav a.active {
        color: white;
    }
    .topnav a.active:hover {
        color: blue;
    }
</style>
