<template>
    <div class="heatmap-legend-container">
            <div v-for="(item,index) in colorSteps.values" :key="'af' + index" class="heatmap-legend-tile-container">
                <div class="heatmap-legend-tile">
                    <p class="heatmap-legend-tile-text"> {{ item }} </p>
                    <div class="heatmap-legend-tile-square" :style="{ 'background-color': colorSteps.colors[index] }"></div>    
                </div> 
            </div>
        </div>
</template>

<script>
    export default {
        name: 'heatmap-legend',
        props: ['colorSteps']
    }
</script>

<style scoped lang="sass">
.heatmap-legend-container
    display: flex
    width: 20%
    margin: 2vh 0 0 40%
    align-items: center
    justify-content: center
.heatmap-legend-tile
    display: flex
    flex-direction: column
    align-items: center
    margin: 0 .25vh
.heatmap-legend-tile-square
    width: 3em
    height: .5em 
    
.heatmap-legend-tile-text
    margin: 0
    padding: 0
    font-size: .9em
</style>