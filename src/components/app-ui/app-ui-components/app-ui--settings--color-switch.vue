<template>
	<div class="colors_buttons_wrapper">
		<color-switch-button 
			:buttonData = "buttonData[key]"
			 v-for = "(item, key) in buttonData"
			 :key = "key"
		></color-switch-button>
	</div>
</template>

<script>
	import colorSwitchButton from './app-ui--settings--color-switch--button.vue'

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
			colorSwitchButton,
		}
	}
</script>

<style lang='sass'>
	@import "@/sass/base/_typography.sass"
	@import "@/sass/abstracts/_variables.sass"
	@import "@/sass/abstracts/_mixins.sass"
	.colors_buttons_wrapper
		display: flex
		flex-basis: auto
		flex-direction: row
		flex-grow: 0
		flex-shrink: 1
		flex-wrap: nowrap
		height: 45px
		width: calc(100% - 65px)
		text-align: center
		line-height: 45px
		margin: 0 0px 0 20px//0 10px 0 10px

</style>