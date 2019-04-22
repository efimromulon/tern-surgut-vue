<template>
    <div class="iframe-wrapper">
       <div class="iframe-controls">
           <div class="iframe-report-name">
               {{ currentReport.name }}
           </div>
           <div class="iframe-control-buttons">
                <reports-favorite :report="currentReport" />
                <icon-newtab @click.native="handleNewTabClick"/>
           </div>
       </div>
       <div class="iframe-container">
           <iframe class="iframe" :src="currentReport.cuid" frameBorder="0"></iframe>
       </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import ReportsFavorite from './_reports-favorite'


    export default {
        name: 'reports-iframe',
        components: {
            ReportsFavorite
        },
        computed: {
            ...mapState({ 
                currentReport: state => state.reports.currentReport
                }),
           
            
        },
        methods: {
            
            handleNewTabClick() {
                let url = this.currentReport.cuid
                window.open(url, '_blank');
                

            }
        }
    }
</script>

<style scoped lang="sass">
.iframe-controls
    width: 100%
    height: 5vh
    display: flex
    align-items: center
    justify-content: center
.iframe-wrapper
    height: 100%
    width: 100%
    display: flex
    align-items: center
    justify-content: flex-start
    flex-direction: column
.iframe-container
    height: 85vh
    width: calc(85vh * 1.7)
    background-color: #E3E3E3
    margin-bottom: 1vh
.iframe
    flex: auto
    width: 100%
    height: 100%
.iframe-report-name
    flex: 9
    text-align: left
    padding-left: 4vh
.iframe-control-buttons
    flex: 1
    display: flex
    align-items: center
    justify-content: center
    margin-right: 5vh
.iframe-control-buttons > *
    cursor: pointer
</style>