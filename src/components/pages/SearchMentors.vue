<template>
    <div>
        <h1>Mentors</h1>
        <div class="search-mentor-box outlineBox">
            <div class="form-inline">
                <input class="form-control search-mentor-bar" placeholder="Search by mentors name or profession"/>
                <button class="btn search-button">search</button>
            </div>
            <div class="form-inline search-mentor-dropdown-container">
                <div class="dropdown">
                    <button class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Field
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button class="dropdown-item" type="button">Computer Science</button>
                        <button class="dropdown-item" type="button">Psychology</button>
                        <button class="dropdown-item" type="button">Teaching</button>
                    </div>
                </div>
                <div class="dropdown search-mentor-dropdown">
                    <button class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Location
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button class="dropdown-item" type="button">50 Miles</button>
                        <button class="dropdown-item" type="button">100 Miles</button>
                        <button class="dropdown-item" type="button">200 miles</button>
                    </div>
                </div>
                <div class="dropdown search-mentor-dropdown">
                    <button class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Education
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button class="dropdown-item" type="button">High School</button>
                        <button class="dropdown-item" type="button">Bachelor's Degree</button>
                        <button class="dropdown-item" type="button">Masters/PhD</button>
                    </div>
                </div>
                <div class="dropdown search-mentor-dropdown">
                    <button class="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Experience
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button class="dropdown-item" type="button">0-1 Years</button>
                        <button class="dropdown-item" type="button">1-3 Years</button>
                        <button class="dropdown-item" type="button">3-5 Years</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="mentor-card-container">
            <MentorCard name="Dr. Mind Reader" description="La De Dah" location="MA" yearsOfExperience="5" workplace="NU"/>
            <MentorCard name="Dr. Magneto" description="La De Dah" location="MA" yearsOfExperience="5" workplace="NU"/>
            <MentorCard name="Dr. Doolittle" description="La De Dah" location="MA" yearsOfExperience="5" workplace="NU"/>
            <MentorCard name="Dr. Psych" description="La De Dah" location="MA" yearsOfExperience="5" workplace="NU"/>

        </div>
    </div>
</template>

<script>
    import MentorCard from "../assets/MentorCard";
    export default {
        name: "SearchMentors",
        components: {MentorCard}
    }
</script>

<style scoped>
    .search-mentor-box {
        width: 80%;
        margin-left: 10%;
    }

    .search-mentor-bar {
        width: 73%;
        margin-left: 10%;
        margin-top: 1%;
    }

    .search-button {
        margin-top: 1%;
        width: 7%;
        background-color: lightblue;
        color: dodgerblue;
        outline-color: lightblue;
    }

    .search-button:hover {
        background-color: cornflowerblue;
        color: white;
    }
    .search-mentor-dropdown-container {
        margin-left: 10%;
        margin-top: 2%;
    }

    .dropdown {
        width: 20%;
    }

    .search-mentor-dropdown {
        margin-left: 3%;
    }

    .dropdown-toggle {
        width: 100%;
        background-color: dodgerblue;
        color: white;
        margin-bottom: 5%;
    }

    .dropdown-toggle:hover {
        background-color: cornflowerblue;
    }

    .mentor-card-container {
        margin-left: 10%;
        width: 80%;
        text-align: center;
        margin-bottom: 3%;
    }

</style>
