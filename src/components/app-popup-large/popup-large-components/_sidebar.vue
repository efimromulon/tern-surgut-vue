<template>
	<div class="popup-large-snippet__sidebar-wrapper">
		<div class="popup-large-snippet__sidebar-menu">
			<menu-vertical/>
		</div>
	</div>
</template>

<script>

	import menuVertical from './_menu-vertical.vue'

	export default {

		name: 'sidebar',

		components: {
			'menu-vertical': 		menuVertical,
		},

		data () {
			return {

			}
		}
	}

</script>

<style lang="sass">
	.popup-large-snippet__sidebar-wrapper
		position: relative
		display: flex
		user-select: none
		flex-direction: column
	.popup-large-snippet__sidebar-menu
		vertical-align: middle
</style>