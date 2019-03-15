<template>
	<div class="panel-view__layout">
		<component v-bind:is="activePanelView"></component>
	</div>
</template>

<script>

	import {mapGetters} from 'vuex'

	import uiSettingsPanelViewsMarkingSettingsView from './_ui-settings-panel-views__marking-settings__view.vue'
			//ui-settings-panel-menus-menu-marking-settings
	// import buttonCross from '@/components/app-common/buttons/button-cross.vue'
	// import buttonCollapse from '@/components/app-common/buttons/button-collapse.vue'

	export default {

		name: 'ui-settings-panel-view',
		components: {
			uiSettingsPanelViewsMarkingSettingsView,
		},
		data () {
			return {

			}
		},
		computed: {
			...mapGetters([
				'get_uiCoreMenuButton_active_componentName',
			]),
			activePanelView(){
				
				var testString  = this.get_uiCoreMenuButton_active_componentName;

				function testInput(str) {

					var re = /marking-settings/g;

					var components = [/marking-settings/g];


					for(var i = 0; i < components.length - 1; i++){
						var r = components[i];
						if (str.search(/marking-settings/g) != -1) {
							return `uiSettingsPanelViews${components[i]}View`
						};

					};

				};

				// console.log(testInput(testString));

				// return this.get_uiCoreMenuButton_active_componentName
			},
		},
		watch: {
			activePanelView(newCount, oldCount){},
		},
	}

</script>

<style lang="sass">

	.panel-view__layout
		position: relative
		width: 100%
		//top: 4px

</style>