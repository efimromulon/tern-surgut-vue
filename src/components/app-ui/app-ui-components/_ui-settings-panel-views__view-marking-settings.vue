<template>
	<div class="marking-settings">
		<menu-datatype/>
		<menu-datafilter/>

	</div>
</template>

<script>

	import {mapGetters} from 'vuex'

	import uiSettingsPanelViewsViewMarkingSettingsMenuDatatype from './_ui-settings-panel-views__view-marking-settings__menu-datatype.vue'
	import uiSettingsPanelViewsViewMarkingSettingsMenuDatafilter from './_ui-settings-panel-views__view-marking-settings__menu-datafilter.vue'

	export default {

		name: 'ui-settings-panel-views__view-marking-settings',
		components: {
			'menu-datatype': uiSettingsPanelViewsViewMarkingSettingsMenuDatatype,
			'menu-datafilter': uiSettingsPanelViewsViewMarkingSettingsMenuDatafilter,
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