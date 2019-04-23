<template>
	<div class="colors_buttons_wrapper">
		<settings-color-switch-button 
			:buttonsData = "uiColorSwitchButtons[key]"
			 v-for = "(item, key) in uiColorSwitchButtons"
			 :key = "key"
		></settings-color-switch-button>
	</div>
</template>

<script>

	import {mapGetters} from 'vuex'
	import settingsColorSwitchButton from './_settings-color-switch-button.vue'

	export default {

		name: 'settings-color-switch',

		components: {
			settingsColorSwitchButton,
		},

		data () {
			return {
			}
		},

		computed: {
			...mapGetters([
				'get_uiColorSwitchButtons',
			]),
			uiColorSwitchButtons(){
				return this.get_uiColorSwitchButtons
			},
		},

		watch: {
			uiColorSwitchButtons(newCount, oldCount){}
		},
		
	}

</script>

<style lang='sass'>

	.colors_buttons_wrapper
		position: absolute
		top: 0
		left: 65px
		display: inline-block
		flex-basis: auto
		flex-direction: row
		flex-grow: 0
		flex-shrink: 1
		flex-wrap: nowrap
		height: 45px
		width: calc(100% - 65px)
		//text-align: center
		line-height: 45px
		margin: 0

</style>