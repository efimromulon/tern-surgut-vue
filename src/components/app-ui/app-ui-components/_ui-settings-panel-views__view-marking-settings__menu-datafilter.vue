<template>
	<div class="menu-datatype">
		<menu-gas-button
			:buttonData = "uiMarkingMenuDatatypeButtons[key]"
			 v-for = "(item, key) in uiMarkingMenuDatatypeButtons"
			 :key = "key"
		></menu-gas-button>
	</div>
</template>

<script>

	import {mapGetters} from 'vuex'
	import uiSettingsPanelViewsViewMarkingSettingsMenuGasButton from './_ui-settings-panel-views__view-marking-settings__menu-gas-button.vue'

	export default {

		name: 'ui-settings-panel-views__view-marking-settings__menu-gas',
		components: {
			'menu-gas-button': uiSettingsPanelViewsViewMarkingSettingsMenuGasButton,
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
				return this.get_testById(0, 'uiMarkingMenuDataFilterFuelStockButtons')
			},
		},

		watch: {
			uiMarkingExpressButtons(newCount, oldCount){},
		},
	}
</script>

<style lang="sass">
</style>