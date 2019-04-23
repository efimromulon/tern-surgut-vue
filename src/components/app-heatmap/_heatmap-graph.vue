<template>
    <div v-if="heatmapData">
    <heatmap-legend :colorSteps="colorSteps" />
      <div class="heatmap-items-container">
            <heatmap-item 
            v-for="item in heatmapData" 
            :key="item.sStationId"  
            :oData="item" 
            :selected="isSelected(item)" 
            :color="color(item)"
            :highlighted="item.sStationId === highlightedAzs"
            @click.native="select(item)" />
       
        </div>         
</div>
  
</template>

<script>

import { mapState } from 'vuex'
import heatmapItem from './_heatmap-item'
import heatmapLegend from './_heatmap-legend'



var color1 = [173, 219, 252];
var color2 = [63, 138, 177];
var color3 = [4, 100, 142];

function makeGradient(max) {
    // let resultArr = [];

    // let prevColor = [];
    // let diff = [];
    let middle = Math.floor(max / 2);
    let quarter = Math.floor(middle / 2);
    let threeQuarters = middle + quarter;

    if(middle === 0 || middle === 1) {
        middle = 1,
        quarter = null,
        threeQuarters = null
    }

    
    
    let numbers = [0, quarter, middle, threeQuarters , max]
    
  
    
    let colorStepArr = [];
    let prevColor = color1;

    if (quarter) {
        colorStepArr = [
            ( color3[0] - color1[0] ) / 5,
            ( color3[1] - color1[1] ) / 5,
            ( color3[2] - color1[2] ) / 5
        ]
    } else {
        return {
            values: [   0, 
                        middle, 
                        max
                    ],
            colors: [   `rgb(${color1[0]},${color1[1]},${color1[2]})`,
                        `rgb(${color2[0]},${color2[1]},${color2[2]})`,
                        `rgb(${color3[0]},${color3[1]},${color3[2]})`
                    ]
        }
    }
    
    let result = {
        values: numbers,
        colors:[]
    }

    for (let i = 0; i < 5; i++) {
        let computedColor = [];

        if (i === 0) {
            computedColor = color1
        } else if (i === 2) {
            computedColor = color2
        } else if (i === 4) {
            computedColor = color3
        } else {
            computedColor = [
                Math.ceil(prevColor[0] + colorStepArr[0]),
                Math.ceil(prevColor[1] + colorStepArr[1]),
                Math.ceil(prevColor[2] + colorStepArr[2])
            ]
        }

        result.colors.push(
            `rgb(${computedColor[0]},${computedColor[1]},${computedColor[2]})`
        )
        
        prevColor = computedColor;
    }

    return result

}

    export default {
        name: 'heatmap-graph',
        components: {
            heatmapItem,
            heatmapLegend
        },
         data(){
            return {           
            }
        },
    computed: {
        ...mapState({
            heatmapData: state => state.heatmap.heatmapData,
            weekNames: state => state.heatmap.weekNames,
            weekIndex: state => state.heatmap.weekIndex,
            averageVal: state => state.heatmap.averageVal,
            highlightedAzs: state => state.heatmap.highlightedAzs,
            dataType: state => state.heatmap.dataType,
            weekHipe: state => state.heatmap.weekHipe
        }),
        maxVal: {
            get() {
                return this.$store.state.heatmap.maxVal
            },
            set(val) {
                this.$store.dispatch('updateMaxVal', val)
            }
        },
        colorSteps() {
            
            let maxVal = this.maxVal

            switch (maxVal) {
                case 0:
                    return [`rgb(${color1[0]},${color1[1]},${color1[2]})`]
                case 1:
                    return [`rgb(${color1[0]},${color1[1]},${color1[2]})`,
                    `rgb(${color3[0]},${color3[1]},${color3[2]})`]
                case 3:
                    return [`rgb(${color1[0]},${color1[1]},${color1[2]})`,
                    `rgb(${color2[0]},${color2[1]},${color2[2]})`,
                    `rgb(${color3[0]},${color3[1]},${color3[2]})`]
                default:
                    return  makeGradient(maxVal)
                
            }
           
        },
        selectKeys() {
            return {
                filterType: this.$refs.select_filter_type.val
            }
        },
    },
    methods: {
        hideHeatmap() {
            store.dispatch('toggleHeatMap', false)
        },
        color(item) {
            let weekIndex = this.weekIndex;
            let weekName = this.weekNames[weekIndex];
            let values = item.aReboots.find(item => item.name === weekName)

            let colors = this.colorSteps;
            
            if (!values) {
                return "rgb(233, 233, 233)"
            }
            let count = values.count
            let num;

            for (let i = 0; i < colors.values.length; i++) {
                if (count >= colors.values[i]) {
                    num = i
                }
            }
            
            return colors.colors[num]
        },
        changeSelectKey(name,val) {
            this.selectKeys[name] = val
        },
        select(item) {
            this.$store.dispatch('highlightAzs', item)
            
        },
        isSelected(item) {  
            let reboots = item.aReboots
            let minVal = this.averageVal
            let weeksToCalc = this.weekNames.length

            let activeCondition = this.weekHipe;

        

            function countHipe() {
                let count = 0;
                for (let i = 0; i <= weeksToCalc; i++) {               
                    if(!reboots[i] || reboots[i].count === null || reboots[i].count === 'undefined') {                        
                        continue;
                    }
                   
                    if (reboots[i].count >= minVal) {                  
                        count += 1
                    }                    
                }
                return count
            }

            let hipeWeeks = countHipe();

            if (activeCondition) {
                return hipeWeeks >= activeCondition
            }
            return true


        }
    },
    watch: {
        'weekIndex': function(val, oldVal) {
            if (val !== oldVal && this.highlightedAzs) {
                this.$store.dispatch('updateChartData')
            }
        }
        
    },
    mounted() {
        if (!this.heatmapData || this.heatmapData.length === 0) {
            this.$store.dispatch('getHeatmapData')
        }
    }
    }
</script>

<style scoped lang="sass">
.heatmap-items-container
    width: calc(100% - 4em)
    height: calc(100% - 4em)
    padding: 2em
    margin: 0
    display: flex
    flex-wrap: wrap
    overflow-y: auto
    align-content: flex-start
.heatmap-title
    margin: 1vh 3vh
</style>