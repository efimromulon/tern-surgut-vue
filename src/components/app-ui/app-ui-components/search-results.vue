<template>
	<div class="Search-results"  data-scrollbar tabindex="1" >
		<div class="scroll-content" style="overflow: hidden; outline: none;">
		<search-results-list :searchData = "data_displayResultLabels"></search-results-list>
		</div>
	</div>
</template>

<script>
	import searchResultsList from './search-results/search-results-list.vue'
	import Scrollbar from 'smooth-scrollbar'
	import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
	export default {

		name: 'search-results',
		props: ['SearchInput'],
		data () {
			return {
				data_displayResultLabels: null,
				data_SearchInput: null
			}
		},
		computed: {
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
		components: {
			searchResultsList
		},
		watch: {
			get_searchResults(newCount, oldCount){
				this.searchDataToComponentData();
			},
		}
	}
</script>

<style lang='sass'>
.Search-results
	display: block
	height: 100%
	width: 100%
</style>