<template>
     <div class="sidebar-left-panel-view" v-if="active_station">
         <div class="sidebar-left-panel-header"> Схема {{ active_station.stationLabel }}</div>
       <panorama-minimap :panoramaData="panoramaData" :key="'pm' + active_station.id" v-if="panoramaData"/>
    </div>
</template>

<script>
    import Konva from 'konva'
    import { mapState } from 'vuex'
    import panoramaMinimap from './_panorama-minimap.vue'
   

    export default {
        name: 'panorama-controls',
        data() {
            return {

            }
        },
        components: {
            panoramaMinimap,
      
        },
        computed: {
            ...mapState({
                panoramaData: state => state.panorama.panoramaData,
                activePin: state => state.panorama.activePin,
                active_station: state => state.map.active_station
            })
        }
    }
</script>

<style scoped>

</style>