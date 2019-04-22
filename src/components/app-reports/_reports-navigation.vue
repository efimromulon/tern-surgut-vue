<template>
<div class="sidebar-left-panel-view">					
        <div class="sidebar-left-panel-view__content">
            <div class="reports-tabs-container">
                <div class="reports-tabs-wrapper" >
                    <div v-for="tab in tabNames" :key="tab" @click="changeActiveTab(tab)" :class="{'reports-tab': true, 'active-tab': tab === activeTab}">
                        {{ tab }}
                    </div>
                </div>

                <div data-scrollbar class="reports-items-wrapper">
                    <div v-if="reportsData[activeTab] && reportsData[activeTab].length === 0" class="reports-nodata">
                        <p class="reports-nodata-text">{{ mapNoData(activeTab) }} <icon-not-favorite v-if="activeTab === 'Избранное'"/> </p>
                </div>
                <report-item v-else v-for="report in reportsData[activeTab]" :key="report.cuid" class="" :report="report"/>   
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import reportItem from './_report-item'
import Scrollbar from 'smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
    

    export default {
        name: 'reports-navigation',
        components: {
            reportItem
        },
        data() {
            return {
                activeTab: '',
                tabNames: ['Избранное','Доступные','История']
            }
        },
        computed: {
            ...mapState({
                availableReports: state => state.reports.availableReports,
                favoriteReports: state => state.reports.favoriteReports,
                reportsHistory: state => state.reports.reportsHistory
            }),
            reportsData() {
                return {
                    'Доступные': this.availableReports,
                    'Избранное': this.favoriteReports,
                    'История': this.reportsHistory
                }
            }
        },
        methods: {
            mapNoData(dataName) {
                switch (dataName) {
                    case 'Доступные':
                        return 'Нет доступных отчётов'
                    case 'Избранное':
                        return 'Добавьте отчёты в избранное, нажав на символ '
                    case 'История':
                        return 'Здесь будет отображаться история просмотров'
                }
            },
            changeActiveTab(tabName) {
                if(this.activeTab !== tabName) {
                    this.activeTab = tabName
                }
                
            }
        },
        mounted() {
            this.activeTab = this.tabNames[0]
        }
    }
</script>

<style scoped lang="sass">
.reports-tabs-container
    display: flex
    flex-direction: column
    
    overflow: auto
    background-color: white
    width: 100%
.reports-tabs-wrapper
    display: flex
    flex-direction: row
    justify-content: space-evenly
    @include shadow(1)
.reports-tab
    flex: 1
    font-size: .9em
    padding: 8px 0
    text-align: center
    cursor: pointer
.active-tab
    background-color: #ededed
.reports-items-wrapper
    max-height: calc(100vh - 32px)
    overflow: hidden

.reports-nodata
    height: 20vh
    display: flex
    align-items: center
    justify-content: center
    background-color: rgb(237, 237, 237)
.reports-nodata-text
    color: #707070
    font-size: .9em
    width: 100%
    padding: 1em
    text-align: center
</style>