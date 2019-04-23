<template>
	<div class="marking-settings-indicator-slider" ref="nouislider">
	</div>
</template>

<script>
	//import markingSettingsIndicatorSlider from './marking-settings-indicator-slider.vue'
	import { FluentRevealEffect } from "fluent-reveal-effect"
	import noUiSlider from "nouislider"
	export default {
		name: 'marking-settings-indicator-slider',
		data () {
			return {
				slider: null,
			}
		},
		computed: {
		},
		created(){
		},
		beforeMounted(){

		},
		mounted(){
			this.slider = this.$refs.nouislider;
			this.a();
		},
		methods: {
			a(){
			noUiSlider.create(this.slider, {
				start: [20, 80],
				connect: true,
				range: {
					'min': 0,
					'max': 100
				}
			});
			},
		},
		watch: {
		},
		components: {
			
		}
	}
</script>

<style lang='sass'>
@import "@/sass/abstracts/_variables.sass"
@import "@/sass/abstracts/_mixins.sass"
.marking-settings-indicator-slider
.noUi-horizontal.noUi-handle
	top: -29px
</style>