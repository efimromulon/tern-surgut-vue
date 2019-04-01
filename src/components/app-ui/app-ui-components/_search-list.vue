<template>
	<div class="search-list-view">
		<div class="sidebar-left-panel-header-view">
			<div class="sidebar-left-panel-header-view__title">
				<div class="sidebar-left-panel-header-view__title-text">
					Результаты поиска
				</div>
			</div>
		</div>
		<div class="Search-results"  data-scrollbar tabindex="1" v-show="!searchCollapsed">
			<div class="scroll-content" style="overflow: hidden; outline: none;">
				<div class="search-list-view__list">
				<ul class="search-page-view">
					<search-list-item
						:searchItemArr="getSearchResultKNP"
						v-if="getSearchResultKNP.length !== 0"
					></search-list-item>
					<search-list-item
						:searchItemArr="getSearchResultPNP"
						v-if="getSearchResultPNP.length !== 0"
					></search-list-item>
					<search-list-item
						:searchItemArr="getSearchResultTNP"
						v-if="getSearchResultTNP.length !== 0"
					></search-list-item>
					<search-list-item
						:searchItemArr="getSearchResultNNP"
						v-if="getSearchResultNNP.length !== 0"
					></search-list-item>
					<search-list-item
						:searchItemArr="getSearchResultKAS"
						v-if="getSearchResultKAS.length !== 0"
					></search-list-item>
				</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<script>

	import {mapGetters} from 'vuex'
	import Scrollbar from 'smooth-scrollbar'
	import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
	import searchListItem from './_search-list-item'
	export default {

		name: 'search-list',
		components: {
			searchListItem,
		},
		props: ['SearchInput'],
		data () {
			return {
				data_displayResultLabels: null,
				data_SearchInput: null,
				tl: null,
				tl_options: {},
			}
		},
		computed: {
			...mapGetters([
				'searchCollapsed', 
				'getSearchLoading', 
				'getSearchResultKNP',
				'getSearchResultPNP',
				'getSearchResultTNP',
				'getSearchResultNNP',
				'getSearchResultKAS',
				'getNumberOfSearchResults',
			])
		},
		watch: {
			searchCollapsed(newCount, oldCount){},
			getSearchLoading(newCount, oldCount){},
			getSearchResultKNP(newCount, oldCount){},
			getSearchResultPNP(newCount, oldCount){},
			getSearchResultTNP(newCount, oldCount){},
			getSearchResultNNP(newCount, oldCount){},
			getSearchResultKAS(newCount, oldCount){},
			getNumberOfSearchResults(newCount, oldCount){
				if(newCount === 0){
					this.sl_animate_in();
				} else {
					this.sl_animate_out();
				};
			},
		},
		methods: {
			searchDataToComponentData(){
				this.data_SearchInput = this.SearchInput;
				this.data_displayResultLabels = this.displayResultLabels;
			},
			sl_animate_in(){
				console.log('sl-ani-in');
				tl.to('.Search-results',.2,{top: 3000,ease: Power2.easeInOut}, 0)
			},
			sl_animate_out(){

			},
		},
		mounted(){
			this.tl = new TimelineMax();
			this.searchDataToComponentData();
			Scrollbar.use(OverscrollPlugin)
			Scrollbar.init(document.querySelector('.Search-results'), {
				damping: 0.1,
				thumbMinSize: 20,
				renderByPixels: true,
				alwaysShowTracks: true,
				continuousScrolling: true,
				plugins: {
					overscroll: {
						effect: 'bounce',
						damping: 0.2,
						maxOverscroll: 150,
						glowColor: '#87ceeb',
					}
				}
			});
		},
	}
</script>

<style lang='sass'>
	.search-list-view__list
		list-style: none
		margin: 0
	.search-page-view
		list-style: none
		margin: 0
		padding: 0
	.Search-results
		position: relative
	.sidebar-left-panel-header-view
		position: relative
		overflow: hidden
	.sidebar-left-panel-view
		overflow: hidden
</style>