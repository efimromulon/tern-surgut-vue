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
					<ui-settings-header/>
				</div>
			</header>
		</div>
		<div class="app-ui-main-container" v-show="buttonFunnel">
			<div class="app-ui-main-view">
				<div class="app-ui-main-view__panel-core-menu">
					<ui-settings-panel-core-menu/>
				</div>
				<div class="app-ui-main-view__panel-menus">
					<component v-bind:is="activeComponentName"></component>
				</div>
				<div class="app-ui-main-view__panel-view">
					<ui-settings-panel-view/>
				</div>
			</div>
		</div>
		<div class="sidebar-left-container">
			<div class="sidebar-left-view">	
				<div class="sidebar-left-panel-view"  v-if="!searchResultTabClosed">
					
					<div class="sidebar-left-panel-view__content">
						<div class="sidebar-left-panel-view__content-wrapper">
							
							<search-list/>
						
						</div>
					</div>
					<button-collapse
						:btnClassName = "`sidebar-left-panel-view`"
						:btnType = "`search`"
					></button-collapse>
					<button-cross
						:btnClassName = "`sidebar-left-panel-view`"
						:btnType = "`search`"
					></button-cross>

				</div>
			</div>
		</div>
		<div class="sidebar-right-container">
			<div class="sidebar-right-view">	
				<div class="sidebar-right-panel-view">

				</div>
			</div>
		</div>
	</div>
	
</template>

<script>
	
	import {mapGetters} from 'vuex'

	import searchInput from './app-ui-components/_search-input.vue'
	import searchList from './app-ui-components/_search-list.vue'

	import uiSettingsHeader from './app-ui-components/_ui-settings-header.vue'

	import uiSettingsPanelCoreMenu from './app-ui-components/_ui-settings-panel-core-menu.vue'

	import uiSettingsPanelMenusMenuLayersSettings from './app-ui-components/_ui-settings-panel-menus__menu-layers-settings.vue'
	import uiSettingsPanelMenusMenuMarkingSettings from './app-ui-components/_ui-settings-panel-menus__menu-marking-settings.vue'
	import uiSettingsPanelView from './app-ui-components/_ui-settings-panel-view.vue'

	import buttonCross from '@/components/app-common/buttons/button-cross.vue'
	import buttonCollapse from '@/components/app-common/buttons/button-collapse.vue'

	export default {

		name: 'app-ui',

		components: {
			searchList,
			searchInput,
			uiSettingsHeader,
			uiSettingsPanelCoreMenu,
			uiSettingsPanelMenusMenuLayersSettings,
			uiSettingsPanelMenusMenuMarkingSettings,
			uiSettingsPanelView,
			buttonCross,
			buttonCollapse,
		},

		data () {
			return {
				buttonFunnelId: 0,
			}
		},

		computed: {
			...mapGetters([
				'searchResultTabClosed',
				'getButtonSquareById',
				'get_uiCoreMenuButton_active_componentName',
			]),
			buttonFunnel(){
				return this.getButtonSquareById(this.buttonFunnelId)
			},
			activeComponentName(){
				return this.get_uiCoreMenuButton_active_componentName
			},
		},

		methods: {
		},

		watch: {
			buttonFunnel(newCount, oldCount){},
			activeComponentName(newCount, oldCount){},
		},

	}

</script>

<style lang='sass'>

	.app-ui
		z-index: 7000
		position: absolute
		top: 0
		width: 100vw
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
		min-width: 20vw
		max-width: 20vw

	.header-view__search-layout
		display: flex
		flex-shrink: 2
		min-width: 448px

	.header-view__settings-layout
		position: absolute
		left: 50%
		transform: translateX(-50%)
		width: 40vw

	.app-ui-main-container
		position: absolute
		display: flex
		top: 64px
		left: 50%
		flex-direction: column
		transform: translateX(-50%)
		height: auto
		user-select: none
		white-space: nowrap
		//background-color: red
		width: 40vw

	.app-ui-main-view
	.app-ui-main-view__panel-core-menu
		position: relative
		width: 100%

	.app-ui-main-view__panel-menus
		position: relative
		width: 100%
		top: 4px

	.app-ui-main-view__panel-view
		position: relative
		width: 100%
		top: 4px

	.sidebar-left-container, .sidebar-right-container
		display: block

	.sidebar-left-view, .sidebar-right-view
		position: absolute
		display: flex
		flex-direction: column
		width: 0

	.sidebar-left-view
		top: 64px
		left: 12px

	.sidebar-right-view
		top: 64px
		right: 12px

	.sidebar-left-panel-view, .sidebar-right-panel-view
		position: relative
		width: 20vw
		min-height: 36px
		background: #fff
		border-radius: 4px
		overflow: hidden
		@include shadow(2)
		color: $color-white

	.sidebar-right-panel-view
		transform: translateX(-100%)

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
		max-height: calc(100vh - 64px - 12px)
		min-height: 37px
		overflow: auto

	.sidebar-left-panel-view__collapse
		position: absolute
		top: 0
		right: 0

	.sidebar-left-panel-view__close
		right: 36px
		position: absolute
		top: 0

</style>
