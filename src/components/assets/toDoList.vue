<template>
    <div class="toDoList">
        <div v-if="checked === 'false'">
            <b-form-group label="Tasks to do">
                <b-form-checkbox
                        v-for="option in toDo"
                        v-model="selected"
                        v-on:change="alertMe"
                        :key="option.value"
                        :value="option.value"
                        name="flavour-3a"
                >
                    {{ option.text }}
                </b-form-checkbox>
            </b-form-group>
        </div>
        <div v-else-if="checked === 'true'">
            <b-form-group label="Tasks Done">
                <b-form-checkbox
                        v-for="option in toDo"
                        v-on:change="alertMe"
                        v-model="option.value"
                        :key="option.value"
                        :value="option.value"
                        name="flavour-3a"
                >
                    {{ option.text }}
                </b-form-checkbox>
            </b-form-group>
        </div>
    </div>
</template>

<script>
    export default {
        name: "toDoList",
        props: {
            toDo: String,
            checked: Boolean
        },
        data() {
            return {
                selected: [],
            }
        },
        methods: {
            alertMe: function() {
                alert("Hello World!")
            }
        }
    }
</script>

<style scoped>
    .toDoList {
        margin-top: 5%;
    }
</style>
