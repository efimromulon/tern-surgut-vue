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
                <div class="station-info-divider">

                </div>
                <div class="station-info-buttons-container">
                    <div>
                        <div class="station-info-button-wrapper">
                            <icon-panorama/>
                        </div>
                        <p class="station-info-button-label">АЗС 360°</p>
                    </div>
                    <div>
                        <div class="station-info-button-wrapper" @click="toggleReport()">
                         <icon-report />
                        </div>
                        <p class="station-info-button-label">Отчёт</p>
                    </div>
                    <div>
                        <div class="station-info-button-wrapper">
                            <icon-card/>
                        </div>
                        <p class="station-info-button-label">Карточка АЗС</p>
                    </div>
                    

                </div>
            </div>
       
   
        </div>
        </div>
</template>

<script>
import {mapState} from 'vuex'
import link from '../../../constants.js'

    export default {
        name: 'detailed-info',
        computed: {
            ...mapState({ activeAzs: state => state.map.active_station })
        },
        methods: {
            toggleReport(){
                const activeAzs = this.activeAzs;
                var time = new Date();

                function addZero(i) {
                    if (i < 10) {
                        i = "0" + i;
                    }
                    return i;
                }

                var fullTime = "" + addZero(time.getHours()) + ":" + addZero(time.getMinutes());



                let reportObj = {
                    cuid: link.azsReport + activeAzs.id,
                    name: "Отчёт по " + activeAzs.stationName,
                    time: fullTime
                }
                
                this.$store.dispatch('changeCurrentReport', reportObj);
               


                this.$store.dispatch('setComponent', {
					componentPosition: 'centralComponent',
					componentName: 'reports-iframe'
				});
            }
        },
        beforeDestroy(){
            this.$store.dispatch('setComponent', {
					componentPosition: 'centralComponent',
					componentName: ''
				})
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
.station-info-divider
    height: 4vh
    width: 100%
    background-color: #E3E3E3
    margin: 1vh 0
.station-info-buttons-container
    width: 100%
    display: flex
    align-items: space-around
    justify-content: center
.station-info-button-wrapper
    display: flex
    align-items: center
    justify-content: center
    background-color: white
    flex: auto 0
    border-radius: 50%
    margin: 1vh 2vh
    width: 6vh
    height: 6vh
    @include shadow(2)
    cursor: pointer
.station-info-button-label
    text-align: center
    font-size: 0.8em
</style>