<template>
    <div >
       <div v-for="option in options" 
            :key="option.id" 
            class="express-marks-option"
            :style="isActive(option.name)"
            @click="handleClick(option)">
           {{ option.name }}
       </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
    export default {
       name: 'express-marks',
       computed: {
           ...mapState({
               options: state => state.settings.activeMarkingOptions,
               activeMarking: state => state.settings.activeMarking
           })
       },
       methods: {
           isActive(name) {
               if(name === this.activeMarking.name) {
                   return {
                       'background-color': "#6200EE",
                       'color': 'white',
                       'cursor' : 'auto'
                   }
               }
           },
           async handleClick(option) {
               if ( option.name === this.activeMarking.name ) {
                   return false
               } else {
                await this.$store.dispatch('paintMarkers', { filterType: option.options.type })
                this.$store.dispatch('setActiveMarking', option)
               }
           }    
       }
    }
</script>

<style scoped lang="sass">
.express-marks-option
    @include shadow(2)
    @include border(2)
    padding: .5em
    margin: 1em 0
    &:hover
        cursor: pointer
        background-color: rgba(98, 0, 238, 0.08)


</style>