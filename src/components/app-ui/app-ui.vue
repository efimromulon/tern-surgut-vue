<template>

	<div class="app-ui">

		<div class="app-ui__header">
			<header class="header-view">
				<div class="header-view__search-layout">
					<div class="header-view__form-layout">
						<button-square 
							v-if="buttonSearch"
							:onClick="TOGGLE_BUTTON_SEARCH"
							:buttonClass="buttonSearchClass"
							:buttonBackroundActive="false"
							:buttonID="buttonSearchId"
						>
							<icon-search/>
						</button-square>
						<search-input
							v-if="!buttonSearch"
						></search-input>
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
					<ui-settings-panel-menu/>
				</div>
				<div class="app-ui-main-view__panel-view">
					<ui-settings-panel-view/>
				</div>
			</div>
		</div>

		<div class="sidebar-left-container">
			<div class="sidebar-left-view">	
				<component v-bind:is="leftComponent"></component>
			</div>
		</div>

		<div class="sidebar-right-container" v-if="rightContainer">
			<div class="sidebar-right-view">	
				<div class="sidebar-right-panel-view">

				</div>
			</div>
		</div>

		<!-- <div class="center-component-wrapper">
				<component v-bind:is="centerComponent"></component>
		</div> -->

	</div>
	
</template>

<script>
	
	import {mapGetters, mapState} from 'vuex'
	import searchInput from './app-ui-components/_search-input.vue'

	

	import uiSettingsHeader from './app-ui-components/_ui-settings-header.vue'

	import uiSettingsPanelCoreMenu from './app-ui-components/_ui-settings-panel-core-menu.vue'

	import uiSettingsPanelMenu from './app-ui-components/_ui-settings-panel-menu.vue'
	import uiSettingsPanelView from './app-ui-components/_ui-settings-panel-view.vue'

	//left side components with names after //
		const search = () => import('./app-ui-components/_search.vue') //search
		const detailedInfo = () => import('../app-map/app-map-components/_detailed-info.vue') //detailed-info
	// center side components with names after //

	export default {

		name: 'app-ui',

		components: {
			search,
			detailedInfo,
			searchInput,
			uiSettingsHeader,
			uiSettingsPanelCoreMenu,
			uiSettingsPanelMenu,
			uiSettingsPanelView
		},

		data () {
			return {
				buttonFunnelId: 0,
				buttonSearchId: 1,
				buttonSearchClass: 'button_search',
				searchInputComponent: 'search-input',
				rightContainer: false,
				tl: null,
			}
		},

		computed: {
			...mapGetters([
				'searchResultTabClosed',
				'getButtonSquareById',
			]),
			...mapState({
				leftComponent: state => state.dynamicComponents.leftMenuComponent,
				centerComponent: state => state.dynamicComponents.centralComponent,
				searchResultTabClosed: state =>state.search.searchResultTabClosed
			}),
			buttonFunnel(){
				return this.getButtonSquareById(this.buttonFunnelId)
			},
			buttonSearch(){
				return this.getButtonSquareById(this.buttonSearchId)
			},
		},

		mounted(){
		},

		methods: {
			TOGGLE_BUTTON_SEARCH(){
				this.$store.dispatch('toggle_ui_settings_button',{buttonArray: 'uiButtonSquare', id: this.buttonSearchId});
				let componentName = ''
				
				if (this.searchResultTabClosed) {
					componentName = 'search'
				}
				
				this.$store.dispatch('setComponent', {
					componentPosition: 'leftMenuComponent',
					componentName
				})
			
			},
			
		},

		watch: {
			buttonFunnel(newCount, oldCount){},
			buttonSearch(newCount, oldCount){},
		},

	}

</script>

<style lang='sass'>

	.app-ui
		position: absolute
		top: 0
		width: 100vw
		z-index: 2

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
		//min-width: 448px

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
		width: 40vw

	.app-ui-main-view
	.app-ui-main-view__panel-core-menu
		position: relative
		width: 100%

	.app-ui-main-view__panel-menus
		position: relative
		width: 100%
		top: 4px

	.panel-view__layout, .panel-menu__layout
		width: 100%



	.app-ui-main-view__panel-view
		position: relative
		width: 100%
		top: 8px
		@include border(2)

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
		//color: $color-white
		@include shadow(2)

	.sidebar-left-panel-view
		// height: 37px
	.Search-results
	.search-list-view
	.sidebar-right-panel-view
		transform: translateX(-100%)

	.sidebar-left-panel-view__content
		border-radius: 4px
		overflow: hidden

	.sidebar-left-panel-view__content-wrapper
		display: flex
		flex-direction: column
		min-height: 1em

	.sidebar-left-panel-view__collapse
		position: absolute
		top: 0
		right: 0
		z-index: 999999999

	.sidebar-left-panel-view__close
		right: 36px
		position: absolute
		top: 0
		z-index: 999999999
		

</style>
