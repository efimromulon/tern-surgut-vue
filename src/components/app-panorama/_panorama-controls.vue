<template>
     <div class="sidebar-left-panel-view" v-if="konvaObj">
        P controls
    </div>
</template>

<script>
    import Konva from 'konva'
    import { mapState } from 'vuex'
    
    export default {
        name: 'panorama-controls',
        data() {
            return {

            }
        },
        computed: {
            ...mapState({
                konvaObj: state => {
                    let data = state.panorama.panoramaData
                    if(data && data.konva) {
                        return data.konva
                    } else {
                        return null
                    }
                    }
            })
        }
    }
</script>

<style scoped>

</style>