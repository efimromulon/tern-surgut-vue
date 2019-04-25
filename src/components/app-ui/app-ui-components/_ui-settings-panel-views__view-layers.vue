<template>
	<div class="menu-marking">
		
	</div>
</template>

<script>
import uiSettingsPanelMenusMenuMarkingSettingsButton from "./_ui-settings-panel-menus__menu-marking-settings-button.vue"
import {mapState} from 'vuex'

export default {

	name: 'ui-settings-panel-views__view-layers',
	components: {
		uiSettingsPanelMenusMenuMarkingSettingsButton
	},
	data () {
		return {

		}
	},
	computed: {
			...mapState({
				uiLayersButtons: state => state.uiSettings.uiLayersButtons
			})
		},


		methods: {

		},

		watch: {
			uiMarkingMenuButtons(newCount, oldCount){},
		},
}
</script>

<style lang="sass">
</style>