<template>
	<div class="colors_buttons_wrapper">
		<settings-color-switch-button 
			:buttonData = "buttonData[key]"
			 v-for = "(item, key) in buttonData"
			 :key = "key"
		></settings-color-switch-button>
	</div>
</template>

<script>
	import settingsColorSwitchButton from './_settings-color-switch-button.vue'

	export default {
		name: 'settings-color-switch',
		data () {
			return {
				buttonData: null,
			}
		},
		created(){
			this.UPDATE_BUTTON_DATA_STATE();
		},
		computed: {
			get_buttonColorsL(){
				return this.$store.getters.get_buttonColorsL;
			},
			get_buttonColorsAll(){
				return this.$store.getters.get_buttonColorsAll;
			},
		},
		methods: {
			UPDATE_BUTTON_DATA_STATE(){
				this.buttonData = this.get_buttonColorsAll;
			},
		},
		watch: {
			get_buttonColorsAll(newCount, oldCount){
				this.UPDATE_BUTTON_DATA_STATE();
			},
		},
		components: {
			settingsColorSwitchButton,
		}
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