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
				data_SearchInput: null
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
			]),
			get_searchResults(){
				return this.$store.getters.get_searchResults;
			},
			displayResultLabels(){
				let a1=[], a2=[], a3=[], a4=[], a5=[];
				let a = this.get_searchResults;

				for( var i = 0; i < a.length; i++ ){
					switch (a[i].category) {
						case 'Киришиавтосервис' : 
							a1.push(a[i].label);
							break;
						case 'Калининграднефтепродукт' : 
							a2.push(a[i].label);
							break;
						case 'Тверьнефтепродукт' : 
							a3.push(a[i].label);
							break;
						case 'Новгороднефтепродукт' : 
							a4.push(a[i].label);
							break;
						case 'Псковнефтепродукт' : 
							a5.push(a[i].label);
							break;
					};
				};
				let result = [

					{name: "Киришиавтосервис", data: a1}, 
					{name: "Калининграднефтепродукт", data: a2}, 
					{name: "Тверьнефтепродукт", data: a3}, 
					{name: "Новгороднефтепродукт", data: a4}, 
					{name: "Псковнефтепродукт", data: a5}

				];
				
				return result;
			},
		},
		methods: {
			searchDataToComponentData(){
				this.data_SearchInput = this.SearchInput;
				this.data_displayResultLabels = this.displayResultLabels;
			},
		},
		mounted(){
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
		watch: {
			get_searchResults(newCount, oldCount){
				this.searchDataToComponentData();
			},
			searchCollapsed(newCount, oldCount){
			},
			getSearchLoading(newCount, oldCount){
			},
			getSearchResultKNP(newCount, oldCount){
			},
			getSearchResultPNP(newCount, oldCount){
			},
			getSearchResultTNP(newCount, oldCount){
			},
			getSearchResultNNP(newCount, oldCount){
			},
			getSearchResultKAS(newCount, oldCount){
			},
		}
	}
</script>

<style lang='sass'>
	.search-list-view__list
		list-style: none
		margin: 0
		padding: 16px
	.search-page-view
		list-style: none
		margin: 0
		padding: 0
</style>