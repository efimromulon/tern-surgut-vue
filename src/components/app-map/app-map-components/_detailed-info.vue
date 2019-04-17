<template>
 <div class="sidebar-left-panel-view" v-if="activeAzs">					
        <div class="sidebar-left-panel-view__content">
            <div class="station-info-wrapper">
                <h2> {{ activeAzs.stationLabel }}  
                    <button-cross
                        :btnClassName = "`sidebar-left-panel-view`"
                        :btnType = "`popup`"
                    ></button-cross>
                    
                    </h2> 
                <p class="station-info-category"> {{activeAzs.category}} </p>
                <p class="station-info-address"> {{activeAzs.stationCity}} <br/>
                    {{activeAzs.stationAddress}}

                </p>
            </div>
       
   
        </div>
        </div>
</template>

<script>
import {mapState} from 'vuex'

    export default {
        name: 'detailed-info',
        computed: {
            ...mapState({ activeAzs: state => state.map.active_station })
        }
    }
</script>

<style scoped lang="sass">
.station-info-wrapper
    height: 40vh
    display: flex
    flex-direction: column
    width: 100%
.station-info-wrapper > h2
    text-align: center
    width: 100%
    margin-top: 12px
    font-weight: 300
    font-size: 1.5em
.station-info-category
    margin: 12px
    font-size: 1.3em
    color: #707070
.station-info-address
    margin: 12px
    font-size: 0.9em
    color: #707070
</style>