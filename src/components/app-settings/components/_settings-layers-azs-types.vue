<template>
<div>
    <div v-for="sdo in azsTypes" :key="sdo.id" class="azs-types-item">
       <div class="azs-types-header"> {{sdo.name}} </div>
       <div class="azs-types-item-button" @click="handleClick(sdo)"> {{ sdo.status ? 'скрыть' : 'показать'  }} </div>
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
    @include shadow(2)
.azs-types-item-button
    padding: 1vh
    width: 10vh
</style>