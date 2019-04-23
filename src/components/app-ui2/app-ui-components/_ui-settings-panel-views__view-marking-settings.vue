<template>
	<div class="marking-settings">
		<menu-datatype/>
		<div class="view-layout">
			<keep-alive>
				<component :is="uiMarkingMenuDatatypeButton_active"/>
			</keep-alive>
		</div>
	</div>
</template>

<script>

	import {mapGetters} from 'vuex'

	import uiSettingsPanelViewsViewMarkingSettingsMenuDatatype 		from './_ui-settings-panel-views__view-marking-settings__menu-datatype.vue'
	import uiSettingsPanelViewsViewMarkingSettingsViewFuelstock 	from './_ui-settings-panel-views__view-marking-settings__view-fuelstock.vue'
	import uiSettingsPanelViewsViewMarkingSettingsViewFuelsell 		from './_ui-settings-panel-views__view-marking-settings__view-fuelsell.vue'
	import uiSettingsPanelViewsViewMarkingSettingsViewArticlesell 	from './_ui-settings-panel-views__view-marking-settings__view-articlesell.vue'

	export default {

		name: 'ui-settings-panel-views__view-marking-settings',
		components: {
			'menu-datatype'		: uiSettingsPanelViewsViewMarkingSettingsMenuDatatype,
			'view-fuelstock'	: uiSettingsPanelViewsViewMarkingSettingsViewFuelstock,
			'view-fuelsell'		: uiSettingsPanelViewsViewMarkingSettingsViewFuelsell,
			'view-articlesell'	: uiSettingsPanelViewsViewMarkingSettingsViewArticlesell,
		},


		data () {
			return {

			}
		},
		computed: {
			...mapGetters([
				'get_uiMarkingMenuDatatypeButton_active',
			]),
			uiMarkingMenuDatatypeButton_active(){
				let getter = this.get_uiMarkingMenuDatatypeButton_active;
				switch (true) {
					case getter === 'uiMarkingMenuDatafilterFuelStockButtons':
						return 'view-fuelstock';
						break;
					case getter === 'uiMarkingMenuDatafilterFuelSellButtons':
						return 'view-fuelsell';
						break;
					case getter === 'uiMarkingMenuDatafilterArticleSellButtons':
						return 'view-articlesell';
						break;
				};
			},
		},
		watch: {
			uiMarkingMenuDatatypeButton_active(newCount, oldCount){
			},
		},

	}

// "air-datepicker": "^2.2.3",
// "nouislider": "^12.1.0",
</script>

<style lang="sass">

	.marking-settings
	.view-layout
		width: 100%
		position: relative
		top: 4px
		left: 0
		box-sizing: border-box
		display: flex
		flex-basis: auto
		flex-direction: column
		flex-grow: 0
		flex-shrink: 1
		flex-wrap: nowrap
		justify-content: flex-start
		@include shadow(2)
		@include border(2)
		background-color: $color-white

</style>