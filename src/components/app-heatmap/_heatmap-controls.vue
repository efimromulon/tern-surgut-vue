<template>
     <div class="sidebar-left-panel-view" v-if="weekNames && weekNames.length > 0">
         <div class="heatmap-controls-container">        
             <select-input :options="['Перезагрузки']"/>
             <div class="heatmap-checkboxes-container">
                <p>Среднее значение: <input :disabled="!weekHipe || weekHipe === '0'"  type="number" v-model="averageVal" class="heatmap-controls-average-input"> </p>
                <p><input type="radio" name="rad" value="0" v-model="weekHipe"> Все значения </p>
                <p><input type="radio" name="rad" value="1" v-model="weekHipe"> Неделя выше значения </p>
                <p><input type="radio" name="rad" value="2" v-model="weekHipe"> Две недели выше значения </p>
                <p><input type="radio" name="rad" value="3" v-model="weekHipe"> Три недели выше значения </p>
             </div>
             <div class="heatmap-controls-slider-container">
                <input :disabled="chartDataLoading" type="range" min="0" :max="weekNames.length - 1"  class="heatmap-controls-slider" v-model="weekIndex">
                <p>Неделя: {{ weekNames[weekIndex] }}</p>
            </div>
            <p  v-if="highlightedAzs" class="heatmap-controls-highlighted-azs-description" >Количество перезагрузок и обновления ПО на {{ highlightedAzsName }}</p> 
            <div v-if="highlightedAzs" class="heatmap-controls-highlighted-azs-container">  
                <!-- <heatmap-chart :chartData="chartData"/>           -->
            </div >
            </div>
     </div>
</template>

<script>



import { mapState } from 'vuex'
import SelectInput from './_heatmap-select-input'
    export default {
         name: 'heatmap-controls',
         components: {
             SelectInput
             },
    data(){
        return {           
        }
    },
    computed: {
        ...mapState({
            activeWeek: state => state.heatmap.activeWeek,
            // weekHipe: state => state.heatmap.weekHipe,
            averageVal: state => state.heatmap.averageVal,
            chartData: state => state.heatmap.chartData,
            // weekIndex: state => state.heatmap.weekIndex,
            chartDataLoading: state => state.heatmap.chartDataLoading,
            weekNames: state => state.heatmap.weekNames,
            highlightedAzs:  state => state.heatmap.highlightedAzs,
            highlightedAzsName: state => state.heatmap.highlightedAzsName

        }),
        averageVal: {
            get() {
                 return this.$store.state.heatmap.averageVal
            },
            set(val) {
                this.$store.dispatch('updateAverageVal', val)
            }
        },
        weekHipe: {
            get() {
                 return this.$store.state.heatmap.weekHipe
            },
            set(val) {
                this.$store.dispatch('updateWeekHipe', val)
            }
        },
        weekIndex: {
            get() {
                return this.$store.state.heatmap.weekIndex
            },
            set(val) {
                 this.$store.dispatch('updateWeekIndex', val)
            }
        }
    },
    methods: {
        getChartData() {
            this.chartDataLoading = true;
            let sStationId = this.highlightedAzs;
            let weekName = this.weekNames[this.selectOptions.weekIndex];
            const _that = this;

            const options = {
                sStationId,
                weekName,
                type: "reboot"
            }

            $.ajax({
                type:"GET",
                url:'../services/common/getRestartGraphData.xsjs',
                data: {data: JSON.stringify(options)},
                success: function(data) {
                    _that.chartDataLoading = false
                _that.chartData = data
                   },
                   error: function(error) {
                    _that.chartDataLoading = false
                    _that.chartData = {}
                   }
            
            })


        }
    },
    watch: {
        'selectOptions.weekIndex': function(val, oldVal) {
            if (val !== oldVal && this.highlightedAzs) {
                this.getChartData()
            }
        }
        
    }
    }
</script>

<style scoped lang="sass">
.heatmap-controls-container
    display: flex
    flex-direction: column 
    background-color: white
    width: 100%
    @include shadow(1)
.heatmap-checkboxes-container > p
    margin: 1vh
    font-size: .9em
.heatmap-controls-average-input
    height: 30px
    width: 10%
    padding-left: 1em
    line-height: 30px
    outline: none
    border: none
    font-size: 1em
.heatmap-controls-slider-container > p
    margin: 1vh
    font-size: .9em
.heatmap-controls-slider
    width: calc(100% - 2vh)
    margin-left: 1vh
.heatmap-controls-highlighted-azs-description
.heatmap-controls-highlighted-azs-container
</style>