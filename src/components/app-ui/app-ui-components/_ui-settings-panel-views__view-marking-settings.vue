<template>
	<div class="marking-settings">
		<menu-datatype/>
		<menu-gas/>

	</div>
</template>

<script>

	import {mapGetters} from 'vuex'

	import uiSettingsPanelViewsViewMarkingSettingsMenuDatatype from './_ui-settings-panel-views__view-marking-settings__menu-datatype.vue'
	import uiSettingsPanelViewsViewMarkingSettingsMenuGas from './_ui-settings-panel-views__view-marking-settings__menu-gas.vue'

	export default {

		name: 'ui-settings-panel-views__view-marking-settings',
		components: {
			'menu-datatype': uiSettingsPanelViewsViewMarkingSettingsMenuDatatype,
			'menu-gas': uiSettingsPanelViewsViewMarkingSettingsMenuGas,
		},


		data () {
			return {

			}
		}

	}

// "air-datepicker": "^2.2.3",
// "nouislider": "^12.1.0",
</script>

<style lang="sass">

	.marking-settings

</style>