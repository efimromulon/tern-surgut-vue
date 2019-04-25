<template>
<div>
    <div v-for="sdo in azsTypes" :key="sdo.id" class="azs-types-item">
        <div class="azs-types-item-button-container">
           <div class="azs-types-item-button" 
            :style="selectedStyle(sdo.status)" 
            @click="handleClick(sdo)"> {{ sdo.status ? 'отображается' : 'скрыто'  }} </div>
       </div>
       <div class="azs-types-header"> {{sdo.name}} </div>
       
       
    </div>
</div>
    
</template>

<script>
import {mapState} from 'vuex'

    export default {
        name: 'azs-types',
        computed: {
            ...mapState({
                azsTypes: state => state.settings.azsTypes
                })
        },
        methods: {
            handleClick(item) {
                this.$store.dispatch('toggleAzsType', { id: item.id })
            },
            selectedStyle(isSelected) {
                if (isSelected) {
                    return {
                        'background-color': "#51CC00"
                    }
                } else {
                    return {
                        'background-color': "#CC0000"
                    }
                }
            }
        }
    }
</script>

<style scoped lang="sass">
.azs-types-item
    display: flex
    margin: 1vh   
.azs-types-header
    width: 28vh
    padding: 1vh  
.azs-types-item-button-container
    display: flex
    align-items: center
    justify-content: center
    width: 10vh  
    margin-right: 1vh 
.azs-types-item-button
    color: white
    text-align: center
    font-size: 14px
    font-weight: bold
    border-radius: 8px
    height: 3vh
    display: flex
    align-items: center
    justify-content: center
    padding: 0 1vh 4px 1vh 
    @include shadow(2) 
</style>