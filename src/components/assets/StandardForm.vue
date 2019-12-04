<template>
    <div class="form-check-inline input-box">
        <div class="form-heading">
            {{heading}} <span class="required-class" v-if="required"> * </span>
        </div>
        <div class="form-field">
            <input class="form-control" @change="parentMethod" :type="type" :placeholder="placeHolder" :value="val"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StandardForm",
        props: {
            heading: String,
            placeHolder: String,
            type: String,
            val: String,
            required: Boolean,
            parentMethod: {type: Function}
        },
        data() {
            return {
                inputValue: "Alice",
            };
        },
    }
</script>

<style scoped>
    .input-box {
        width: 60%;
        margin-top: 1%;
    }
    .form-heading {
        color: dodgerblue;
        margin-right: 2%;
        width: 20%;
    }
    .form-field {
        width: 80%;
    }
    .required-class{
        font-size:16px;
        color: red;
    }
</style>
