<template>

	<div class="app-ui">
		<div class="app-ui__header">
			<header class="header-view">
				<div class="header-view__search-layout">
					<div class="header-view__form-layout">
						<search-input/>
					</div>
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
					<div class="sidebar-left-panel-view__collapse" title="Свернуть">
						<span>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path d="M15.293 14.707a1 1 0 0 0 1.414-1.414l-4-4a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 1.414 1.414L12 11.414l3.293 3.293z">
								
								</path>
							</svg>
						</span>
					</div>
					<div class="sidebar-left-panel-view__close" title="Закрыть">
						<span>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
								<path fill-rule="evenodd" d="M12 10.586L8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 0 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 1 0-1.414-1.414L12 10.586z">
									
								</path>
							</svg>
						</span>
					</div>
				</div>
			</div>
		</div>
		<div class="app-ui__sidebar-container-right">

		</div>
	</div>
	
</template>

<script>
	import searchInput from './app-ui-components/_search-input.vue'
	import searchList from './app-ui-components/_search-list.vue'
	export default {
		name: 'app-ui',
		components: {
			searchList,
			searchInput,
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
	.header-view
		position: absolute
		display: flex
		top: 12px
		right: 12px
		left: 12px
		height: auto
		user-select: none
		white-space: nowrap
	.header-view__form-layout
		position: relative
		display: flex
		width: 100%
		min-width: 384px
		max-width: 384px
	.header-view__search-layout
		display: flex
		flex-shrink: 2
		min-width: 448px
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
	.sidebar-left-panel-view__collapse
		position: absolute
		top: 0
		right: 0
		width: 24px
		height: 24px
		margin: 6px
		cursor: pointer
		opacity: .4
	.sidebar-left-panel-view__close
		right: 36px
		position: absolute
		top: 0
		width: 24px
		height: 24px
		margin: 6px
		cursor: pointer
		opacity: .4
</style>
