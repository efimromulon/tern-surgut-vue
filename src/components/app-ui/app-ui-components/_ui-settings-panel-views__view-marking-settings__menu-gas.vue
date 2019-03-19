<template>
<!-- 	<ui-settings-panel-views-view-marking-settings-menu-gas-button
		:buttonData = "uiMarkingExpressButtons[key]"
		 v-for = "(item, key) in uiMarkingExpressButtons"
		 :key = "key"
	></ui-settings-panel-views-view-marking-settings-menu-gas-button> -->
</template>

<script>

	import {mapGetters} from 'vuex'
	import uiSettingsPanelViewsViewMarkingSettingsMenuGasButton from './_ui-settings-panel-views__view-marking-settings__menu-gas-button.vue'

	export default {

		name: 'ui-settings-panel-views__view-marking-settings__menu-gas',
		components: {
			uiSettingsPanelViewsViewMarkingSettingsMenuGasButton,
		},
		data () {
			return {

			}
		},
		computed: {
			...mapGetters([
				'get_testById',
			]),
			uiMarkingExpressButtons(){
				return this.get_testById(0, 'uiMarkingMenuFuelStockButtons')
			},
		},

		watch: {
			uiMarkingExpressButtons(newCount, oldCount){},
		},
	}
</script>

<style lang="sass">
</style>