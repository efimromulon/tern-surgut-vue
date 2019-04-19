<template>
    <div class="report-wrapper">
        <reports-favorite :report="report" class="report-fav"/>
        <p class="report-name" @click="handleClick"> {{ report.name }}</p>
        <p class="report-time" v-if="report.time"> {{ report.time }} </p>
    </div>
</template>

<script>
import ReportsFavorite from './_reports-favorite'
    export default {
        props: ['report'],
        components: {
            ReportsFavorite
        },
        methods: {
            handleClick() {
                this.$store.dispatch('changeCurrentReport',this.report);
            }
        }
    }
</script>

<style scoped lang="sass">
.report-wrapper
    display: flex
    margin: 2vh
.report-name
    flex: 8
    font-size: .9em
    padding-top: .1em
    text-decoration: none
.report-name:hover
    text-decoration: underline
    cursor: pointer
.report-fav
    flex: 1
.report-time
    font-size: .8em
    background-color: white
    color: #6200ee
    padding-top: .2em
</style>