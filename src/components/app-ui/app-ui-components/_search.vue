<template>
    <div class="sidebar-left-panel-view" >					
        <div class="sidebar-left-panel-view__content">
            <div class="sidebar-left-panel-view__content-wrapper"  v-if="!searchResultTabClosed">							
                <search-list/>
            </div>
        </div>
        <button-collapse
            :btnClassName = "`sidebar-left-panel-view`"
            :btnType = "`search`"
        ></button-collapse>
        <button-cross
            :btnClassName = "`sidebar-left-panel-view`"
            :btnType = "`search`"
            :btnClick = "CLOSE_BUTTON_CROSS"
        ></button-cross>
    </div>
</template>

<script>
    	import searchInput from './_search-input.vue'
        import searchList from './_search-list.vue'
        import {mapGetters } from 'vuex'


    export default {
        name: 'search',
        data() {
            return {
                buttonSearchId: 1,
                buttonSearchClass: 'button_search',
            }
        },
        components: {
            searchInput,
            searchList
        },
        computed: {
            ...mapGetters([
				'searchResultTabClosed',
				'getButtonSquareById',
            ]),
            buttonSearch(){
				return this.getButtonSquareById(this.buttonSearchId)
			},
        },
        methods:{
            CLOSE_BUTTON_CROSS(){
				this.$store.dispatch('toggle_ui_settings_button',{buttonArray: 'uiButtonSquare', id: this.buttonSearchId});
			},
        },
        beforeDestroy() {
           this.$store.dispatch('toggle_ui_settings_button',{buttonArray: 'uiButtonSquare', id: this.buttonSearchId});
        }
    }
</script>

<style lang='sass'>

.search-list-view
    display: flex
    flex-direction: column
    max-height: calc(100vh - 64px - 12px)
    min-height: 37px
    overflow: auto


</style>