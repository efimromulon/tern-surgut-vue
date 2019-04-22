<template>
	<div class="panel-view__layout">
		<component v-bind:is="activePanelView"></component>
	</div>
</template>

<script>

	import {mapGetters} from 'vuex'

	import uiSettingsPanelViewsViewMarkingExpress from './_ui-settings-panel-views__view-marking-express.vue'
	import uiSettingsPanelViewsViewMarkingSettings from './_ui-settings-panel-views__view-marking-settings.vue'
	import uiSettingsPanelViewsViewLayers from './_ui-settings-panel-views__view-layers.vue'

	export default {

		name: 'ui-settings-panel-view',
		components: {
			uiSettingsPanelViewsViewMarkingExpress,
			uiSettingsPanelViewsViewMarkingSettings,
			uiSettingsPanelViewsViewLayers,
		},
		data () {
			return {

			}
		},
		computed: {
			...mapGetters([
				'get_uiMarkingMenuButtons_active_componentName',
				'get_uiCoreMenuButton_active_componentName',
			]),
			activePanelView(){
				
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
				
				if(this.get_uiCoreMenuButton_active_componentName === 'ui-settings-panel-menus-menu-marking-settings'){
					return this.get_uiMarkingMenuButtons_active_componentName
				} else 
				if(this.get_uiCoreMenuButton_active_componentName === 'ui-settings-panel-menus-menu-layers-settings'){
					return 'uiSettingsPanelViewsViewLayers'
				} 

				
			},
		},
		watch: {
			activePanelView(newCount, oldCount){},
		},
	}

</script>

<style lang="sass">

	.panel-view__layout
		// display: flex
		// flex-basis: auto
		// flex-direction: column
		// flex-grow: 0
		// flex-shrink: 1
		// flex-wrap: nowrap
		// min-height: 30px

</style>