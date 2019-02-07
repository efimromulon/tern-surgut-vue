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
		<div class="sidebar-left-container">
			<div class="sidebar-left-view">	
				<div class="sidebar-left-panel-view">
					
					<div class="sidebar-left-panel-view__content">
						<div class="sidebar-left-panel-view__content-wrapper">
							
							<search-list/>
						
						</div>
					</div>

				</div>
			</div>
		</div>
		<div class="app-ui__sidebar-container-right">

		</div>
	</div>
	
</template>

<script>
	import searchList from './app-ui-components/_search-list.vue'
	export default {
		name: 'app-ui',
		components: {
			searchList,
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
	.app-ui
		z-index: 7000
		position: absolute
		// top: 1rem
		// left: 1rem
		// right: 1rem
	.sidebar-left-container
		display: block
	.sidebar-left-view
		position: absolute
		display: flex
		flex-direction: column
		width: 0
		top: 64px
		left: 12px
	.sidebar-left-panel-view
		position: relative
		width: 384px
		min-height: 36px
		background: #fff
		border-radius: 4px
		overflow: hidden
		@include shadow(2)
		color: $newcolour2

	.sidebar-left-panel-view__content
		border-radius: 4px
		overflow: hidden
	.sidebar-left-panel-view__content-wrapper
		display: flex
		flex-direction: column
		min-height: 1em
	.search-list-view
		display: flex
		flex-direction: column
		max-height: inherit
		min-height: 1em
		height: calc(100vh - 64px - 12px)
		overflow: auto
</style>
