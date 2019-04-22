<template>
    <div class="select-input-container" >
             <select class="select-input" v-model="val" disabled>
                 <option class="select-input-option" v-for="option in options"  :key="option">{{ option }}</option> 
             </select>
        </div>
</template>

<script>
    export default {
    name: 'select-input',
    props: ['options'],
    computed: {
        val: {
            get() {
                return this.$store.state.heatmap.dataType
            },
            set(val) {
                this.$store.dispatch('updateDataType', val)
            }
        }
    },
    mounted() {
        if (!this.val) {
            this.val = this.options[0]
        }
    }
    }
</script>

<style scoped lang="sass">
.select-input-container
    height: 30px
    width: 100%
    
.select-input
    height: 30px
    width: 100%
    line-height: 30px
    outline: none
    border: none
    font-size: 1em
    background-color: #E8E5E5
</style>