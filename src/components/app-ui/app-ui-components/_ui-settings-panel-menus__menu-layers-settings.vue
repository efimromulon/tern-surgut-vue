<template>
	<div class="menu-marking">
		<ui-settings-panel-menus-menu-marking-settings-button
			:buttonData = "uiLayersButtons[buttonID]"
			 v-for = "(buttonName, buttonID) in uiLayersButtons"
			:key = "buttonID"
		>
		</ui-settings-panel-menus-menu-marking-settings-button>
	</div>
</template>

<script>

	import {mapGetters, mapState} from 'vuex'
	import uiSettingsPanelMenusMenuMarkingSettingsButton from "./_ui-settings-panel-menus__menu-marking-settings-button.vue"

	export default {

		name: 'ui-settings-panel-menus__menu-layers-settings',

		components: {
			uiSettingsPanelMenusMenuMarkingSettingsButton,
		},

		data () {
			return {
			}
		},

		computed: {
			...mapGetters([
				'get_uiMarkingMenuButtons',
			]),
			...mapState({
				uiLayersButtons: state => state.uiSettings.uiLayersButtons
			}),
			uiMarkingMenuButtons(){
				return this.get_uiMarkingMenuButtons
			},
		},


		methods: {

		},

		watch: {
			uiMarkingMenuButtons(newCount, oldCount){},
		},

	}
</script>

<style lang='sass'>

	.menu-marking
		width: 100%
		overflow: hidden
		position: relative
		top: 0
		left: 0
		height: 37px
		display: flex
		flex-basis: auto
		flex-direction: row
		flex-grow: 0
		flex-shrink: 1
		flex-wrap: nowrap
		justify-content: flex-start
		@include shadow(2)
		@include border(2)
		background-color: $color-white


</style>