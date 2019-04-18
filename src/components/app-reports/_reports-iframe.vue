<template>
    <div class="iframe-wrapper">
       <div class="iframe-controls">
           <div class="iframe-report-name">
               {{ currentReport.name }}
           </div>
           <div class="iframe-control-buttons">
                <reports-favorite :isFavorite="getFavorite" @click.native="handleFavClick"/>
                <icon-newtab @click.native="handleNewTabClick"/>
           </div>
       </div>
       <div class="iframe-container">
           <iframe class="iframe" :src="currentReport.cuid" frameBorder="0"></iframe>
       </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
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
            ...mapGetters(['getFavorite'])
            
        },
        methods: {
            handleFavClick() {
                let object = this.currentReport
                this.$store.dispatch('updateFavorite', object);
            },
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
    margin-bottom: 2vh
    display: flex
    align-items: center
    justify-content: center
.iframe-wrapper
    height: 100%
    width: 100%
    display: flex
    align-items: center
    justify-content: flex-end
    flex-direction: column
.iframe-container
    height: 80vh
    width: calc(80vh * 1.7)
    background-color: #E3E3E3
    margin-bottom: 1vh
.iframe
    flex: auto
    width: 100%
    height: 100%
.iframe-report-name
    flex: 9
    text-align: left
    padding-left: 3vh
.iframe-control-buttons
    flex: 1
    display: flex
    align-items: center
    justify-content: center
    margin-right: 5vh
.iframe-control-buttons > *
    cursor: pointer
</style>