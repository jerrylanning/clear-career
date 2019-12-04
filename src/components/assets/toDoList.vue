<template>
    <div class="toDoList">
        <div v-if="checked === false">
            <h5>Tasks To Do</h5>
            <b-list-group>
                <b-list-group-item class="task" v-for="option in toDo" :key="option" @click="completeTask(option)">{{option}}</b-list-group-item>
            </b-list-group>
        </div>
        <div v-else-if="checked === true">
            <h5>Tasks Done</h5>
            <b-list-group>
                <b-list-group-item class="task" v-for="option in toDo" :key="option" active="true" @click="incompleteTask(option)">{{option}}</b-list-group-item>
            </b-list-group>
        </div>
    </div>
</template>

<script>
    export default {
        name: "toDoList",
        props: {
            toDo: Array,
            checked: Boolean,
            completeTask: {type: Function },
            incompleteTask: {type: Function }
        },
        data() {
            return {
                selected: [],
            }
        },
        methods: {
            alertMe: function() {
            }
        }
    }
</script>

<style scoped>
    .toDoList {
        margin-top: 5%;
    }
    .task {
        margin-top: 2%;
    }
</style>
