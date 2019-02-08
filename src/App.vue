<template>
	<div id="app">
		<!-- <app-preloader></app-preloader> -->
		<app-map></app-map>
		<app-ui></app-ui>
		<!-- <app-popup-extended></app-popup-extended> -->
	</div>
</template>

<script>

	import appUi 	from '@/components/app-ui/app-ui.vue';
	import appMap 	from '@/components/app-map/app-map.vue';
	import $ 		from 'jquery';

	export default {
		name: 'app',
		data(){
			return {

			}
		},
		computed: {

		},
		methods: {
			LOAD_JSON_CURRENT_USER(){
				let STORE = this.$store;
				console.log('$',$);
				$.get(
					'~@/assets/jsons/getCurrentUser.json', 
					function(json){
						console.log(json);
						var payload = {jsonName: 'getCurrentUser', jsonData: json};
						STORE.dispatch('get_local_json',payload)
						console.log(payload)
					}
				)
				.done(
					function(){
				
					}
				);
			},
			LOAD_JSON_AZS_INFO(){
				let STORE = this.$store;
				$.get(
					'~@/assets/jsons/getAzsInfo.json', 
					function(data){
						let payload = {jsonName: 'getAzsInfo', jsonData: data};
						setTimeout(function() {
							STORE.dispatch('get_local_json',payload);
						}, 0)
					}
				)
				.done(
					function(){
				
					}
				);
			},
			LOAD_JSON_FUEL_STOCK(){
				let STORE = this.$store;
				$.get(
					'~@/assets/jsons/getFuelStock.json', 
					function(data){
						let payload = {
							jsonName: 'getFuelStock', 
							jsonData: data.data,
							jsonIndicator: data.indicator,
							jsonExpress: data.express,
						};
						STORE.dispatch('get_indicator_json',payload);
						
					}
				)
				.done(
					function(){
				
					}
				);
			},
			LOAD_JSON_FUEL_SELL(){
				let STORE = this.$store;
				$.get(
					'~@/assets/jsons/getFuelSell.json', 
					function(data){
						let payload = {
							jsonName: 'getFuelSell', 
							jsonData: data.data,
							jsonIndicator: data.indicator,
							jsonExpress: data.express,
						};
						STORE.dispatch('get_indicator_json',payload);
						
					}
				)
				.done(
					function(){
				
					}
				);
			},
			LOAD_JSON_ARTICLE_STOCK(){
				let STORE = this.$store;
				$.get(
					'~@/assets/jsons/getArticleSell.json', 
					function(data){
						let payload = {
							jsonName: 'getArticleSell', 
							jsonData: data.data,
							jsonIndicator: data.indicator,
							jsonExpress: data.express,
						};
						STORE.dispatch('get_indicator_json',payload);
						
					}
				)
				.done(
					function(){
				
					}
				);
			},
			LOAD_JSON_STATION_COORDS(){
				let STORE = this.$store;
				$.get(
					'~@/assets/jsons/getStationsLatLng.json', 
					function(data){
						let payload = {
							jsonName: 'getStationsLatLng', 
							jsonData: data,
						};
						STORE.dispatch('get_local_json',payload);
						
					}
				)
				.done(
					function(){
				
					}
				);
			},
			LOAD_JSON_STATION_INFO(){
				let STORE = this.$store;
				$.get(
					'~@/assets/jsons/getStationsInfo.json', 
					function(data){
						let payload = {
							jsonName: 'getStationsInfo', 
							jsonData: data,
						};
						STORE.dispatch('get_local_json',payload);
						
					}
				)
				.done(
					function(){
				
					}
				);
			},
			LOAD_JSON_STATION_FULL(){
				let STORE = this.$store;
				$.get(
					'~@/assets/jsons/getDepartmentFull.json', 
					function(data){
						let payload = {
							jsonName: 'getDepartmentFull', 
							jsonData: data,
						};
						STORE.dispatch('get_local_json',payload);
						
					}
				)
				.done(
					function(){
				
					}
				);
			},

		},
		mounted() {
			this.LOAD_JSON_CURRENT_USER();
			this.LOAD_JSON_STATION_FULL();
			this.LOAD_JSON_AZS_INFO();
			this.LOAD_JSON_FUEL_STOCK();
			this.LOAD_JSON_FUEL_SELL();
			this.LOAD_JSON_ARTICLE_STOCK();
		},
		watch: {

		},
		components: {
			appUi,
			appMap,
		}
	}
</script>

<style lang="sass">
	body
		user-select: none
		overflow: hidden

</style>
