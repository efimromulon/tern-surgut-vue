<template>
    <div class="panorama-detailed-container" v-if="activePin && activePin.data">
        <div class="panorama-detailed-list-container" data-scrollbar v-if="activePin.data && activePin.data.length > 0">
            <div class="panorama-detailed-list-item" 
            v-for="(item,index) in activePin.data" 
            :key="item.title"
            @click="setActiveData(index)">
                <div class="panorama-detailed-item-title"> {{ item.title }}  </div> 
                <div class="detailed-active" v-if="index === activeData"> </div>
            </div>
        </div>
        <div class="panorama-detailed-image-container">
            <img :src="src" v-if="src" />
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import axios from 'axios'
    import Scrollbar from 'smooth-scrollbar'
    import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
    import link from '../../constants.js'
    export default {
        name: 'panorama-detailed',
        data() {
            return {
                src: ''
            }
        },
        computed: {
            ...mapState({
                activePin: state => state.panorama.activePin,
                departmentId: state => state.map.active_station.id,
                activeData: state => state.panorama.activeData
            })
        },
        methods: {
            ...mapActions(['setActiveData']),
            async fetchImage(){
                let departmentId = this.departmentId;
                let index = this.activeData;
                let data = this.activePin.data;
                let pointId = data[index].files[0].pointId;
                var serieId = data[index].id;
                var finalLink = link.getSnackBarImage +
                 '?pointId=' + pointId + "&departmentId=" + 
                 departmentId + "&serieId=" + serieId;

                const imageString = await axios.get(finalLink).then(res => res.data)

                this.src = imageString
            }
        },
        watch: {
            activePin: {
                handler: async function(val, oldVal) {   
                    if(val && val.name) {
                    await this.setActiveData(null)
                       this.setActiveData(0)
                    }
                    
                },
                immediate: true,
                deep: true
            },
            activeData: {
                handler: async function(val, oldVal) {
                    if(val === 0 || val) {
                       this.src = ''
                       this.fetchImage()
                    }
                },
                immediate: true
            }
        }
    }
</script>

<style scoped lang="sass">
.panorama-detailed-container
    height: 100%
    width: 100%
    display: flex
.panorama-detailed-list-container
    height: 100%
    flex: 1
.panorama-detailed-list-item
    margin: 1vh
    // padding: 1vh
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)
    cursor: pointer
    display: flex
.panorama-detailed-list-item:hover
    background-color: rgba(98, 0, 238, 0.08)
.panorama-detailed-image-container
    flex: 4
    background-color: #e5e5e5
    height: 100%
    display: flex
    align-items: center
    justify-content: center
.detailed-active
    flex: none
    border-radius: 50%
    width: 12px
    height: 12px
    background-color: rgb(98, 0, 238)
    margin: 1vh
    padding: 0
    align-self: center
.panorama-detailed-item-title
    margin: 1vh
    width: calc(100% - 4vh - 12px)
</style>