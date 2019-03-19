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
	import uiSettingsPanelViewsViewMarkingSettingsMenudDtafilter from './_ui-settings-panel-views__view-marking-settings__menu-datafilter.vue'

	export default {

		name: 'ui-settings-panel-views__view-marking-settings__menu-datafilter',
		components: {
			'menu-gas-button': uiSettingsPanelViewsViewMarkingSettingsMenudDtafilter,
		},
		data () {
			return {

			}
		},
		computed: {
			...mapGetters([
				'get_uiMarkingMenuDatafilterById',
			]),
			uiMarkingMenuDatafilterById(){
				return this.get_uiMarkingMenuDatafilterById(0, 'uiMarkingMenuDatafilterFuelStockButtons')
			},
		},

		watch: {
			uiMarkingMenuDatafilterById(newCount, oldCount){},
		},
	}
</script>

<style lang="sass">
</style>