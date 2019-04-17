<template>
	<div class="search-list-view" ref="SearchListView" >
		<div class="sidebar-left-panel-header-view">
			<div class="sidebar-left-panel-header-view__title">
				<div class="sidebar-left-panel-header-view__title-text">
					{{ numberOfSearchResults > 0 ? "Найдено: " + numberOfSearchResults : "Ничего не найдено" }}
				</div>
			</div>
		</div>
		
		<transition			
			v-bind:css="false"
			v-on:before-enter="beforeEnter"
			v-on:enter="enter"
			v-on:after-enter="afterEnter"
			v-on:enter-cancelled="enterCancelled"

			v-on:before-leave="beforeLeave"
			v-on:leave="leave"
			v-on:after-leave="afterLeave"
			v-on:leave-cancelled="leaveCancelled"
		>
	
			<div class="Search-results" data-scrollbar tabindex="1" v-show="numberOfSearchResults && (!searchCollapsed)">
				<div class="scroll-content" style="overflow: hidden; outline: none;" >
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
	
			
		</transition>
	</div>
</template>
<script>

	import {mapGetters, mapState} from 'vuex'
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
				tl_options: {}
			}
		},
		computed: {
			...mapState({ searchCollapsed: state => state.search.searchCollapsed }),
			...mapGetters([
				'getSearchLoading', 
				'getSearchResultKNP',
				'getSearchResultPNP',
				'getSearchResultTNP',
				'getSearchResultNNP',
				'getSearchResultKAS',
				'getNumberOfSearchResults',
			]),
			numberOfSearchResults(){
				// if((this.getNumberOfSearchResults === 0)&&(!this.searchCollapsed)){
				// 	return true
				// } else {
				// 	return false
				// };
				
				return this.getNumberOfSearchResults;
				
				// switch (true){
				// 	case ((this.getNumberOfSearchResults === 1)&&(this.searchCollapsed === true)) : 
				// 		return false
				// 		break;
				// 	case ((this.getNumberOfSearchResults === 1)&&(this.searchCollapsed === false)) : 
				// 		return true
				// 		break;
				// 	case ((this.getNumberOfSearchResults === 1)&&(this.searchCollapsed === true)) : 
				// 		return false
				// 		break;
				// 	case ((this.getNumberOfSearchResults === 1)&&(this.searchCollapsed === false)) : 
				// 		return false
				// 		break;
				// };
			},
		},
		watch: {
			searchCollapsed: {
				handler: function(newCount, oldCount){
					
					if(!oldCount || newCount !== oldCount){
						
					}	
				},
				immediate:true
			},
			getSearchLoading(newCount, oldCount){},
			getSearchResultKNP(newCount, oldCount){},
			getSearchResultPNP(newCount, oldCount){},
			getSearchResultTNP(newCount, oldCount){},
			getSearchResultNNP(newCount, oldCount){},
			getSearchResultKAS(newCount, oldCount){},
			getNumberOfSearchResults:{
				handler: function(newCount, oldCount){
					
				if(!oldCount || newCount !== oldCount){
					
				}	
			},
				immediate:true
			},
			numberOfSearchResults(newCount, oldCount){
				if(!oldCount || newCount !== oldCount){
					
				}
			},
		},
		methods: {
			searchDataToComponentData(){
				this.data_SearchInput = this.SearchInput;
				this.data_displayResultLabels = this.displayResultLabels;
			},
			sl_animate_in(){
				// console.log('sl-ani-in');
				
				tl.to('.Search-results',.2,{top: 3000,ease: Power2.easeInOut}, 0)
			},
			sl_animate_out(){

			},
			beforeEnter: function (el) {
			},
			enter: function (el, done) {
				// console.log(this.tl);
				//Search-results
				let vh = window.innerHeight * 0.01;
				let newHeight = this.$refs.SearchListView.offsetHeight;
				let H = newHeight + 'px';
	
				this.tl
				.fromTo('.Search-results', .4, {top: "0px"}, {top: "0px", ease: Power2.easeInOut})
				// .fromTo('.sidebar-left-panel-view', .4, {height: "37px"},{height: H, ease: Power2.easeInOut, onComplete: done});
			},
			afterEnter: function (el) {
			},
			enterCancelled: function (el) {
			},
			beforeLeave: function (el) {
			},
			leave: function (el, done) {
				// console.log("Leave");
				let vh = window.innerHeight * 0.01;
				let newHeight = this.$refs.SearchListView.offsetHeight;
				let H = newHeight + 'px';
				let negH = '-' + H;
				// console.log(H);
				// console.log(negH);
				this.tl
				// .fromTo('.sidebar-left-panel-view', .4, {height: H},{height: "37px", ease: Power2.easeInOut})
				.fromTo('.Search-results', .4, {top: "0px"}, {top: negH, ease: Power2.easeInOut, onComplete: done});
				
			},
			afterLeave: function (el) {
			},
			// leaveCancelled only available with v-show
			leaveCancelled: function (el) {

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
#testgtt
	max-height: 893px
	// overflow: hidden

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
		top: 0
		overflow: hidden
		z-index: 1
	.sidebar-left-panel-view
		overflow: hidden
</style>