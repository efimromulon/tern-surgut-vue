<template>
	<div class="panel-menu__layout">
		<component v-bind:is="activePanelMenu"></component>
	</div>
</template>

<script>

	import {mapGetters} from 'vuex'

	import uiSettingsPanelMenusMenuLayersSettings from './_ui-settings-panel-menus__menu-layers-settings.vue'
	import uiSettingsPanelMenusMenuMarkingSettings from './_ui-settings-panel-menus__menu-marking-settings.vue'

	export default {

		name: 'ui-settings-panel-menu',

		components: {
			uiSettingsPanelMenusMenuLayersSettings,
			uiSettingsPanelMenusMenuMarkingSettings,
		},

		data () {
			return {

			}
		},

		computed: {
			...mapGetters([
				'get_uiCoreMenuButton_active_componentName',
			]),
			activePanelMenu(){
				
				// var testString  = this.get_uiMarkingMenuButtons_active_componentName;

				// function testInput(str) {

				// 	var re = /marking-settings/g;

				// 	var components = [/marking-settings/g];


				// 	for(var i = 0; i < components.length - 1; i++){
				// 		var r = components[i];
				// 		if (str.search(/marking-settings/g) != -1) {
				// 			return `uiSettingsPanelViews${components[i]}View`
				// 		};

				// 	};

				// };

				// console.log(testInput(testString));

				return this.get_uiCoreMenuButton_active_componentName
			},
		},

		watch: {
			activePanelMenu(newCount, oldCount){},
		},

	}

</script>

<style lang="sass">

	.panel-menu__layout
		display: flex
		flex-basis: auto
		flex-direction: row
		flex-grow: 0
		flex-shrink: 1
		flex-wrap: no-wrap
		min-height: 30px

</style>