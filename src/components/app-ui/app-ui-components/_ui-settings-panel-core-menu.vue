<template>
	<div class="core-menu">
		<ui-settings-panel-core-menu-button
			:buttonData = "uiCoreMenuButtons[buttonID]"
			 v-for = "(buttonName, buttonID) in uiCoreMenuButtons"
			:key = "buttonID"
		>		
		</ui-settings-panel-core-menu-button>
		<button-cross
			:btnClassName = "`core-menu`"
			:btnType = "`core-menu`"
		>
		</button-cross>
	</div>
</template>
<script>

	import {mapGetters} from 'vuex'
	import uiSettingsPanelCoreMenuButton from './_ui-settings-panel-core-menu-button.vue'
	import buttonCross from '@/components/app-common/buttons/button-cross.vue'

	export default {

		name: 'ui-settings-panel-core-menu',

		components: {
			uiSettingsPanelCoreMenuButton,
			buttonCross,
		},

		data () {
			return {
			}
		},

		computed: {

			...mapGetters([
				'get_uiCoreMenuButtons',
			]),
			uiCoreMenuButtons(){
				return this.get_uiCoreMenuButtons
			},

		},

		watch: {

			uiCoreMenuButtons(newCount, oldCount){},

		},

	}
</script>

<style lang='sass'>

	.core-menu
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
		justify-content: start
		background-color: $color-white
		@include shadow(2)
		@include border(2)

	.core-menu__close
		position: absolute
		top: 0
		right: 0

</style>