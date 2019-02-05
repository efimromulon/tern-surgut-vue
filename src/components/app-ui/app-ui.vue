<template>

	<div class="app-ui">
		<div class="app-ui__header">
			<header class="header-view">
				<div class="header-view__search-layout">
					

				</div>
				<div class="header-view__settings-layout">


				</div>
			</header>
		</div>
		<div class="search-list-container">
			<div class="search-list-view">	
				<div class="search-list-panel-view">
					
				</div>

			</div>
		</div>
		<div class="app-ui__sidebar-container-right">

		</div>
	</div>
	
</template>

<script>
	export default {
		name: 'app-ui',
		components: {
			//appUiSettings,
			//search,
		},
		data () {
			return {

			}
		},
		computed: {

		},
		methods: {

		},
		watch: {

		},
	}

</script>

<style lang='sass'>
	.app__ui
		z-index: 7000
		position: absolute
		top: 1rem
		left: 1rem
		right: 1rem
	.search-list-container
		display: block
	.search-list-view
		position: absolute
		display: flex
		flex-direction: column
		width: 0
		top: 64px
		left: 12px
	.search-list-panel-view
		position: relative
		width: 384px
		@include shadow(2)
		color: $newcolour2
</style>
