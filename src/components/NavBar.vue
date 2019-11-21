<template>
    <div class="topnav">
        <a class="active" href="/">{{comp1}}</a>
        <a href="#news">Example 1</a>
        <a href="#contact">Example 2</a>
        <a href="#about">Example 3</a>
        <!--This is an example of bootstrap. In the class name of this button we add 'btn' which specifies this is
        a bootstrap button, and we add a second class called btn-primary to add the blue styling so we don't have to
        do this manually-->
        <button class="btn btn-primary">Bootstrap</button>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        // Props are handed down from a parent element.
        props: {
            comp1: String
        }
    }
</script>

<style scoped>
    /* Add a blue background color to the top navigation while fixing it*/
    .topnav {
        background-color: cornflowerblue;
        top: 0;
        z-index: 100;
        position: fixed;
        width: 100%;
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
