<template>
    <div class="panorama-container" v-if="active_station">
        <div ref="panorama" v-if="activePin && !activePin.data"></div>
        <panorama-detailed v-else />
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import link from '../../constants.js'
    import axios from 'axios'
    import {cloneDeep} from 'lodash'
    import panoramaDetailed from './_panorama-detailed.vue'

    export default {
        name: 'panorama-container',
        data() {
            return {
               panoramaViewer: null
            }
          
        },
        components: {
            panoramaDetailed
        },
        computed: {
            ...mapState({
                activePin: state => state.panorama.activePin,
                active_station: state => state.map.active_station
            })
        },
        methods: {
            async updatePanorama() {
               
                if (!this.activePin || !this.activePin.options) {
                    return false
                }
 
                var vm = this;
                var container = await vm.$refs.panorama;
               
                if (this.panoramaViewer) {
                    this.panoramaViewer.destroy();
                    this.panoramaViewer = void 0;
                }

                var departmentId = this.active_station.id
                var pointId = this.activePin.img

                let finalLink = link.getPanoramaImage + '?pointId=' + pointId +  '&isPreview=false'   + 
                                        "&departmentId=" + departmentId 

                const imageString = await axios.get(finalLink).then(res => res.data)

                let options = cloneDeep(this.activePin.options)

                options.panorama = imageString
              
                this.viewer = pannellum.viewer(container, options);
               
            }
        },
        watch: {
            activePin: {
                handler: async function(val, oldVal) {    
                    if (val && !val.data) {
                      await this.$nextTick()                      
                      this.updatePanorama()    
                    }
                },
                immediate: true
            }
        }
    }
</script>

<style scoped lang="sass">
.panorama-container
    width: 100%
    height: 100%
</style>