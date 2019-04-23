<template>
	<div class="marking-settings-content">

		<marking-settings-indicator-slider></marking-settings-indicator-slider>

	</div>
</template>

<script>
	import markingSettingsIndicatorSlider from './marking-settings-indicator-slider.vue'
	import { FluentRevealEffect } from "fluent-reveal-effect"
	export default {
		name: 'marking-settings-content',
		data () {
			return {
			}
		},
		computed: {
		},
		created(){
		},
		beforeMounted(){
		},
		mounted(){
		},
		methods: {
		},
		watch: {
		},
		components: {
			markingSettingsIndicatorSlider,
		}
	}
</script>

<style lang='sass'>
@import "@/sass/abstracts/_variables.sass"
@import "@/sass/abstracts/_mixins.sass"
.marking-settings-content
	background-color: $background-color-white
	width: 100%
	height: 200px
	margin-top: 10px
	@include shadow(2) 
</style>