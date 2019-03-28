<template>
	<div class="menu-datatype">
		<menu-datatype-button
			:buttonData = "uiMarkingMenuDatatypeButtons[key]"
			 v-for = "(item, key) in uiMarkingMenuDatatypeButtons"
			 :key = "key"
		></menu-datatype-button>
	</div>
</template>

<script>

	import {mapGetters} from 'vuex'
	import uiSettingsPanelViewsViewMarkingSettingsMenuDatatypeButton from './_ui-settings-panel-views__view-marking-settings__menu-datatype-button.vue'

	export default {

		name: 'ui-settings-panel-views__view-marking-settings__menu-datatype',
		components: {
			'menu-datatype-button': uiSettingsPanelViewsViewMarkingSettingsMenuDatatypeButton,
		},
		data () {
			return {

			}
		},
		computed: {
			...mapGetters([
				'get_uiMarkingMenuDatatypeButtons',
			]),
			uiMarkingMenuDatatypeButtons(){
				return this.get_uiMarkingMenuDatatypeButtons
			},
		},

		watch: {
			uiMarkingMenuDatatypeButtons(newCount, oldCount){},
		},
	}
</script>

<style lang="sass">

	.menu-datatype
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