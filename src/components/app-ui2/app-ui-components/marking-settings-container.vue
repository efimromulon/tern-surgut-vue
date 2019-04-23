<template>
	<div class="marking-settings-container">
		<marking-settings-menu-main></marking-settings-menu-main>
		<marking-settings-menu-sub></marking-settings-menu-sub>
		<marking-settings-content></marking-settings-content>
	</div>
</template>

<script>
	import markingSettingsMenuMain 	from './marking-settings-container/marking-settings-menu-main.vue'
	import markingSettingsMenuSub 	from './marking-settings-container/marking-settings-menu-sub.vue'
	import markingSettingsContent 	from './marking-settings-container/marking-settings-content.vue'
	export default {
		name: 'marking-settings-container',
		data () {
			return {

			}
		},
		computed: {

		},
		created(){

		},
		mounted(){

		},
		methods: {

		},
		watch: {

		},
		components: {
			markingSettingsMenuMain,
			markingSettingsMenuSub,
			markingSettingsContent,
		}
	}
</script>

<style lang='sass'>
@import "@/sass/base/_typography.sass"
@import "@/sass/abstracts/_variables.sass"
@import "@/sass/abstracts/_mixins.sass"
.marking-settings-container
	//visibility: hidden
	//position: absolute
	display: flex
	flex-basis: auto
	flex-direction: column
	flex-grow: 0
	flex-shrink: 1
	flex-wrap: no-wrap
	min-height: 20vh
	width: 100%
	margin-top: 5px
</style>